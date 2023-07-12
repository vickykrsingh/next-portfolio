import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./Components/Nav";
import Provider from "./Components/Provider";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast";
import NavStatusProvider from "./Components/NavStatusProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
// metadata for better SEO
export const metadata = {
  title: "Vicky kumar",
  description: "Vicky kumar portfolio",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-customGray w-full overflow-x-hidden relative`}
      >
        {/* Same as */}
        <Toaster />
        <Provider>
          <NavStatusProvider>
            <Nav session={session} />
            {children}
          </NavStatusProvider>
        </Provider>
      </body>
    </html>
  );
}
