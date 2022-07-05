import React, { useState } from 'react'
import axios from 'axios'
import useToken from './useToken'
import { Api, UserLogin } from '../types/api'

export default function useAxios() {
  const { setTokenToLocalStorage, getTokenFromLocalStore } = useToken()
  const [isRequestOkay, setIsRequestOkay] = useState(false)
  let response: any

  async function axiosLogin(route: string, payload: UserLogin) {
    response = await axios.post(`${import.meta.env.VITE_API_URL}/${route}`, payload, {})
    if (response.status === 200) setTokenToLocalStorage(response.data.token)
    return response
  }
  async function axiosRegister(route: string, payload: UserLogin) {
    return await axios.post(`${import.meta.env.VITE_API_URL}/${route}`, payload, {})
  }

  async function axiosTasks(method: string, route: string, payload?: Api) {
    if (!getTokenFromLocalStore) return false
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": getTokenFromLocalStore
    }
    if (method === "delete") {
      response = await axios.delete(`${import.meta.env.VITE_API_URL}/${route}/${payload!.id}`)
      return response
    }
    if (method === "post" || method === "patch") {
      (method === "post") ?
        response = await axios.post(`${import.meta.env.VITE_API_URL}/${route}`, payload, { headers })
        :
        response = await axios.patch(`${import.meta.env.VITE_API_URL}/${route}/${payload!.id}`, payload, { headers })
      return response
    }
  }

  return { axiosLogin, axiosTasks, axiosRegister }
}
