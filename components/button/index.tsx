import { Export } from "components/icons";
import React from "react";

export const ExportButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button className=" rounded-lg shadow-search-shadow flex items-center gap-x-2 border border-faded-gray text-primary-black py-2 px-4 bg-white mon-hover">
      <Export /> {props.children}
    </button>
  );
};

export const ActiveButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button className="rounded-lg shadow-search-shadow flex items-center gap-x-2 border border-dark-green text-white py-2 px-4 bg-dark-green mon-hover">
      {props.children}
    </button>
  );
};

export const ButtonOutline = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button className=" rounded-lg shadow-search-shadow flex items-center gap-x-2 border border-faded-gray text-primary-black py-2 px-4 bg-white mon-hover font-[500]">
      {props.children}
    </button>
  );
};
