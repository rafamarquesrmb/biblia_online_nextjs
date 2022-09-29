import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="">
      <div className="max-w-screen-xl px-4 pt-40 pb-16 mx-auto lg:items-center lg:flex">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600
          dark:from-sky-300 dark:via-sky-500 dark:to-blue-600 py-2"
          >
            Acesso à Bíblia de qualquer lugar e em qualquer dispositivo!
          </h2>

          <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
            &ldquo;O temor do Senhor é o princípio da sabedoria,e o conhecimento
            do Santo é entendimento.&rdquo;
            <span className="block text-base">Provérbios 9:10</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/">
              <span className="text-sky-500 block w-full px-12 py-3 text-lg font-medium  border border-sky-500  rounded sm:w-auto hover:text-amber-50 dark:hover:text-gray-900 hover:bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 focus:outline-none cursor-pointer focus:ring ">
                Ler a Bíblia
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
