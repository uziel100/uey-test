import { SHA256 } from 'crypto-js'

export const mapperUserAdaper = data => ({
  id: data.id,
  token: data.token,
  fullName: data.user.fullName,
  firstName: data.user.firstName,
  email: data.user.email
})

export const loginNormalAdapter = data => ({
  email: data.email,
  password: SHA256(`${data.password}`).toString()
})

export const mapperRecoveryCodeAdapter = data => ({
  code: data.code,
  email: data.user.email,
})

export const changePasswordPayloadAdapter = data => ({
  input:{
    email: data.email,
    code: data.code,
    password: SHA256(`${data.password}`).toString()
  }
})