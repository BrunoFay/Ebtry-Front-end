import React from 'react'

export default function useToken() {
  const getTokenFromSessionStore = sessionStorage.getItem('token')
  function removeTokenOfSessionStorage() {
    sessionStorage.removeItem('token')
  }
  function setTokenToSessionStorage(token: string) {
    sessionStorage.setItem('token', token)
  }
  return {
    getTokenFromSessionStore,
    removeTokenOfSessionStorage,
    setTokenToSessionStorage
  }

}
