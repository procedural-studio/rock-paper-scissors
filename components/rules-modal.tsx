export interface Props {
  show: boolean;
}

const RulesModal = (props: Props) => {
  return (
    <div className="md:h-2/3 md:w-2/3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
  );
};

export default RulesModal;
