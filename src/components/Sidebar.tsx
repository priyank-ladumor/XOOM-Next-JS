"use client";

import React from "react";
import { FaVideo } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { CiCalendarDate } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";
import { SlCamrecorder } from "react-icons/sl";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";


const Sidebar = () => {
  const pathname = usePathname()
  return (
    <div className="min-w-[264px]">
      <div className="p-4">
        <div className="px-5 pt-1 flex justify-start items-center text-lg font-semibold">
          <Link href="/" className="" >
            <FaVideo className="me-3 cursor-pointer size-10 text-blue-600 " />
          </Link>
          <span className="cursor-pointer" style={{ fontSize: "34px" }}>
            <Link href="/" className="" >
              XOOM
            </Link>
          </span>
        </div>
      </div>
      <ul className="py-6 px-6">
        <div className="py-3" >
          <Link href="/" >
            <li
              className={cn("px-4 py-3 rounded-md hover:bg-blue-400 cursor-pointer flex justify-start items-center", { "bg-blue-600": pathname === "/" })}
              style={{ fontSize: "24px" }}
            >
              <GoHome className="me-8" style={{ fontSize: "26px" }} />
              Home
            </li>
          </Link>
        </div>
        <div className="py-3" >
          <Link href="/upcoming" >
            <li
              className={cn("px-4 py-3 rounded-md hover:bg-blue-400 cursor-pointer flex justify-start items-center", { "bg-blue-600": pathname === "/upcoming" })}
              style={{ fontSize: "24px" }}
            >
              <CiCalendarDate className="me-8" style={{ fontSize: "26px" }} />
              Upcoming
            </li>
          </Link>
        </div>
        <div className="py-3" >
          <Link href="/previous" >
            <li
              className={cn("px-4 py-3 rounded-md hover:bg-blue-400 cursor-pointer flex justify-start items-center", { "bg-blue-600": pathname === "/previous" })}
              style={{ fontSize: "24px" }}
            >
              <CiCalendar className="me-8" style={{ fontSize: "26px" }} />
              Previous
            </li>
          </Link>
        </div>
        <div className="py-3" >
          <Link href="/recording" >
            <li
              className={cn("px-4 py-3 rounded-md hover:bg-blue-400 cursor-pointer flex justify-start items-center", { "bg-blue-600": pathname === "/recording" })}
              style={{ fontSize: "24px" }}
            >
              <SlCamrecorder className="me-8" style={{ fontSize: "26px" }} />
              Recordings
            </li>
          </Link>
        </div>
        <div className="py-3" >
          <Link href="/personal-room" >
            <li
              className={cn("px-4 py-3 rounded-md hover:bg-blue-400 cursor-pointer flex justify-start items-center", { "bg-blue-600": pathname === "/personal-room" })}
              style={{ fontSize: "24px" }}
            >
              <IoAddOutline className="me-8" style={{ fontSize: "26px" }} />
              Personal Room
            </li>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
