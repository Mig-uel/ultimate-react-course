import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, FileInput, Form, FormRow, Input, Textarea } from '../../ui'
import { useCreateCabin } from './useCreateCabin'
import { useUpdateCabin } from './useUpdateCabin'
import type { Tables } from '../../supabase_types'

type FormData = Omit<Tables<'cabins'>, 'image'> & {
  image: FileList
}

function CabinForm({
  cabin,
  edit,
}: {
  cabin?: Tables<'cabins'>
  edit?: boolean
}) {
  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
  } = useForm<FormData>({
    defaultValues: edit && cabin ? { ...cabin, image: undefined } : {},
  })

  const { create, isPendingCreating } = useCreateCabin()
  const { isPendingUpdating, update } = useUpdateCabin(
    cabin || ({} as Tables<'cabins'>)
  )

  const handleFormSubmit: SubmitHandler<FormData> = (data) =>
    edit ? update(data) : create(data)

  const isLoading = isPendingCreating || isPendingUpdating

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <FormRow label='Cabin Name' errors={errors} id='name'>
        <Input
          type='text'
          id='name'
          {...register('name', {
            required: 'Cabin name is required',
          })}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label='Max Capacity' errors={errors} id='maxCapacity'>
        <Input
          type='number'
          id='maxCapacity'
          {...register('maxCapacity', {
            required: 'Cabin max capacity is required',
            min: { value: 1, message: 'Capacity should be at least 1' },
          })}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label='Price' errors={errors} id='regularPrice'>
        <Input
          type='number'
          id='regularPrice'
          {...register('regularPrice', {
            required: 'Cabin price is required',
            min: {
              value: 1,
              message: 'Cabin price should be greater than or equal to 1',
            },
            max: { value: 32767, message: 'Price can not exceed 32767' },
          })}
          disabled={isLoading}
          min={1}
          onWheel={(e) => e.cancelable && e.preventDefault()}
        />
      </FormRow>

      <FormRow label='Discount' errors={errors} id='discount'>
        <Input
          type='number'
          id='discount'
          {...register('discount', {
            required: 'Cabin discount is required',
            min: {
              value: 0,
              message: 'Cabin discount should be greater than or equal to 0',
            },
            validate: (value) =>
              value! <= +getValues().regularPrice! ||
              'Discount should be less than the regular price',
          })}
          disabled={isLoading}
          min={0}
          onWheel={(e) => e.cancelable && e.preventDefault()}
        />
      </FormRow>

      <FormRow label='Description' errors={errors} id='description'>
        <Textarea
          type='number'
          id='description'
          {...register('description', {
            required: 'Cabin description is required',
          })}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label='Image' errors={errors} id='image'>
        <FileInput
          id='image'
          accept='image/*'
          disabled={isLoading}
          {...register('image', {
            required: edit ? false : 'Cabin image is required',
          })}
        />
      </FormRow>

      <FormRow errors={errors}>
        {/* type is an HTML attribute! */}
        <Button disabled={isLoading} $variation='secondary' type='reset'>
          Cancel
        </Button>
        <Button disabled={isLoading}>{edit ? 'Edit' : 'Add'} cabin</Button>
      </FormRow>
    </Form>
  )
}

export default CabinForm
