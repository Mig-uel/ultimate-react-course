export type AccountState = {
  balance: number
  loan: number
  loan_purpose: string
  isLoading: boolean
}

export type AccountDispatchTypes =
  | 'account/deposit'
  | 'account/withdraw'
  | 'account/request_loan'
  | 'account/pay_loan'
  | 'account/converting'

export type CustomerState = {
  full_name: string
  nationalID: string
  createdAt: string
}

export type CustomerDispatchTypes =
  | 'customer/createCustomer'
  | 'customer/updateName'
