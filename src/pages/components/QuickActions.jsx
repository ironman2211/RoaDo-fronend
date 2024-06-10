import React from "react";


export const QuickActionsCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="text-4xl">{icon}</div>
      <p className="mt-2 text-sm font-medium">{title}</p>
    </div>
  );
};
