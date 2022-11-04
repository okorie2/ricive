import React, { useState } from "react";

interface Props {
  options: string[];
}
export const Tab = ({ options }: Props) => {
  const [activeTab, setActiveTab] = useState(options[0]);
  return (
    <div className=" rounded-lg border border-faded-gray flex w-max overflow-hidden text-sm text-secondary-black">
      {options.map((option, index) => (
        <div
          key={index}
          className={
            " bg-white px-4 py-2 mon-hover border-l border-faded-gray first:border-l-0 " +
            (activeTab === option && " bg-light-blue")
          }
          onClick={() => setActiveTab(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};
