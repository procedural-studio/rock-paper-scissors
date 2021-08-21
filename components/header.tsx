import { useState } from 'react';

const Header = () => {
  const [score, setScore] = useState(42);

  return (
    <div className="w-full md:w-2/3 md:h-1/5 h-1/6 md:px-8 p-4 border-4 border-headerOutline bg-transparent rounded-xl">
      <div className="flex justify-between  h-full">
        <div className="flex flex-col justify-center w-2/5 text-left font-semibold text-white bg-transparent md:text-4xl text-2xl ">
          <p className="md:leading-7 leading-5">ROCK</p>
          <p className="md:leading-7 leading-5">PAPER</p>
          <p className="md:leading-7 leading-5">SCISSORS</p>
        </div>
        <div className="flex flex-col justify-center items-center tracking-widest text-scoreText md:px-12 px-8 bg-white rounded-md">
          <p>SCORE</p>
          <h1 className="text-darkText text-5xl md:text-7xl">{score}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
