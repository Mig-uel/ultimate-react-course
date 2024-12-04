import { useNavigate } from 'react-router'
import Button from './button.component'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <Button onClick={() => navigate(-1)} type='back'>
      &larr; Back
    </Button>
  )
}
export default BackButton
