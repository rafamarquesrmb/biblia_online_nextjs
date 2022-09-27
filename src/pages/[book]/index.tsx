import type { NextPage } from "next";
import Link from "next/link";

interface BooksParams {
  abbrev: {
    pt: string;
  };
}
interface BookProps {
  author: string;
  chapters: Number;
  group: string;
  name: string;
  testament: string;
}
interface BookPageProps {
  abbrev: string;
  book: BookProps;
}

const Book: NextPage<BookPageProps> = ({ abbrev, book }) => {
  const chaptersList: number[] = [];

  for (let i = 1; i <= book.chapters; i++) {
    chaptersList.push(i);
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">Biblia Online</h1>
      <h2 className="text-2xl font-bold">{book.name}</h2>
      <p className="text-sm">Capítulos: {book.chapters.toString()}</p>
      <p className="text-sm">
        Testamento:{" "}
        {book.testament === "NT" ? "Novo Testamento" : "Velho Testamento"}
      </p>
      <p className="text-sm">Grupo: {book.group}</p>
      <div className="container">
        {chaptersList.map((chapter) => {
          return (
            <Link key={chapter} href={`${abbrev}/${chapter}`}>
              {chapter}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Book;

export async function getStaticProps({ params }: any) {
  const book: BookProps = await fetch(
    `https://www.abibliadigital.com.br/api/books/${params.book}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.TOKEN_LOGIN_A_BIBLIA_DIGITAL_JWT,
      },
    }
  ).then((data) => data.json());
  return {
    props: { abbrev: params.book, book },
  };
}
export async function getStaticPaths() {
  const books = await fetch("https://www.abibliadigital.com.br/api/books", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.TOKEN_LOGIN_A_BIBLIA_DIGITAL_JWT,
    },
  }).then((data) => {
    return data.json();
  });

  const paths = books.map((book: BooksParams) => ({
    params: { book: book.abbrev.pt },
  }));
  return {
    paths,
    fallback: false,
  };
}
