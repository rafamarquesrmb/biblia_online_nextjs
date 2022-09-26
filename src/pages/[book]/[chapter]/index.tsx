import type { NextPage } from "next";
import Link from "next/link";

interface BooksParams {
  abbrev: {
    pt: string;
  };
  chapters: number;
}

interface ChapterParams {
  params: {
    book: string;
    chapter: string;
  };
}
interface VerseProps {
  number: number;
  text: string;
}
interface ChapterProps {
  book: {
    name: string;
    author: string;
    abbrev: {
      pt: string;
    };
  };
  verses: [];
  chapter: {
    number: number;
    verses: number;
  };
}

interface BookProps {
  abbrev: {
    pt: string;
  };
  name: string;
  author: string;
  group: string;
}
interface ChapterInfoProps {
  number: number;
}
interface ChapterPageProps {
  book: BookProps;
  chapterInfo: ChapterInfoProps;
  verses: VerseProps;
}
const Capitulo: NextPage<ChapterPageProps> = ({
  book,
  chapterInfo,
  verses,
}: ChapterPageProps) => {
  // console.log(chapterData);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Biblia Online</h1>
      <h2>
        {book.name} - Capítulo {chapterInfo.number}
      </h2>
    </>
  );
};

export default Capitulo;

export async function getStaticProps({ params }: ChapterParams) {
  const chapterData: ChapterProps = await fetch(
    `https://www.abibliadigital.com.br/api/verses/nvi/${params.book}/${params.chapter}`,
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
    props: {
      book: chapterData.book,
      chapterInfo: chapterData.chapter,
      verses: chapterData.verses,
    },
  };
}
export async function getStaticPaths() {
  const paths: { params: { book: string; chapter: string } }[] = [];

  const books: BooksParams[] = await fetch(
    "https://www.abibliadigital.com.br/api/books",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.TOKEN_LOGIN_A_BIBLIA_DIGITAL_JWT,
      },
    }
  ).then((data) => {
    return data.json();
  });

  books.map((book) => {
    for (let i = 1; i <= book.chapters; i++) {
      paths.push({
        params: {
          book: book.abbrev.pt,
          chapter: i.toString(),
        },
      });
    }
  });
  return {
    paths,
    fallback: false,
  };
}
