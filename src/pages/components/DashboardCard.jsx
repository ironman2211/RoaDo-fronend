"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useRecoilState } from "recoil";
import {
  totalState,
  upcomingState,
  ongoingState,
  completedState,
} from "../lib/atom";



export const DashboardCard = ({ title }) => {
  const [total, setTotal] = useRecoilState(totalState);
  const [upcoming, setUpcoming] = useRecoilState(upcomingState);
  const [ongoing, setOngoing] = useRecoilState(ongoingState);
  const [completed, setCompleted] = useRecoilState(completedState);

  const ref = useRef(null);

  useEffect(() => {
    const data = [
      { name: "Upcoming", value: upcoming, color: "#FFCB49" },
      { name: "Ongoing", value: ongoing, color: "#7464FF" },
      { name: "Completed", value: completed, color: "#4FD2B5" },
    ];

    const width = 200;
    const height = 200;
    const margin = 20;
    const radius = Math.min(width, height) / 2 - margin;

    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const pie = d3.pie().value((d) => d.value);
    const data_ready = pie(data);

    const arc = d3.arc().innerRadius(60).outerRadius(radius);

    svg
      .selectAll("arc")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => d.data.color)
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);

    // Clean up function
    return () => {
      d3.select(ref.current).selectAll("*").remove();
    };
  }, [completed, upcoming, ongoing]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-60 mx-2">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div
        className="relative flex items-center justify-center"
        style={{ height: 200 }}
      >
        <svg ref={ref}></svg>
        <div className="absolute text-center">
          <p className="text-gray-500">Total</p>
          <p className="text-xl font-bold">{total}</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2 bg-gradient-to-r from-start to-upcomingend p-2 rounded-md">
          <span className="font-medium">Upcoming</span>
          <span>{upcoming}</span>
        </div>
        <div className="flex justify-between items-center mb-2 bg-gradient-to-r from-start to-ongoingend p-2 rounded-md">
          <span className="font-medium">Ongoing</span>
          <span>{ongoing}</span>
        </div>
        <div className="flex justify-between items-center mb-2 bg-gradient-to-r from-start to-completedend p-2 rounded-md">
          <span className="font-medium">Completed</span>
          <span>{completed}</span>
        </div>
      </div>
    </div>
  );
};
