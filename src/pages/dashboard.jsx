import React from "react";
import { DashboardCard } from "./components/DashboardCard"
import { QuickActionsCard } from "./components/QuickActions";
import { SearchIcons } from "./components/SearchIcons";
import { BottomCard } from "./components/BottomCard";
import { HighlightsComp } from "./components/HighlightsComp";
import { SideBar } from "./components/SideBar";
import { FiTruck, FiUser } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { RecoilRoot } from "recoil";

const Dashboard = () => {
  return (
    <div className="w-full grid grid-cols-[auto_1fr_auto] grid-rows-[auto_100px_auto] h-screen gap-4">
      <div className="">
        <SideBar />
      </div>
      <div className="bg-slate-50">
        <div className="flex justify-between pt-5 px-2">
          <div className="font-semibold text-2xl">Dashboard</div>
          <div className="flex justify-end pb-5 ">
            <SearchIcons />
          </div>
        </div>
        <RecoilRoot>
          <div className="flex justify-around">
            <DashboardCard title="Orders" />
            <DashboardCard title="Trips" />
            <DashboardCard title="Revenues" />
            <DashboardCard title="Expenses" />
          </div>
        </RecoilRoot>
        <div className="font-semibold text-2xl mt-6 ">Quick Actions</div>
        <div className="flex flex-col py-8">
          <div className="bg-white rounded-lg shadow-md p-4 flex justify-around items-center">
            <QuickActionsCard
              icon={<AiOutlineArrowRight />}
              title="Create Indents"
            />
            <div className="border-r-2 border-gray-300 h-8"></div>
            <QuickActionsCard icon={<FiTruck />} title="Add Vehicle" />
            <div className="border-r-2 border-gray-300 h-8"></div>
            <QuickActionsCard icon={<FiTruck />} title="Add Trailer" />
            <div className="border-r-2 border-gray-300 h-8"></div>
            <QuickActionsCard icon={<FiUser />} title="Add Driver" />
            <div className="border-r-2 border-gray-300 h-8"></div>
            <QuickActionsCard icon={<FiTruck />} title="Add Indents" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="font-semibold text-2xl mt-6">
            High Priority alerts (14)
          </div>
          {/* <Link href={"/view"}>
            <div className="flex font-semibold text-xl mt-6 ">
              View All{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </Link> */}
        </div>
        <div className="flex justify-around gap-16 py-6 ">
          <div>
            <BottomCard
              title="Driver Raised Concern"
              loadNumber="12454"
              billTo="RoaDo demo Bangalore"
              date="13 Feb 24"
              concernText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              thermometerIcon={<PersonOutlineOutlinedIcon />}
            />
          </div>
          <div className="">
            <BottomCard
              title="Refer Temp out of Range"
              loadNumber="12454"
              billTo="RoaDo demo Bangalore"
              date="13 Feb 24"
              concernText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              thermometerIcon={<DeviceThermostatIcon />}
            />
          </div>
        </div>
      </div>

      <div className="w-128">
        <HighlightsComp />
      </div>
    </div>
  );
};

export default Dashboard;
