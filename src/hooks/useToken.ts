import React from 'react'

export default function useToken() {
  const getTokenFromLocalStore = localStorage.getItem('token')
  function removeTokenOfLocalStorage() {
    localStorage.removeItem('token')
  }
  function setTokenToLocalStorage(token: string) {
    localStorage.setItem('token', token)
  }
  return {
    getTokenFromLocalStore,
    removeTokenOfLocalStorage,
    setTokenToLocalStorage
  }

}
