import axios from "axios";
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const baseUrl = "http://ticketless.test/api";

  const [user, setUser] = useState("ada user");

  const logIn = async (username, password) => {
    try {
      let response = await axios.post(`${baseUrl}/login`, {
        username,
        password,
      });

      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  const val = { auth: { user, setUser, logIn } };

  return <AppContext.Provider value={val}>{children}</AppContext.Provider>;
};
