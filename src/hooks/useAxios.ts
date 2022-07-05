import React, { useState } from 'react'
import axios from 'axios'
import useToken from './useToken'

type props = {
  route: "login" | "register" | "tasks",
  method: "get" | "post" | "put" | "delete",
  payload?: any,
}
export default function useAxios({ route, method, payload }: props) {
  const [isRequestOkay, setIsRequestOkay] = useState(false)
  const [data, setData] = useState()
  const { setTokenToSessionStorage } = useToken()
  const token = sessionStorage.getItem('token')
  if (!token) {
    setIsRequestOkay(false)
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token || ''
  }
  function Login() {
    axios.post(`http://localhost:3001/${route}`, payload, {}).then(res => {
      setTokenToSessionStorage(res.data.token)
      setIsRequestOkay(true)
    }).catch(err => {
      setIsRequestOkay(false)
    })
  }
  function register() {
    axios.post(`http://localhost:3001/${route}`, payload, {}).then(res => {
      setIsRequestOkay(true)
    }).catch(err => {
      setIsRequestOkay(false)
    })
  }
  function Tasks() {
    if (route === "tasks" && (method === "get" || method === "delete")) {
      (method === "get") ?
        axios.get(`http://localhost:3001/${route}`).then(res => {
          setData(res.data)
          setIsRequestOkay(true)
        }).catch(err => {
          setIsRequestOkay(false)
        }) :
        axios.delete(`http://localhost:3001/${route}/${payload.id}`).then(res => {
          setIsRequestOkay(true)
        }).catch(err => {
          setIsRequestOkay(false)
        })
    }
    if (route === "tasks" && (method === "post" || method === "put")) {
      (method === "post") ?
        axios.post(`http://localhost:3001/${route}`, payload, { headers: headers }).then(res => {
          setIsRequestOkay(true)
        }).catch(err => {
          setIsRequestOkay(false)
        }) :
        axios.put(`http://localhost:3001/${route}/${payload.id}`, payload, { headers: headers }).then(res => {
          setIsRequestOkay(true)
        }).catch(err => {
          setIsRequestOkay(false)
        })
    }

  }

  return { Login, Tasks,register }
}
