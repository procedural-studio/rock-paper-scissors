import Image from 'next/image';

export enum CoinColor {
  RED = 'red',
  BLUE = 'blue',
  YELLOW = 'yellow',
  GREEN = 'green',
  PURPLE = 'purple',
}

export enum CoinType {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissors',
  LIZARD = 'lizard',
  SPOCK = 'spock',
}

export interface Props {
  color: CoinColor;
  type: CoinType;
}

const Coin = (props: Props) => {
  const imagePath = `/images/icon-${props.type}.svg`;

  return (
    <div>
      <div className={`coin ${props.color}`}>
        <div className="flex justify-center items-center rounded-full h-20 w-20 border-t-8 md:h-36 md:w-36 bg-white ">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            className="md:h-20 md:w-20 h-10 w-10"
            src={imagePath}
            alt={props.type}
          />
        </div>
      </div>
    </div>
  );
};

export default Coin;
