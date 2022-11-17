import { createContext, useState } from "react";

const MenuContext = createContext();
export default MenuContext;

export const MenuContextProvider = (props) => {
  const [menu, setMenu] = useState(1);
  return (
    <MenuContext.Provider
      value={{
        menu,
        setMenu,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};
