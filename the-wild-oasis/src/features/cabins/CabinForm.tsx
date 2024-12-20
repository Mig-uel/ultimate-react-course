import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { createCabin } from '../../services/api_cabins'
import { Button, FileInput, Form, FormRow, Input, Textarea } from '../../ui'
import type { Tables } from '../../supabase_types'

function CabinForm() {
  const queryClient = useQueryClient()
  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
  } = useForm<Tables<'cabins'>>()
  const { isPending, mutate } = useMutation({
    mutationFn: createCabin,

    onSuccess: () => {
      toast.success('New cabin successfully created')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
      reset()
    },

    onError: (error) => {
      toast.error(error.message)
    },
  })

  const handleFormSubmit: SubmitHandler<Tables<'cabins'>> = (data) => {
    mutate(data)
  }

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
          defaultValue={0}
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
          defaultValue=''
          {...register('description', {
            required: 'Cabin description is required',
          })}
          disabled={isPending}
        />
      </FormRow>

      <FormRow label='Image' errors={errors} id='image'>
        <FileInput id='image' accept='image/*' disabled={isPending} />
      </FormRow>

      <FormRow errors={errors}>
        {/* type is an HTML attribute! */}
        <Button disabled={isPending} $variation='secondary' type='reset'>
          Cancel
        </Button>
        <Button disabled={isPending}>Add cabin</Button>
      </FormRow>
    </Form>
  )
}

export default CabinForm
