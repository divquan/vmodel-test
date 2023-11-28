import Slider from "@/components/Slider";
import { generalTopics, subTopics } from "@/data";
// import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

const page = () => {
  // const { theme, setTheme } = useTheme();

  return (
    <div className="">
      <h1 className="text-2xl font-semibold mb-3 text-center">
        General Topics
      </h1>
      <div className="flex flex-wrap border border-gray-100 justify-stretch rounded-[17px]">
        {generalTopics.map((topic, index) => {
          if (topic.link == "not") {
            return (
              <div className="w-1/2 md:w-1/3 lg:w-1/3" key={index}>
                <div
                  key={index}
                  className={`h-32 border border-gray-100 gap-5 w-full flex flex-col justify-center items-center  ${
                    index == 0
                      ? "rounded-tl-[15px] "
                      : index == 1
                      ? " rounded-tr-[15px]  md:rounded-tr-[0px]  "
                      : index == 2
                      ? " md:rounded-tr-[15px] "
                      : index == 10
                      ? " rounded-bl-[15px]  md:rounded-bl-[0px]  "
                      : index == 9
                      ? " md:rounded-bl-[15px] "
                      : index == 11
                      ? "rounded-br-[15px]"
                      : ""
                  }`}
                >
                  <span>{""}</span>
                </div>
              </div>
            );
          }
          const subTopic = subTopics[topic.link];
          const LinkToFirstSubTopic = subTopic[0];
          return (
            <Link
              href={"/" + topic.link + "/" + LinkToFirstSubTopic.link}
              className="w-1/2 md:w-1/3 lg:w-1/3"
              key={index}
            >
              <div
                className={`h-32 border border-gray-100 gap-5 w-full flex flex-col justify-center items-center  ${
                  index == 0
                    ? "rounded-tl-[15px] "
                    : index == 1
                    ? " rounded-tr-[15px]  md:rounded-tr-[0px]  "
                    : index == 2
                    ? " md:rounded-tr-[15px] "
                    : index == 10
                    ? " rounded-bl-[15px]  md:rounded-bl-[0px]  "
                    : index == 9
                    ? " md:rounded-bl-[15px] "
                    : index == 11
                    ? "rounded-br-[15px]"
                    : ""
                }`}
              >
                <span>{topic.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
