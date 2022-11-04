import { ButtonOutline, ExportButton } from "components/button";
import Search from "components/search";
import { Tab } from "components/tab";
import Image from "next/image";
import React, { useState } from "react";
import spotify from "public/assets/svgs/spotify.svg";
import ac from "public/assets/svgs/ac.svg";
import fv from "public/assets/svgs/fv.svg";
import stripe from "public/assets/svgs/stripe.svg";
import figma from "public/assets/svgs/figma.svg";
import tb from "public/assets/svgs/tb.svg";
import visa from "public/assets/svgs/visa.svg";
import mastercard from "public/assets/svgs/mastercard.svg";
import { Pen } from "components/icons";
import { Chip, ColoredChips } from "components/chips";
import ModalCard from "components/modal";

const data = [
  {
    logo: spotify,
    name: "Spotify",
    amount: "- $18.99",
    time: "Wed 1:00pm",
    category: "Subscription",
    categoryColor: "blue",
    cardType: "visa",
  },
  {
    logo: ac,
    name: "A Coffee",
    amount: "- $4.50",
    time: "Wed 7:20am",
    category: "Food and dining",
    categoryColor: "red",
    cardType: "visa",
  },
  {
    logo: stripe,
    name: "Stripe",
    amount: "+ $88.00",
    time: "Wed 2:45am",
    category: "Subscription",
    categoryColor: "green",
    cardType: "master",
  },
  {
    logo: figma,
    name: "Figma",
    amount: "- $15.00",
    time: "Tue 6:10pm",
    category: "Subscription",
    categoryColor: "blue",
    cardType: "visa",
  },
  {
    logo: tb,
    name: "TBF Bakery",
    amount: "- $12.50",
    time: "Tue 7:52am",
    category: "Food and dining",
    categoryColor: "red",
    cardType: "visa",
  },
  {
    logo: fv,
    name: "Fresh F&V",
    amount: "- $40.20",
    time: "Tue 12:15pm",
    category: "Groceries",
    categoryColor: "blue",
    cardType: "visa",
  },
  {
    logo: stripe,
    name: "Stripe",
    amount: "+ $88.00",
    time: "Tue 5:40am",
    category: "Income",
    categoryColor: "green",
    cardType: "master",
  },
];

const cardType = { visa: visa, master: mastercard };

const Table = () => {
  const [download, setDownload] = useState(false);
  return (
    <div className="w-max lg:w-full pt-6 bg-white rounded-lg relative  border border-light-gray2 shadow-dashboard-shadow">
      <div className="px-6 flex justify-between items-center pb-6 border-b border-light-gray2">
        <p className=" font-[500] text-lg text-primary-black">
          Recent transactions
        </p>

        <div className=" flex gap-x-4">
          <div className=" relative" onClick={() => setDownload(!download)}>
            <ExportButton>Download</ExportButton>
            {download ? (
              <div className="absolute top-[120%] -left-[60%]">
                <ModalCard
                  text="Download your transaction report"
                  subText="Easily download your business transactions reports with just a tap."
                  percentLeft={50}
                />
              </div>
            ) : null}
          </div>
          <ButtonOutline>View report</ButtonOutline>
        </div>
      </div>

      <div className="py-6 w-[70rem] lg:w-auto">
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
            {data.map((item, index) => (
              <tr className="   pt-6 border-b border-b-light-gray2" key={index}>
                <td className=" pl-6 flex items-center text-sm gap-x-3 py-4 ">
                  <Image src={item.logo} alt="" /> {item.name}
                </td>
                <td
                  className={
                    " py-4 " +
                    (item.amount === "+ $88.00" ? "text-[#039855]" : "")
                  }
                >
                  {item.amount}
                </td>
                <td className=" py-4">{item.time}</td>
                <td className=" py-4">
                  <ColoredChips
                    text={item.category}
                    color={item.categoryColor}
                  />
                </td>
                <td className=" py-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={cardType[item.cardType as keyof typeof cardType]}
                      alt=""
                    />
                    <div>
                      <p className=" text-primary-black">Visa 1234</p>
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
