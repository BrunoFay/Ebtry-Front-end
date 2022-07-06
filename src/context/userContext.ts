import { createContext } from "react";
import { User } from "../types/api";
export type UserContextType = {
  userRole:string;
  setUserRole: (userRole: string) => void;  
}
export const userContext = createContext<UserContextType | {}>({});