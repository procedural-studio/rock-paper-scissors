import { useState } from 'react';

export interface Props {
  score: number;
}

const Header = (props: Props) => {
  const score = props.score;

  return (
    <div className="w-full lg:w-2/3 md:w-3/4 md:h-1/5 h-1/6 md:px-8 p-4 border-4 border-headerOutline bg-transparent rounded-xl">
      <div className="flex justify-between  h-full">
        <div className="flex flex-col justify-center w-2/5 text-left font-semibold text-white bg-transparent md:text-2xl text-2xl ">
          <p className="leading-5">ROCK</p>
          <p className="leading-5">PAPER</p>
          <p className="leading-5">SCISSORS</p>
          <p className="leading-5">LIZARD</p>
          <p className="leading-5">SPOCK</p>
        </div>
        <div className="flex flex-col justify-center items-center tracking-widest text-scoreText md:p-14 p-8 py-10 bg-white rounded-md">
          <p>SCORE</p>
          <h1 className="text-darkText text-5xl md:text-7xl">{score}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
