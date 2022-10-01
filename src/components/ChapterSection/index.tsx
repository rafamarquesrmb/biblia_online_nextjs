import React from "react";
import { VerseProps } from "../../pages/[book]/[chapter]";

interface ChapterInfoProps {
  title: string;
  chapterNumber: number;
  verses: Array<VerseProps>;
}
const ChapterSection = ({ title, chapterNumber, verses }: ChapterInfoProps) => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-lg">
      <h2 className="text-3xl font-bold text-center pb-4">
        {title} : {chapterNumber}
      </h2>
      <ul>
        {verses.map((verse) => {
          return (
            <li className="flex flex-nowrap my-2" key={verse.number}>
              <span className="text-bold opacity-30 w-8">{verse.number}.</span>
              <p className="flex-1 font-normal text-lg">{verse.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChapterSection;
