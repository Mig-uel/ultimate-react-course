import styled from 'styled-components'
import type { FieldErrors } from 'react-hook-form'

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`

const Label = styled.label`
  font-weight: 500;
`

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`

type FormData = {
  created_at: string
  description: string | null
  discount: number | null
  id: number
  image: string | null
  maxCapacity: number | null
  name: string | null
  regularPrice: number | null
}

const FormRow = ({
  id,
  label,
  errors,
  children,
}: {
  id?: keyof FormData
  label?: string
  errors: FieldErrors<FormData>
  children: React.ReactNode
}) => {
  return (
    <StyledFormRow>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {id && errors[id] && <Error>{errors[id]?.message}</Error>}
    </StyledFormRow>
  )
}
export default FormRow
