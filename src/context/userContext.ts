import { createContext } from "react";
export type UserContextType = {
  userRole:string;
  setUserRole: (userRole: string) => void;  
}
export const userContext = createContext<UserContextType | {}>({});