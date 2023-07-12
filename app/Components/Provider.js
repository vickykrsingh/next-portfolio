"use client";
// next auth provider which provide the session to all component with the help of layout so it is used in main layout.js file

import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default Provider;
