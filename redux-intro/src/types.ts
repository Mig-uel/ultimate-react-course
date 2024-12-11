export type AccountState = {
  balance: number
  loan: number
  loan_purpose: string
}

export type AccountDispatchTypes =
  | 'account/deposit'
  | 'account/withdraw'
  | 'account/request_loan'
  | 'account/pay_loan'

export type CustomerState = {
  full_name: string
  nationalID: string
  createdAt: string
}
