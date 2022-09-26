import type { NextPage } from "next";
import Link from "next/link";

interface ChapterParams {
  abbrev: {
    pt: string;
  };
}
interface IVerse {
  number: number;
  text: string;
}
[];
interface ChapterProps {
  book: {
    name: string;
    author: string;
    abbrev: {
      pt: string;
    };
  };
  verses: IVerse;
  chapter: {
    number: number;
    verses: number;
  };
}
interface ChapterPageProps {
  book: string;
  chapter: ChapterProps;
}

const Capitulo: NextPage<ChapterPageProps> = (chapter) => {
  console.log(chapter);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Biblia Online CAPITULO</h1>
    </>
  );
};

export default Capitulo;

export async function getStaticProps({ params }: any) {
  const chapter: ChapterProps = await fetch(
    `https://www.abibliadigital.com.br/api/verses/nvi/${params.book}/${params.chapter}`
  ).then((data) => data.json());
  // console.log(chapterData);
  return {
    props: {
      chapter,
    },
  };
}
export async function getStaticPaths() {
  // const books = await fetch("https://www.abibliadigital.com.br/api/books").then(
  //   (data) => {
  //     return data.json();
  //   }
  // );
  // const paths = products.map((product) => {
  //   const { id } = product;
  //   return {
  //     params: {
  //       productId: id,
  //     },
  //   };
  // });
  // const paths = books.map((book: BooksParams) => ({
  //   params: { book: book.abbrev.pt },
  // }));
  const books = [
    { book: "gn", chapter: 1 },
    { book: "gn", chapter: 2 },
  ];
  const paths = books.map((b) => {
    return {
      params: {
        book: b.book,
        chapter: b.chapter.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
