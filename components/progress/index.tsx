import React from "react";
interface Props {
  percentage: number;
}
const Progress = ({ percentage }: Props) => {
  return (
    <div className=" h-2 rounded bg-light-gray2">
      <div
        className="h-full bg-primary-green rounded"
        style={{ width: ` ${percentage}%` }}
      ></div>
    </div>
  );
};

export default Progress;
