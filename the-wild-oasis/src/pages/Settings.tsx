import { Heading, Row } from '../ui'
import UpdateSettingsForm from '../features/settings/UpdateSettingsForm'

const Settings = () => {
  return (
    <Row>
      <Heading as='h1'>Update Hotel Settings</Heading>

      <UpdateSettingsForm />
    </Row>
  )
}
export default Settings
