import Link from "next/link";

interface tagProps {
  title: string;
  url: string;
}

const Tag = ({ title, url }: tagProps) => {
  return (
    <Link href={url}>
      <span className="text-gray-900 dark:text-sky-500 block text-center w-full px-4 py-2 text-lg font-medium  border border-gray-900 dark:border-sky-500 hover:border-sky-500  rounded w-auto hover:text-amber-50 dark:hover:text-gray-900 hover:bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 focus:outline-none cursor-pointer focus:ring ">
        {title}
      </span>
    </Link>
  );
};

export default Tag;
