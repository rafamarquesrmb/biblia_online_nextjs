import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  const navigationsLinks: Array<{ label: string; path: string }> = [
    { label: "Página Inicial", path: "../" },
    // { label: "Sobre", path: "../about" },
  ];

  return (
    <div className="w-full px-4 py-2">
      <div className="container mx-auto">
        <div className="flex flex-row flex-nowrap w-full justify-between align-middle">
          <Link href="../">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-500 dark:from-sky-500 dark:via-sky-400 dark:to-sky-300 cursor-pointer">
              Bíblia Online
            </h1>
          </Link>
          <div className="flex flex-row flex-nowrap justify-end gap-4 align-middle items-center">
            {navigationsLinks.map((link) => (
              <Link key={link.label} href={link.path}>
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
