import React from 'react';
import Coin, { CoinType } from './coin';

export interface Props {
  onSelect: (useChoice: CoinType, botChoice: CoinType) => void;
}

function randomEnum<T>(anEnum: T): T[keyof T] {
  const enumValues = Object.values(anEnum) as unknown as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  const randomEnumValue = enumValues[randomIndex];
  return randomEnumValue;
}

const Selector = (props: Props) => {
  const selectCoin = (useChoice: CoinType) => {
    const botChoice = randomEnum(CoinType);
    props.onSelect(useChoice, botChoice);
  };

  return (
    <div className="flex flex-col items-center relative md:h-4/5 h-5/6 lg:w-2/3 md:w-3/4 pt-12 w-full">
      <div className="flex items-center justify-center m-12  ">
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className="md:h-96 md:w-96 h-64 w-64"
          src="/images/bg-pentagon.svg"
          alt="logo"
        />
        <div className="coin-top">
          <Coin onClick={selectCoin} type={CoinType.SCISSORS} />
        </div>
        <div className="coin-top-left">
          <Coin onClick={selectCoin} type={CoinType.SPOCK} />
        </div>
        <div className="coin-top-right">
          <Coin onClick={selectCoin} type={CoinType.PAPER} />
        </div>
        <div className="coin-bottom-left">
          <Coin onClick={selectCoin} type={CoinType.LIZARD} />
        </div>
        <div className="coin-bottom-right">
          <Coin onClick={selectCoin} type={CoinType.ROCK} />
        </div>
      </div>
      <button className="w-32 h-12 md:self-end md:mt-0 mt-24  bg-transparent border-solid text-white hover:bg-white hover:text-scoreText border-2 rounded-lg">
        RULES
      </button>
    </div>
  );
};

export default Selector;
