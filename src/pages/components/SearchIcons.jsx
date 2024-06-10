import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const SearchIcons = () => {
  return (
    <div className="flex items-center bg-white rounded-full p-2 shadow-md">
      <SearchIcon className="mx-4" />
      <div className="h-6 border-l border-gray-300 mx-4"></div>
      <NotificationsIcon className="mx-4" />
      <div className="h-6 border-l border-gray-300 mx-4"></div>
      <MoreVertIcon className="mx-4" />
    </div>
  );
};
