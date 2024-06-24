// TypeScript type for the props
type NoResultProps = {
  title?: string;
  desc?: string;
  classes?: string;
};

// React functional component
const NoResult = ({ title, desc, classes }: NoResultProps) => {
  return (
    <div
      className={`no-result py-16 px-5 text-center ${classes ? classes : ""}`}
    >
      <h2 className="text-base text-neutral-300 font-semibold mb-1">{title}</h2>{" "}
      <div className="text-sm text-neutral-300 font-normal">{desc}</div>
    </div>
  );
};

export default NoResult;
