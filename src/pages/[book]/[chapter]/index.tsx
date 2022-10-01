import type { NextPage } from "next";
import Link from "next/link";
import ChapterSection from "../../../components/ChapterSection";

interface BookProps {
  name: string;
  author: string;
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
export interface VerseProps {
  number: number;
  text: string;
}
interface ChapterPageProps {
  book: BookProps;
  verses: Array<VerseProps>;
  chapter: {
    number: number;
    verses: number;
  };
}

const Chapter: NextPage<ChapterPageProps> = ({
  book,
  verses,
  chapter,
}: ChapterPageProps) => {
  return (
    <div>
      <ChapterSection
        title={book.name}
        chapterNumber={chapter.number}
        verses={verses}
      />

      {chapter.number <= book.chapters && chapter.number > 1 ? (
        <Link href={`/${book.abbrev.pt}/${chapter.number - 1}`}>Anterior</Link>
      ) : null}
      {chapter.number < book.chapters ? (
        <Link href={`/${book.abbrev.pt}/${chapter.number + 1}`}>Próximo</Link>
      ) : null}
    </div>
  );
};

export default Chapter;

export async function getStaticProps({ params }: ChapterParams) {
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
  ).then((data) => {
    return data.json();
  });
  const chapterData: ChapterPageProps = await fetch(
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
      book: book,
      verses: chapterData.verses,
      chapter: chapterData.chapter,
    },
  };
}

export async function getStaticPaths() {
  const paths: { params: { book: string; chapter: string } }[] = [];
  const books: BookProps[] = await fetch(
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
