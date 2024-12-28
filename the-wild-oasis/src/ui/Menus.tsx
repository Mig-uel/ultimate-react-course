import { createContext, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { HiEllipsisVertical } from 'react-icons/hi2'
import styled from 'styled-components'
import { useOutsideClick } from '../hooks/useOutsideClick'

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
  position: { x: number; y: number } | null
  setPosition: React.Dispatch<
    React.SetStateAction<{
      x: number
      y: number
    } | null>
  >
}>({
  close: () => {},
  open: () => {},
  openId: '',
  position: null,
  setPosition: () => {},
})

/** MENUS PARENT COMPONENT */
const Menus = ({ children }: { children: React.ReactNode }) => {
  const [openId, setOpenId] = useState('')
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null
  )

  const close = () => setOpenId('')
  const open = setOpenId

  const value = {
    openId,
    close,
    open,
    position,
    setPosition,
  }

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

/** MENUS TOGGLE COMPONENT */
const Toggle = ({ id }: { id: number }) => {
  const { openId, close, open, setPosition } = useContext(MenuContext)

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target instanceof Element) {
      const rect = e.target.closest('button')?.getBoundingClientRect()

      setPosition({
        x: window.innerWidth - (rect?.width ?? 0) - (rect?.x ?? 0),
        y: (rect?.y ?? 0) + (rect?.height ?? 0) + 8,
      })
    }

    return openId === '' || +openId !== +id ? open(id.toString()) : close()
  }

  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  )
}

const List = ({ id, children }: { id: number; children: React.ReactNode }) => {
  const { openId, position, close } = useContext(MenuContext)

  const ref = useOutsideClick(close)

  if (+openId !== +id) return null

  return createPortal(
    // @ts-expect-error ref error
    <StyledList $position={position || { x: 20, y: 20 }} ref={ref}>
      {children}
    </StyledList>,
    document.body
  )
}

const Button = ({
  children,
  icon,
  onClick,
}: {
  children: React.ReactNode
  icon: React.ReactNode
  onClick?: () => void
}) => {
  const { close } = useContext(MenuContext)
  const handleClick = () => {
    onClick?.()
    close()
  }

  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  )
}

Menus.Menu = Menu
Menus.Toggle = Toggle
Menus.List = List
Menus.Button = Button

export default Menus
