import { Button } from '../../ui'
import Modal from '../../ui/Modal'
import CabinForm from './CabinForm'

const AddCabin = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens='form'>
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name='form'>
          <CabinForm />
        </Modal.Window>
      </Modal>
    </div>
  )
}

export default AddCabin
