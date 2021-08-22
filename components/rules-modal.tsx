import Image from 'next/image';
export interface Props {
  show: boolean;
  dismissModal: () => void;
}

const RulesModal = (props: Props) => {
  const dismissModal = props.dismissModal;

  return props.show ? (
    <>
      <div className="absolute h-full w-screen bg-black z-50 opacity-50"></div>
      <div className="absolute p-8 flex flex-col justify-between items-center left-1/2 top-1/2 -translate-x-1/2 md:rounded-2xl -translate-y-1/2 h-full w-full md:h-5/6 md:w-1/2 bg-white z-50 o">
        <div className="text-4xl">RULES</div>
        <Image
          src="/images/image-rules-bonus.svg"
          alt="Rules"
          height={400}
          width={400}
        />
        <button onClick={dismissModal} className="hover:scale-110">
          <Image
            src="/images/icon-close.svg"
            alt="Rules"
            height={30}
            width={30}
          />
        </button>
      </div>
    </>
  ) : (
    <></>
  );
};

export default RulesModal;
