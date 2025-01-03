import styled from 'styled-components'
import type { Tables } from '../supabase_types'
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

const FormRow = ({
  id,
  label,
  errors,
  children,
}: {
  id?: keyof Tables<'cabins'> | keyof Tables<'settings'>
  label?: string
  errors?: FieldErrors<Tables<'cabins'> | Tables<'settings'>>
  children: React.ReactNode
}) => {
  return (
    <StyledFormRow>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {id && errors && errors[id] && <Error>{errors[id].message}</Error>}
    </StyledFormRow>
  )
}
export default FormRow
