export interface User {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface FbAuthResponse {
  idToken: string
  expiresIn: string
}

export interface Admin {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface Table {
  napr: string
  nastranaprt: string
  tnved_description: string
  stoim: number
  netto: number
  kol: number
  region_description: string
  month: number
  year: number
}