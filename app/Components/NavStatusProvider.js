"use client";
// next auth provider which provide the session to all component with the help of layout so it is used in main layout.js file
import NavProvider from "@/context/NavContext";

const NavStatusProvider = ({ children }) => (
  <NavProvider>{children}</NavProvider>
);

export default NavStatusProvider;
