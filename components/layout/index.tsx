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
        <div className="ml-[23vw] w-[77vw]">{children}</div>
      </div>
    </>
  );
}
