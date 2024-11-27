export type Options = string[]

export type Question = {
  question: string
  options: Options[]
  correctOption: number
  points: number
  id: string
}
