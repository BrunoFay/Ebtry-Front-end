import React, { useContext } from 'react'
import { userContext, UserContextType } from '../context/userContext';

export default function useUserContext() {
  const { userRole, setUserRole } = useContext(userContext) as UserContextType;
  return { userRole, setUserRole }
}
