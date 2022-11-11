import Link from "next/link";
import { BookPageProps } from "../../pages/[book]";
import Tag from "../Tag";

const BookSection = ({ abbrev, book }: BookPageProps) => {
  const chaptersList: number[] = [];

  for (let i = 1; i <= book.chapters; i++) {
    chaptersList.push(i);
  }
  return (
    <div className="container mx-auto text-center">
      <div className="pt-20 pb-8">
        <h2 className="text-5xl font-bold mb-4">{book.name}</h2>
        <p className="text-sm">
          Número de Capítulos: {book.chapters.toString()}
        </p>
        <p className="text-sm">
          Testamento:{" "}
          {book.testament === "NT" ? "Novo Testamento" : "Antigo Testamento"}
        </p>
        <p className="text-sm">Grupo: {book.group}</p>
      </div>

      <div className="container mx-auto max-w-sm py-4">
        <h3 className="text-2xl font-bold pb-4">Capítulos</h3>
        <div className="flex justify-center	flex-wrap gap-2 mx-auto">
          {chaptersList.map((chapter) => {
            return (
              <Tag
                key={chapter}
                url={`${abbrev}/${chapter}`}
                title={
                  chapter >= 10 ? chapter.toString() : "0" + chapter.toString()
                }
              />
            );
          })}
        </div>
        <div className="container mx-auto px-4 py-4 max-w-lg ">
          <Link href={`/`}>
            <span className="text-gray-900 dark:text-sky-500  text-center w-full px-2 py-1 text-lg font-medium  border border-gray-900 dark:border-sky-500 hover:border-sky-500  rounded sm:w-auto hover:text-amber-50 dark:hover:text-gray-900 hover:bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 focus:outline-none cursor-pointer focus:ring flex flex-row justify-center align-middle items-center gap-2">
              {`Voltar`}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookSection;
