import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 text-center dark:text-gray-100 text-gray-500 text-sm">
      <span className="text-gray-900 dark:text-white font-bold text-lg">
        Bíblia Online{" "}
      </span>
      &copy; {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
