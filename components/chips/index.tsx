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
  dotColor,
  bg,
}: {
  name: string;
  color: string;
  dotColor: string;
  bg: string;
}) => {
  return (
    <div
      className={`  rounded-2xl text-xs px-2 py-1 w-max flex items-center gap-x-2 `}
      style={{ backgroundColor: bg, color: color }}
    >
      <div
        className={` w-2 h-2 rounded-full `}
        style={{ backgroundColor: dotColor }}
      ></div>
      {name}
    </div>
  );
};

export const ColoredChips = ({
  color,
  text,
}: {
  color: string;
  text: string;
}) => {
  return (
    <>
      {
        {
          red: (
            <Chip
              name={text}
              color={"#C11574"}
              dotColor={"#EE46BC"}
              bg={"#FDF2FA"}
            />
          ),
          blue: (
            <Chip
              name={text}
              color={"#175CD3"}
              dotColor={"#2E90FA"}
              bg={"#EFF8FF"}
            />
          ),
          green: (
            <Chip
              name={text}
              color={"#027A48"}
              dotColor={"#12B76A"}
              bg={"#ECFDF3"}
            />
          ),
        }[color]
      }
    </>
  );
};
