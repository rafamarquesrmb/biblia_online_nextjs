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
      </div>
    </div>
  );
};

export default BookSection;
