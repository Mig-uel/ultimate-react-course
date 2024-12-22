import { useSettings } from './useSettings'
import { useUpdateSetting } from './useUpdateSetting'
import { Form, FormRow, Input, Spinner } from '../../ui'
import type { Tables } from '../../supabase_types'

const UpdateSettingsForm = () => {
  const { isLoadingSettings, settings } = useSettings()
  const { isPending, update } = useUpdateSetting()

  if (isLoadingSettings) return <Spinner />

  const handleUpdateSetting = (e: React.FocusEvent<HTMLInputElement>) => {
    const id = e.target.id as keyof Tables<'settings'>
    const newValue = +e.currentTarget.value
    const defaultValue = +e.currentTarget.defaultValue

    if (!newValue || newValue === defaultValue || newValue < 0) return

    update({ [id]: newValue } as Partial<Tables<'settings'>>)
  }

  return (
    <Form>
      <FormRow id='minBookingLength' label='Minimum nights'>
        <Input
          type='number'
          id='minBookingLength'
          defaultValue={settings?.minBookingLength || ''}
          min={1}
          onBlur={handleUpdateSetting}
          disabled={isPending}
        />
      </FormRow>

      <FormRow id='maxBookingLength' label='Maximum nights'>
        <Input
          type='number'
          id='maxBookingLength'
          defaultValue={settings?.maxBookingLength || ''}
          min={1}
          onBlur={handleUpdateSetting}
          disabled={isPending}
        />
      </FormRow>

      <FormRow id='maxGuestsPerBooking' label='Max Guests'>
        <Input
          type='number'
          id='maxGuestsPerBooking'
          defaultValue={settings?.maxBookingLength || ''}
          min={1}
          onBlur={handleUpdateSetting}
          disabled={isPending}
        />
      </FormRow>

      <FormRow id='breakfastPrice' label='Breakfast Price'>
        <Input
          type='number'
          id='breakfastPrice'
          defaultValue={settings?.breakfastPrice || ''}
          min={1}
          onBlur={handleUpdateSetting}
          disabled={isPending}
        />
      </FormRow>
    </Form>
  )
}
export default UpdateSettingsForm
