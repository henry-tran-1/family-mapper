export interface PersonData {
  name: string
  gender: string
  generation: number
  description: string
}

export interface Person extends PersonData {
  id: number
  image: string
}
