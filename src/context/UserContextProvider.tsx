import { ReactNode, useState } from 'react'
import { userContext } from './userContext'

export default function UserContextProvider({ children }: { children: ReactNode }) {
  const [userRole, setUserRole] = useState('')

  const valueToProvide = { userRole, setUserRole }
  return (
    <userContext.Provider value={valueToProvide}>
      {children}
    </userContext.Provider>
  )
}
