import { createContext, useState } from "react";

//create a context, with createContext api
export const NavContext = createContext();

const NavProvider = (props) => {
  // this state will be shared with all components
  const [openNav, setOpenNav] = useState(false);

  return (
    // this is the provider providing state
    <NavContext.Provider value={[openNav, setOpenNav]}>
      {props.children}
    </NavContext.Provider>
  );
};

export default NavProvider;
