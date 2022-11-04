import { ButtonOutline, ExportButton } from "components/button";
import Search from "components/search";
import { Tab } from "components/tab";
import Image from "next/image";
import React from "react";
import spotify from "public/assets/svgs/spotify.svg";
import visa from "public/assets/svgs/visa.svg";
import { Pen } from "components/icons";
import { Chip } from "components/chips";

const Table = () => {
  return (
    <div className="w-full pt-6 bg-white rounded-lg relative  border border-light-gray2 shadow-dashboard-shadow">
      <div className="px-6 flex justify-between items-center pb-6 border-b border-light-gray2">
        <p className=" font-[500] text-lg text-primary-black">
          Recent transactions
        </p>

        <div className=" flex gap-x-4">
          <ExportButton>Download</ExportButton>
          <ButtonOutline>View report</ButtonOutline>
        </div>
      </div>

      <div className="py-6 ">
        <div className="px-6 flex justify-between items-center">
          <div>
            <Tab options={["View all", "Monitored", "Unmonitored"]} />
          </div>
          <Search />
        </div>

        <table className="w-full mt-6">
          <th className=" text-left text-xs text-lighter-gray font-[500] pl-6">
            Transaction
          </th>
          <th className=" text-left text-xs text-lighter-gray font-[500]">
            Amount
          </th>
          <th className=" text-left text-xs text-lighter-gray font-[500]">
            Date
          </th>
          <th className=" text-left text-xs text-lighter-gray font-[500]">
            Category
          </th>
          <th className=" text-left text-xs text-lighter-gray font-[500]">
            Card
          </th>
          <th className=" text-left text-xs text-lighter-gray font-[500]">
            Edit
          </th>

          <tbody className="text-sm text-lighter-gray pt-6">
            {Array.from(Array(10).keys()).map((x, index) => (
              <tr className="   pt-6 border-b border-b-light-gray2" key={index}>
                <td className=" pl-6 flex items-center text-sm gap-x-3 py-4 ">
                  <Image src={spotify} alt="" /> Spotify
                </td>
                <td className=" py-4">- $18.99</td>
                <td className=" py-4">Wed 1:00pm</td>
                <td className=" py-4">
                  <Chip
                    name="Subscription"
                    color="bg-[#2E90FA]"
                    textColor="text-[#175CD3]"
                  />
                </td>
                <td className=" py-4">
                  <div className="flex items-center gap-3">
                    <Image src={visa} alt="" />
                    <div>
                      <p>Visa 1234</p>
                      <p>Expiry 06/2024</p>
                    </div>
                  </div>
                </td>
                <td className=" py-4">
                  <Pen />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
