import { ReactNode } from "react";
import Head from "next/head";
import Header from "../Header";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Next Tailwind Theme</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow ">{children}</main>
        <div className="footer">
          <footer className="py-4 text-center dark:text-gray-100 text-gray-500 text-sm">
            <span className="text-gray-900 dark:text-white font-bold text-lg">
              Bíblia Online{" "}
            </span>
            &copy; {new Date().getFullYear()}
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
