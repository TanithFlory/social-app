import { createContext } from "react";

export const LoginContext = createContext({
  isLogged: false,
  _id: "",
  userName: "",
});
