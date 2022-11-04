import React from "react";
import More from "public/assets/svgs/more.svg";
import Up from "public/assets/svgs/up.svg";
import Down from "public/assets/svgs/down.svg";

import Image from "next/image";
import BasicChart from "components/charts/basic-chart";
import { ArrowDown, ArrowUp } from "components/icons";

interface Props {
  title: string;
  value: string;
  rate: string;
  direction: "up" | "down";
  color: string;
  data: number[];
}
export default function BasicCard({ title, ...rest }: Props) {
  return (
    <div className="border bg-white shadow-dashboard-shadow rounded-lg py-4 px-6 w-full">
      <div className="top flex justify-between items-center">
        <div>
          <p className="text-primary-black font-semibold text-base ">{title}</p>
        </div>
        <div>
          {" "}
          <Image src={More} alt="more" />{" "}
        </div>
      </div>
      <div className="btm flex  mt-6  gap-">
        <div className=" justify-between">
          <h3 className="text-primary-black text-4xl font-semibold whitespace-nowrap">
            {rest.value}
          </h3>
          <div className="flex mt-4 gap-x-1 text-sm ">
            <div className="rate flex gap-x-1 items-center justify-start w-full">
              {rest.direction === "up" ? <ArrowUp /> : <ArrowDown />}
              <p className={`text-[${rest.color}] font-semibold text-sm`}>
                {rest.rate}
              </p>
            </div>
            <div className="w-full">
              <p className="text-lighter-gray text-sm font-semibold whitespace-nowrap">
                vs last month
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[80%] ">
          <BasicChart data={rest.data} color={rest.color} />
        </div>
      </div>
    </div>
  );
}
