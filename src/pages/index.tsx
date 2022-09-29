import type { NextPage } from "next";
import Link from "next/link";
import HeroSection from "../components/HeroSection";

interface Book {
  name: string;
  abbrev: {
    pt: string;
  };
  testament: string;
}

const Home: NextPage = ({ books }: any) => {
  return (
    <>
      <HeroSection />

      <h2 className="text-2xl font-bold">Velho Testamento</h2>
      <ul>
        {books.map((book: Book) => {
          if (book.testament == "VT") {
            return (
              <li key={book.abbrev.pt}>
                <Link href={`/${book.abbrev.pt}`}>{book.name}</Link>
              </li>
            );
          }
        })}
      </ul>
      <br></br>
      <h2 className="text-2xl font-bold">Novo Testamento</h2>
      <ul>
        {books.map((book: Book) => {
          if (book.testament == "NT") {
            return (
              <li key={book.abbrev.pt}>
                <Link href={`/${book.abbrev.pt}`}>{book.name}</Link>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const books = await fetch("https://www.abibliadigital.com.br/api/books").then(
    (data) => {
      return data.json();
    }
  );
  return {
    props: {
      books,
    },
  };
}
