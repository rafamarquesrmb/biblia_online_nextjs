import type { NextPage } from "next";
import Link from "next/link";
import BooksSection from "../components/BooksSection";
import HeroSection from "../components/HeroSection";
import { BookProps } from "../components/BooksSection";
export interface BooksListParams {
  books: Array<BookProps>;
}

const Home: NextPage<BooksListParams> = ({ books }: BooksListParams) => {
  return (
    <>
      <HeroSection />
      <BooksSection books={books} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const books: BooksListParams = await fetch(
    "https://www.abibliadigital.com.br/api/books"
  ).then((data) => {
    return data.json();
  });
  return {
    props: {
      books,
    },
  };
}
