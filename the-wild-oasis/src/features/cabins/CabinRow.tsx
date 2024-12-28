import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2'
import styled from 'styled-components'
import { formatCurrency } from '../../utils/helpers'
import CabinForm from './CabinForm'
import { useCreateCabin } from './useCreateCabin'
import { useDeleteCabin } from './useDeleteCabin'
import { ConfirmDelete, Menus, Modal, Table } from '../../ui'
import type { Tables } from '../../supabase_types'

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`
const CabinRow = ({ cabin }: { cabin: Tables<'cabins'> }) => {
  const { discount, image, maxCapacity, name, regularPrice } = cabin

  const { isPendingDeleting, mutate } = useDeleteCabin()
  const { create, isPendingCreating } = useCreateCabin()

  const isLoading = isPendingCreating || isPendingDeleting

  const handleDuplicate = () => {
    return create({
      ...cabin,
      name: `Copy of ${cabin.name}`,
      id: Date.now(),
    })
  }

  return (
    <Table.Row>
      <Img src={image!} />
      <Cabin>{name}</Cabin>

      <div>{maxCapacity} GUESTS</div>

      <Price>{formatCurrency(regularPrice!)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount!)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        {/* MODAL */}
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabin.id} />

            <Menus.List id={cabin.id}>
              <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>

              <Modal.Open opens='edit'>
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens='delete'>
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name='edit'>
              <CabinForm cabin={cabin} edit />
            </Modal.Window>

            <Modal.Window name='delete'>
              {/* @ts-expect-error props being passed in cloneElement() */}
              <ConfirmDelete
                disabled={isLoading}
                onConfirm={() => mutate(cabin)}
                resourceName='cabins'
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  )
}
export default CabinRow
