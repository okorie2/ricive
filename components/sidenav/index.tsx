import Image from "next/image";
import React from "react";
import Logo from "public/assets/svgs/logo.svg";
import Avi from "public/assets/pngs/avi.png";

import {
  Cancel,
  Chart,
  CheckDone,
  Dashboard,
  Exit,
  Home,
  Projects,
  Settings,
  Support,
  Users,
} from "components/icons";
import { NavLink } from "components/navlink";
import Progress from "components/progress";
import Search from "components/search";

export default function Sidenav() {
  return (
    <div className=" w-[23vw] border-r border-light-gray2 px-[1.5vw] fixed h-screen">
      <div className="logo pt-8 pb-4">
        <Image src={Logo} alt="logo" />
      </div>
      <Search />

      <div className="pt-3 ">
        <NavLink activeClassName="active" href={"/home"} passHref>
          <div className="list flex gap-4 py-2 my-2 items-center px-3  text-light-gray side-hover ">
            <Home color={"#667085"} />
            <div>
              <p className=" text-base">Home</p>
            </div>
          </div>
        </NavLink>
        <NavLink activeClassName="active" href={"/"} passHref>
          <div className="list flex gap-4 py-2 my-2  items-center px-3  text-light-gray side-hover ">
            <Dashboard color={"#667085"} />
            <div>
              <p className=" text-base">Dashboard</p>
            </div>
          </div>
        </NavLink>
        <NavLink activeClassName="active" href={"/projects"} passHref>
          <div className="list flex gap-4 py-2 my-2  items-center px-3  text-light-gray side-hover ">
            <Projects color={"#667085"} />
            <div>
              <p className="text-base">Projects</p>
            </div>
          </div>
        </NavLink>
        <NavLink activeClassName="active" href={"/tasks"} passHref>
          <div className="list flex gap-4 py-2 my-2  items-center px-3  text-light-gray side-hover ">
            <CheckDone color={"#667085"} />
            <div>
              <p className=" text-base">Tasks</p>
            </div>
          </div>
        </NavLink>
        <NavLink activeClassName="active" href={"/reporting"} passHref>
          <div className="list flex gap-4 py-2 my-2  items-center px-3  text-light-gray side-hover ">
            <Chart color={"#667085"} />
            <div>
              <p className=" text-base">Reporting</p>
            </div>
          </div>
        </NavLink>

        <NavLink activeClassName="active" href={"/users"} passHref>
          <div className="list flex gap-4 py-2 my-2  items-center px-3  text-light-gray side-hover ">
            <Users color={"#667085"} />
            <div>
              <p className=" text-base ">Users</p>
            </div>
          </div>
        </NavLink>
      </div>

      <div className="rest pt-[10vh] ">
        <NavLink activeClassName="active" href={"/support"} passHref>
          <div className="list flex gap-4 py-2 px-3 my-2  text-light-gray side-hover ">
            <Support color={"#667085"} />
            <div>
              <p className="text-base">Support</p>
            </div>
          </div>
        </NavLink>
        <NavLink activeClassName="active" href={"/settings"} passHref>
          <div className="list flex gap-4 py-2 px-3 my-2  text-light-gray side-hover ">
            <Settings color={"#667085"} />
            <div>
              <p className=" text-base">Settings</p>
            </div>
          </div>
        </NavLink>

        <div className="alert bg-light-blue   rounded-lg my-[2rem] text-sm py-5 px-4 relative">
          <p className=" font-[500] text-secondary-black">Monthly Budget</p>
          <p className=" text-lighter-gray pt-2">
            You’re at 80% of your budget.
          </p>
          <div className=" py-5">
            <Progress percentage={80} />
          </div>
          <div className=" flex gap-x-4 text-lighter-gray">
            <span>Dismiss</span>
            <span className=" text-primary-green">Upgrade Plan</span>
          </div>
          <div className=" absolute top-4 right-4">
            <Cancel />
          </div>
        </div>

        <hr className="line border-light-gray2 my-[1rem]  " />

        <div className="user flex mt-[1rem] justify-between">
          <div className="">
            <Image
              src={Avi}
              alt="avatar"
              placeholder="blur"
              width={40}
              height={40}
            />
          </div>
          <div>
            <p className="text-secondary-black text-sm font-medium">
              Karen Ijezie
            </p>
            <p className="text-lighter-gray text-sm font-normal">
              karen@ricive.com
            </p>
          </div>
          <Exit color={"#667085"} />
        </div>
      </div>
    </div>
  );
}
