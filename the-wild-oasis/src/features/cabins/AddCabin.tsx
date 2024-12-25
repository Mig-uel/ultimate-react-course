import { useState } from 'react'
import { Button } from '../../ui'
import Modal from '../../ui/Modal'
import CabinForm from './CabinForm'

const AddCabin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalClose = () => setIsModalOpen((prev) => !prev)

  return (
    <div>
      <Button onClick={() => setIsModalOpen((prev) => !prev)}>
        Add New Cabin
      </Button>

      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <CabinForm onCloseModal={handleModalClose} />
        </Modal>
      )}
    </div>
  )
}
export default AddCabin
