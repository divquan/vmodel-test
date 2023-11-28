"use client";
import { generalTopics, subTopics } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ show }) => {
  const pathname = usePathname();
  const currentroute = pathname.split("/")[1];
  const subCurrentRoute = pathname.split("/")[2];
  const hoverEffect = "hover:bg-[#edceaba6]";

  const showMobile = show !== "mobile" ? "hidden  md:flex" : "flex md:hidden";
  return (
    <div className={`flex-col min-w-[290px]  max-w-[290px] ${showMobile}`}>
      <Link href={"/"}>
        <p
          className={`p-4 ${hoverEffect} rounded-[21px] cursor-pointer ${
            !currentroute ? "text-[#EDCEAB] font-medium" : "text-white"
          }`}
          key={"kjlk"}
        >
          {"Home"}
        </p>
      </Link>
      {generalTopics.map((topic, index) => {
        if (topic.link === "not") return null;
        const subTopic = subTopics[topic.link];
        const LinkToFirstSubTopic = subTopic[0];
        return (
          <React.Fragment key={index}>
            <Link href={"/" + topic.link + "/" + LinkToFirstSubTopic.link}>
              <p
                className={`p-4 ${hoverEffect} rounded-[21px] cursor-pointer  ${
                  topic.link === currentroute
                    ? "text-[#EDCEAB] font-medium "
                    : ""
                }`}
                key={index}
              >
                {topic.name}
              </p>
            </Link>
            {topic.link === currentroute ? (
              <div className=" ">
                {subTopic.map((topic, index) => {
                  return (
                    <Link
                      href={"/" + currentroute + "/" + topic.link}
                      key={index}
                    >
                      <div
                        className={`text-sm ml-7 rounded-[21px] ${
                          topic.link === subCurrentRoute
                            ? "text-[#EDCEAB]"
                            : " text-gray-300 "
                        }${hoverEffect} p-2 m-2  `}
                      >
                        <span>{topic.name}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Sidebar;
