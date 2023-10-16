import { createContext, useState } from 'react';

const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      {/* dikirim secara global statenya
    //   klo menggunakan context butuh provider, tp klo pake redux maka kita pake provider tp cukup ditulis di route main.jsx */}
      <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</DarkModeContext.Provider>
    </>
  );
};
export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;
