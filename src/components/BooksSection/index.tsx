import Tag from "../Tag";
import { BooksListParams } from "../../pages";
export interface BookProps {
  name: string;
  abbrev: {
    pt: string;
  };
  testament: string;
}
const BooksSection = ({ books }: BooksListParams) => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h2 className="text-3xl font-bold text-center">Livros Bíblicos</h2>
      <div className="md:flex flex-wrap flex-row md:flex-nowrap gap-8">
        <div className="flex-1 max-w-xs mx-auto sm:max-w-full">
          <h3 className="text-center my-3 font-bold text-xl">
            Velho Testamento
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
            {books.map((book: BookProps) => {
              if (book.testament == "VT") {
                return (
                  <li key={book.abbrev.pt}>
                    <Tag title={book.name} url={`/${book.abbrev.pt}`} />
                  </li>
                );
              }
            })}
          </ul>
        </div>

        <div className="flex-1 max-w-xs mx-auto sm:max-w-full">
          <h3 className="text-center my-3 font-bold text-xl">
            Novo Testamento
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {books.map((book: BookProps) => {
              if (book.testament == "NT") {
                return (
                  <li key={book.abbrev.pt}>
                    <Tag title={book.name} url={`/${book.abbrev.pt}`} />
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BooksSection;
