import type { NextPage } from "next";
import BookSection from "../../components/BookSection";

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
export interface BookPageProps {
  abbrev: string;
  book: BookProps;
}

const Book: NextPage<BookPageProps> = ({ abbrev, book }) => {
  return (
    <>
      <BookSection book={book} abbrev={abbrev} />
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
