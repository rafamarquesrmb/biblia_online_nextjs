import Link from "next/link";

interface NavigationProps {
  chapterNumber: number;
  totalChapters: number;
  abbrev: string;
  bookTitle: string;
}

const NavigationButtons = ({
  chapterNumber,
  totalChapters,
  abbrev,
  bookTitle,
}: NavigationProps) => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-lg ">
      <div className="container mx-auto max-w-lg pb-4 flex flex-nowrap justify-between">
        {chapterNumber <= totalChapters && chapterNumber > 1 ? (
          <Link href={`/${abbrev}/${chapterNumber - 1}`}>
            <span className="text-gray-900 dark:text-sky-500  text-center w-full px-2 py-1 text-lg font-medium  border border-gray-900 dark:border-sky-500 hover:border-sky-500  rounded sm:w-full hover:text-amber-50 dark:hover:text-gray-900 hover:bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 focus:outline-none cursor-pointer focus:ring flex flex-row justify-center align-middle items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>

              {`${bookTitle} ${chapterNumber - 1}`}
            </span>
          </Link>
        ) : (
          <div className="w-full gap-2"></div>
        )}
        <div className="w-2 gap-2"></div>
        {chapterNumber < totalChapters ? (
          <Link href={`/${abbrev}/${chapterNumber + 1}`}>
            <span className="text-gray-900 dark:text-sky-500  text-center w-full px-2 py-1 text-lg font-medium  border border-gray-900 dark:border-sky-500 hover:border-sky-500  rounded sm:w-full hover:text-amber-50 dark:hover:text-gray-900 hover:bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 focus:outline-none cursor-pointer focus:ring flex flex-row justify-center align-middle items-center gap-2">
              {`${bookTitle} ${chapterNumber + 1}`}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </Link>
        ) : (
          <div className="w-full gap-2"></div>
        )}
      </div>

      <Link href={`/${abbrev}`}>
        <span className="text-gray-900 dark:text-sky-500  text-center w-full px-2 py-1 text-lg font-medium  border border-gray-900 dark:border-sky-500 hover:border-sky-500  rounded sm:w-auto hover:text-amber-50 dark:hover:text-gray-900 hover:bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 focus:outline-none cursor-pointer focus:ring flex flex-row justify-center align-middle items-center gap-2">
          {`Voltar para ${bookTitle}`}
        </span>
      </Link>
    </div>
  );
};

export default NavigationButtons;
