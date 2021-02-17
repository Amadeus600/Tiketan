import Cookies from "js-cookie";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const baseUrl = "http://ticketless.test/api";

  const [user, setUser] = useState(Cookies.getJSON("user"));

  // const val = { auth: { user, setUser }, baseUrl };

  useEffect(() => {
    if (user) {
      Cookies.set("user", JSON.stringify(user));
    } else {
      Cookies.remove("user");
      console.log("user removed");
    }
    console.log("called !", Cookies.getJSON("user"));
  }, [user]);

  let val = {
    auth: [user, setUser],
    baseUrl,
  };

  return <AppContext.Provider value={val}>{children}</AppContext.Provider>;
};
