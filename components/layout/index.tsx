import React from "react";
import Sidenav from "../sidenav";
interface Props {
  children: JSX.Element;
}
export default function Layout({ children }: Props) {
  return (
    <>
      <div className="flex font-inter">
        <div className="  ">
          <Sidenav />
        </div>
        <div className="ml-[18vw] w-full">{children}</div>
      </div>
    </>
  );
}
