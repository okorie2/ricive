import { ActiveButton, ButtonOutline, ExportButton } from "components/button";
import BasicCard from "components/cards/basic-card";
import BalanceChart from "components/charts/balance-chart";
import { PercentUpBg } from "components/chips";
import ModalCard from "components/modal";
import { Tab } from "components/tab";
import Table from "components/table";
import React, { useState } from "react";

export default function Dashboard() {
  const [insight, setInsight] = useState(false);
  return (
    <div className="bg-background-white min-h-screen p-8 relative">
      <div className=" flex justify-between">
        <h1 className=" text-3xl text-primary-black font-[500]">
          Welcome back, Karen
        </h1>
        <div className=" flex gap-4">
          <div>
            <ExportButton>Export</ExportButton>
          </div>

          <div className="relative" onClick={() => setInsight(!insight)}>
            <ActiveButton>Insights</ActiveButton>
            {insight ? (
              <div className="absolute top-[120%] right-0">
                <ModalCard
                  text="Find your business insights here"
                  subText="Remain updated about your customer reach, views and engagements
        increase."
                  percentLeft={80}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <h2 className=" text-lighter-gray font-[300]">
        Measure your advertising ROI and track and report website traffic.
      </h2>
      <div className=" py-6">
        <Tab options={["12 months", "30 days", "7 days", "24 hours"]} />
      </div>

      <div className=" grid md:grid-cols-2 lg:grid-cols-3 pb-6 gap-x-6 gap-y-6">
        <BasicCard
          direction="up"
          rate="12%"
          title="Users"
          value="20.8k"
          data={[200, 320, 250, 550]}
          color={"#12B76A"}
        />
        <BasicCard
          direction="down"
          rate="2%"
          title="Sessions"
          value="26.4k"
          data={[550, 250, 320, 200]}
          color={"#F04438"}
        />
        <BasicCard
          direction="up"
          rate="2%"
          title="Session duration"
          value="3m 52s"
          data={[200, 320, 250, 550]}
          color={"#12B76A"}
        />
      </div>

      <div className="w-full p-6 bg-white rounded-lg relative  border border-light-gray2 shadow-dashboard-shadow">
        <div className="flex justify-between items-center">
          <p className=" text-primary-black font-[500]">Total Balance</p>
          <ButtonOutline>View report</ButtonOutline>
        </div>

        <div className=" flex items-center gap-x-4">
          <p className=" text-primary-black font-[500] text-3xl">$107,843.82</p>
          <PercentUpBg percent={7.2} />
        </div>
        <div className="h-[35vh]">
          <BalanceChart />
        </div>
      </div>
      <div className=" pt-6 overflow-x-scroll">
        <Table />
      </div>
    </div>
  );
}
