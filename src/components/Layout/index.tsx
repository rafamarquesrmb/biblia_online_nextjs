import { ReactNode } from "react";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Bíblia Online</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow ">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
