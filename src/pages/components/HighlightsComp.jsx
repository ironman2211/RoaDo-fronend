import { Activity } from "./Activity";
import { HighlightCard } from "./HighlightCard";
import { RecoilRoot } from "recoil";
const activities = [
  {
    user: "Gurpreet Singh",
    role: "Dispatch team",
    action: "has created Load No.",
    loadNumber: "I-I-AAA-1325",
  },
  {
    user: "Aman",
    role: "Driver",
    action: "Picked Up goods",
    loadNumber: "I-I-AAA-1325",
    location: "Location_Name",
  },
  {
    user: "Gurpreet Singh",
    role: "Dispatch team",
    action: "has created Load No.",
    loadNumber: "I-I-AAA-1325",
  },
  {
    user: "Gurpreet Singh",
    role: "Dispatch team",
    action: "Load No. I-I-AAA-1325 will start",
    loadNumber: "I-I-AAA-1325",
    note: "added by Gurpreet Singh",
  },
];
const activitiess = [
  {
    user: "Load No. I-I-AAA-1325 ",
    role: "Will be delivered ",
    action: "by ",
    loadNumber: "Aman(Driver)",
  },
  {
    user: "Aman",
    role: "Driver",
    action: "Picked Up goods",
    loadNumber: "I-I-AAA-1325",
    location: "Location_Name",
  },
  {
    user: "Gurpreet Singh",
    role: "Dispatch team",
    action: "has created Load No.",
    loadNumber: "I-I-AAA-1325",
  },
  {
    user: "Gurpreet Singh",
    role: "Dispatch team",
    action: "Load No. I-I-AAA-1325 will start",
    loadNumber: "I-I-AAA-1325",
    note: "added by Gurpreet Singh",
  },
];

export const HighlightsComp = () => {
  return (
    <div>
      <div className="pt-5">
        <div className="text-xl font-semibold">Todays's Highlights (14)</div>
        <div className="text-sm text-grey-700">19th Mar 2024</div>
      </div>
      <RecoilRoot>
        <div className="flex  pt-7">
          <div className="pr-5">
            <HighlightCard
              amount={10000}
              title="Income"
              currency="CAD"
              color="green"
              details="2 payments received"
            />
          </div>
          <div>
            <HighlightCard
              amount={50000}
              title="Expense"
              currency="CAD"
              color="#D04141"
              details="5 payments paid"
            />
          </div>
        </div>
      </RecoilRoot>
      <div className="py-10">
        <div className="flex justify-between pb-4 ">
          <div className="font-semibold">Completed Activities (14)</div>
          <a href={"/a"}>
            <div className="underline underline-offset-4">View All</div>
          </a>
        </div>
        <div>
          <Activity activities={activities} />
        </div>
      </div>
      <div className="">
        <div className="flex justify-between pb-4">
          <div className="font-semibold">Scheduled Activities (14)</div>
          <a href={"/view"}>
            <div className="underline underline-offset-4">View All</div>
          </a>
        </div>
        <div>
          <Activity activities={activitiess} />
        </div>
      </div>
    </div>
  );
};
