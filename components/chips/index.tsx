import { TinyArrowUp } from "components/icons";

interface PercentProps {
  percent: number;
}

export const PercentUpBg = ({ percent }: PercentProps) => {
  return (
    <div className=" flex items-center text-sm gap-[6.5px] rounded-2xl bg-success-green w-max px-2 py-[2px]">
      <TinyArrowUp /> {percent}%
    </div>
  );
};

export const Chip = ({
  name,
  color,
  textColor,
}: {
  name: string;
  color: string;
  textColor: string;
}) => {
  return (
    <div
      className={`${color} bg-opacity-10 rounded-2xl text-xs px-2 py-1 w-max flex items-center gap-x-2 ${textColor}`}
    >
      <div className={`${color} w-2 h-2 rounded-full `}></div> {name}
    </div>
  );
};
