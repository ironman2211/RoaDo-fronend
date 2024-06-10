"use client";
import React from "react";



export const HighlightCard = ({
  title,
  amount,
  currency,
  details,
  color,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm w-48">
      <div className="text-gray-500 text-sm mb-1">{title}</div>
      <div className="text-2xl font-semibold" style={{ color }}>
        {amount} {currency}
      </div>
      <div className="text-gray-500 text-sm">{details}</div>
    </div>
  );
};
