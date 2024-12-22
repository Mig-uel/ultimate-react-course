import { Form, FormRow, Input, Spinner } from '../../ui'
import { useSettings } from './useSettings'

const UpdateSettingsForm = () => {
  const { isLoadingSettings, settings } = useSettings()

  if (isLoadingSettings) return <Spinner />

  return (
    <Form>
      <FormRow id='minBookingLength' label='Minimum nights'>
        <Input
          type='number'
          id='minBookingLength'
          defaultValue={settings?.minBookingLength || ''}
          min={1}
        />
      </FormRow>

      <FormRow id='maxBookingLength' label='Maximum nights'>
        <Input
          type='number'
          id='maxBookingLength'
          defaultValue={settings?.maxBookingLength || ''}
          min={1}
        />
      </FormRow>

      <FormRow id='maxGuestsPerBooking' label='Max Guests'>
        <Input
          type='number'
          id='maxGuestsPerBooking'
          defaultValue={settings?.maxBookingLength || ''}
          min={1}
        />
      </FormRow>

      <FormRow id='breakfastPrice' label='Breakfast Price'>
        <Input
          type='number'
          id=''
          defaultValue={settings?.breakfastPrice || ''}
          min={1}
        />
      </FormRow>
    </Form>
  )
}
export default UpdateSettingsForm
