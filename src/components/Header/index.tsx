import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  const navigationsLinks: Array<{ label: string; path: string }> = [
    { label: "Página Inicial", path: "../" },
    { label: "Sobre", path: "../about" },
  ];

  return (
    <div className="w-full px-4 py-2">
      <div className="container mx-auto">
        <div className="flex flex-row flex-nowrap w-full justify-between align-middle">
          <Link href="../">
            <h1 className="cursor-pointer font-black text-3xl">
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
