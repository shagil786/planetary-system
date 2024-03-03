import { createContext } from "react";

export const Context = createContext({
  appData: {
    page: 1,
  },
  setAppData: () => {},
});
