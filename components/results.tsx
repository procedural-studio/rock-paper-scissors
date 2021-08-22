import { useEffect } from 'react';
import Coin, { CoinType } from './coin';

export interface IGameResults {
  userChoice: CoinType;
  botChoice: CoinType;
}

export interface Props {
  results: IGameResults;
  clearResults: () => void;
  userWon: boolean | null;
}

const Results = (props: Props) => {
  const results = props.results;
  const clearResults = props.clearResults;
  const userWon = props.userWon;

  return (
    <div className="relative flex pt-36 md:h-4/5 h-5/6  md:justify-evenly justify-between w-full lg:w-2/3 md:w-3/4">
      <div className="flex flex-col items-center">
        <Coin highlight={userWon} type={results.userChoice} />
        <p className="z-50 mt-12 font-semibold  text-white md:text-xl tracking-widest ">
          YOU PICKED
        </p>
      </div>
      <div className="z-50 md:static absolute bottom-12 left-1/2 md:-translate-x-0 -translate-x-1/2 flex flex-col items-center ">
        <p className="md:text-6xl text-5xl text-white">
          {userWon == null ? 'TIE' : userWon ? 'YOU WIN' : 'YOU LOST'}
        </p>
        <button
          onClick={clearResults}
          className="mt-12 font-semibold hover:scale-105 border-darkText bg-white h-16 w-56 rounded-lg text-darkText md:text-xl tracking-widest"
        >
          PLAY AGAIN
        </button>
      </div>
      <div className="z-50 flex flex-col items-center">
        <Coin
          highlight={userWon != null && !userWon}
          type={results.botChoice}
        />
        <p className="mt-12 font-semibold text-white md:text-xl tracking-widest ">
          THE HOUSE PICKED
        </p>
      </div>
    </div>
  );
};

export default Results;
