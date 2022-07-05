import axios from "axios"
import useToken from "../hooks/useToken"
const { setTokenToSessionStorage, getTokenFromSessionStore } = useToken()
let isRequestOkay: boolean;

export function axiosLogin(payload: { email: string, password: string }) {
  axios.post(`http://localhost:3001/login`, payload, {}).then(res => {
    setTokenToSessionStorage(res.data.token)
    isRequestOkay = (true)
  }).catch(err => {
    isRequestOkay = (false)
  })
  return isRequestOkay
}
export function axiosRegister(payload: { email: string, password: string }) {
  axios.post(`http://localhost:3001/register`, payload, {}).then(res => {
    isRequestOkay = true
  }).catch(err => {
    isRequestOkay = false
  })
}
export function axiosTasks({ method, payload }: { method: string, payload?: any }) {
  if (!getTokenFromSessionStore) return false
  const headers = {
    "Content-Type": "application/json",
    "Authorization": getTokenFromSessionStore
  }
  if (method === "delete") {
      axios.delete(`http://localhost:3001/tasks/${payload.id}`).then(res => {
        isRequestOkay = true
      }).catch(err => {
        isRequestOkay = false
      })
  }
  if (method === "post" || method === "put") {
    (method === "post") ?
      axios.post(`http://localhost:3001/tasks`, payload, { headers: headers }).then(res => {
        isRequestOkay = true
      }).catch(err => {
        isRequestOkay = false
      }) :
      axios.put(`http://localhost:3001/tasks/${payload.id}`, payload, { headers: headers }).then(res => {
        isRequestOkay = true
      }).catch(err => {
        isRequestOkay = false
      })
  }

  return isRequestOkay

} 