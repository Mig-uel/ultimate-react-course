import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { createCabin, editCabin } from '../../services/api_cabins'
import { Button, FileInput, Form, FormRow, Input, Textarea } from '../../ui'
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
  const queryClient = useQueryClient()
  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
  } = useForm<FormData>({
    defaultValues: edit && cabin ? { ...cabin, image: undefined } : {},
  })

  const { isPending, mutate } = useMutation({
    mutationFn:
      edit && cabin
        ? (data: FormData) =>
            editCabin(
              { ...data, image: data.image[0] },
              cabin.image || undefined
            )
        : (data: FormData) => createCabin({ ...data, image: data.image[0] }),

    onSuccess: () => {
      toast.success(edit ? 'Cabin edited' : 'Cabin created')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
      reset()
    },

    onError: (error) => {
      toast.error(error.message)
    },
  })

  const handleFormSubmit: SubmitHandler<FormData> = (data) => mutate(data)

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <FormRow label='Cabin Name' errors={errors} id='name'>
        <Input
          type='text'
          id='name'
          {...register('name', {
            required: 'Cabin name is required',
          })}
          disabled={isPending}
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
          disabled={isPending}
        />
      </FormRow>

      <FormRow label='Price' errors={errors} id='regularPrice'>
        <Input
          type='number'
          id='regularPrice'
          {...register('regularPrice', {
            required: 'Cabin price is required',
          })}
          disabled={isPending}
        />
      </FormRow>

      <FormRow label='Discount' errors={errors} id='discount'>
        <Input
          type='number'
          id='discount'
          {...register('discount', {
            required: 'Cabin discount is required',
            validate: (value) =>
              value! <= +getValues().regularPrice! ||
              'Discount should be less than the regular price',
          })}
          disabled={isPending}
        />
      </FormRow>

      <FormRow label='Description' errors={errors} id='description'>
        <Textarea
          type='number'
          id='description'
          {...register('description', {
            required: 'Cabin description is required',
          })}
          disabled={isPending}
        />
      </FormRow>

      <FormRow label='Image' errors={errors} id='image'>
        <FileInput
          id='image'
          accept='image/*'
          disabled={isPending}
          {...register('image', {
            required: edit ? false : 'Cabin image is required',
          })}
        />
      </FormRow>

      <FormRow errors={errors}>
        {/* type is an HTML attribute! */}
        <Button disabled={isPending} $variation='secondary' type='reset'>
          Cancel
        </Button>
        <Button disabled={isPending}>{edit ? 'Edit' : 'Add'} cabin</Button>
      </FormRow>
    </Form>
  )
}

export default CabinForm
