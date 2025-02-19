import Image from 'next/image';

export enum CoinColor {
  RED = 'purple',
  BLUE = 'red',
  YELLOW = 'blue',
  GREEN = 'yellow',
  PURPLE = 'green',
}

export enum CoinType {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissors',
  LIZARD = 'lizard',
  SPOCK = 'spock',
}

export interface Props {
  type: CoinType;
  onClick?: (type: CoinType) => void;
  highlight?: boolean | null;
}

const Highlight = () => (
  <>
    <div className="absolute z-10 h-56 w-56 opacity-5 md:h-96 md:w-96 bg-gray-100 rounded-full"></div>
    <div className="absolute z-10 h-44 w-44 opacity-5 md:h-80 md:w-80 bg-gray-100 rounded-full"></div>
    <div className="absolute z-20 h-36 w-36 opacity-5  md:h-60 md:w-60 bg-gray-100 rounded-full"></div>
  </>
);

const Coin = (props: Props) => {
  const disabled = props.onClick === undefined;
  const onClick = props.onClick || (() => {});
  const highlight = props.highlight;

  const imagePath = `/images/icon-${props.type}.svg`;
  const color =
    props.type == CoinType.SCISSORS
      ? CoinColor.YELLOW
      : props.type == CoinType.LIZARD
      ? CoinColor.PURPLE
      : props.type == CoinType.SPOCK
      ? CoinColor.GREEN
      : props.type == CoinType.PAPER
      ? CoinColor.BLUE
      : CoinColor.RED;

  return (
    <div className="relative flex justify-center items-center">
      {highlight && <Highlight />}
      <button
        disabled={disabled}
        onClick={(e) => onClick(props.type)}
        className={`coin ${color}`}
      >
        <div className="coin inner">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            className="md:h-20 md:w-20 h-10 w-10"
            src={imagePath}
            alt={props.type}
          />
        </div>
      </button>
    </div>
  );
};

export default Coin;
