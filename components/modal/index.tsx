import React from "react";
import { RightArrow } from "components/icons";
interface Props {
  text: string;
  subText: string;
  percentLeft: number;
}
export default function ModalCard({ text, subText, percentLeft }: Props) {
  return (
    <div className="bg-[#5AA645]  rounded-lg p-3 w-[20vw] relative">
      <h5 className="text-white font-semibold text-xs text-left">{text}</h5>
      <p className="text-white text-left text-xs mt-1">{subText}</p>
      <div className="flex justify-end items-center  mt-2">
        <button className="rounded-[3.01958px] h-6 bg-white text-[#3B3E45] flex  justify-center gap-x-1 items-center py-1 px-2 mon-hover">
          <p className="text-[10px]">Next</p>
          <RightArrow />
        </button>
      </div>
      <div
        className={`absolute triangle -top-[2px] bg-[#5AA645] `}
        style={{ left: `${percentLeft}%` }}
      ></div>
    </div>
  );
}
