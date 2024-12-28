import { createContext, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { HiEllipsisVertical } from 'react-icons/hi2'
import styled from 'styled-components'

type StyledListProps = {
  $position: {
    x: number
    y: number
  }
}

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`

const StyledList = styled.ul<StyledListProps>`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.$position.x}px;
  top: ${(props) => props.$position.y}px;
`

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`

/** MENU CONTEXT */
const MenuContext = createContext<{
  openId: string | number
  close: () => void
  open: React.Dispatch<React.SetStateAction<string>>
}>({
  close: () => {},
  open: () => {},
  openId: '',
})

/** MENUS PARENT COMPONENT */
const Menus = ({ children }: { children: React.ReactNode }) => {
  const [openId, setOpenId] = useState('')

  const close = () => setOpenId('')
  const open = setOpenId

  const value = {
    openId,
    close,
    open,
  }

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

/** MENUS TOGGLE COMPONENT */
const Toggle = ({ id }: { id: number }) => {
  const { openId, close, open } = useContext(MenuContext)

  const handleClick = () => {
    openId === '' || +openId !== +id ? open(id) : close()
  }

  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  )
}

const List = ({ id, children }: { id: number; children: React.ReactNode }) => {
  const { openId } = useContext(MenuContext)

  if (+openId !== +id) return null

  return createPortal(
    <StyledList $position={{ x: 20, y: 20 }}>{children}</StyledList>,
    document.body
  )
}

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <li>
      <StyledButton>{children}</StyledButton>
    </li>
  )
}

Menus.Menu = Menu
Menus.Toggle = Toggle
Menus.List = List
Menus.Button = Button

export default Menus
