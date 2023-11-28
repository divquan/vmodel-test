"use client";
import { dm_sans, montserrat } from "@/utils/fonts";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { generalTopics, subTopicContent, subTopics } from "@/data";
import { VMLogo } from "./VMLogo";

// import { Menu as MenuIcon } from "@/app/components/Icons/menu";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
// import SidebarDrawer from "../VMDrawer/SidebarDrawer";

const Ulist = ({ url, linkText, isActive, externalLinks }) => {
  return (
    <li className="flex vm-link">
      {externalLinks ? (
        <a
          href={url}
          rel="noreferrer"
          target="_blank"
          className={`${dm_sans.className} ${isActive && "vm-link-active"}`}
        >
          {linkText}
        </a>
      ) : (
        <Link
          href={url}
          className={`${dm_sans.className} ${isActive && "vm-link-active"}`}
        >
          {linkText}
        </Link>
      )}
    </li>
  );
};

const VMHeader = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [show, setShow] = useState(false);
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) router.push("/search?q=" + decodeURIComponent(searchTerm));
  };
  const pathname = usePathname();
  const listLink = [
    {
      id: 0,
      url: "/",
      linkText: "Home",
      externalLinks: false,
    },
    {
      id: 3,
      url: "/about",
      linkText: "About Us",
      externalLinks: false,
    },
    {
      id: 2,
      url: "/help-center",
      linkText: "Help Center",
      externalLinks: false,
    },
    {
      id: 1,
      url: "https://vmodel-steel.vercel.app/",
      linkText: "For Employees",
      externalLinks: false,
    },
  ];

  return (
    <>
      <header className="">
        <section className="px-0 md:px-[1%] py-0">
          <div className="max-w-[1600px] pl-3 md:pl-0 py-4 min-h-[10vh]  items-center justify-between flex mx-auto relative">
            <div className="flex  items-center gap-3 md:gap-6">
              <Link href="https://vmodelapp.com">
                <VMLogo
                  isDark={true}
                  width={65}
                  height={64}
                  className="vm-logo-mobile"
                />
              </Link>
              <Link href="/">
                <h1 className="text-2xl md:text-3xl my-3 vm-text-sec font-semibold text-center md:text-left ">
                  Help Center
                </h1>
              </Link>
            </div>
            <div className="left-[50%] transform -translate-x-1/2 absolute vm-hidden-md">
              <form
                onSubmit={handleSearch}
                className="relative hidden md:block"
              >
                <input
                  className="w-[350px] h-[45px] rounded-[80px] px-5 text-white outline-none placeholder:text-white placeholder:opacity-40 "
                  style={{
                    background: "rgb(237 206 171 / 50%)",
                  }}
                  placeholder="Search "
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
                <button
                  className="absolute right-0 top-0 h-[45px] transition-all vm-btn-hover duration-[.3s] px-5 rounded-[60px] vm-text-sec"
                  style={{
                    background: "rgb(80 60 59 / 72%)",
                  }}
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
            {/* <div className="w-[84px] md:w-1/3">
              <div className="flex items-center content-center p-[10px] w-full flex-wrap ">
                <div className="text-left flex items-center justify-center w-[68px] max-w-full">
                  <div>
                    <Link href="/" className="hidden md:inline-block">
                      <VMLogo isDark={true} width={53} height={53} />
                    </Link>
                    <Link href="/" className="md:hidden">
                      <VMLogo isDark={true} width={40} height={40} />
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="flex-1 md:w-1/3">
              <div className="flex items-center content-center p-[10px] w-full flex-wrap ">
                <div className="text-center w-full ">
                  <Link href="">
                    <h2
                      className={`vm-h2 vm-logo vm-text-sec ${montserrat.className}`}
                    >
                      VModel
                    </h2>
                  </Link>
                </div>
              </div>
            </div> */}
            <div className="w-[84px] vm-w-tab md:w-1/3 min-h-[64px] flex">
              <div className="vm-hidden-md flex items-center content-center p-[10px] w-full flex-wrap ">
                <div className="flex flex-col w-full">
                  <nav className="flex">
                    <ul className="ml-auto justify-end flex flex-wrap m-0 p-0 leading-normal relative z-[2] space-x-[30px]">
                      {listLink.map((listItem) => {
                        return (
                          <div key={listItem?.id}>
                            <Ulist
                              url={listItem?.url}
                              linkText={listItem?.linkText}
                              isActive={listItem.url == "/help-center"}
                              externalLinks={listItem?.externalLinks}
                            />
                          </div>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className=" lg:hidden pr-4">
              <MdMenu
                color="#edceab"
                size={32}
                onClick={() => setShow((init) => !init)}
              />
            </div>
          </div>
        </section>
      </header>

      {/* <div className="vm-drawer"> */}
      <Menu show={show} setShow={setShow} />
      {/* {isSidebarOpen && <SidebarDrawer setDrawerTogg={setIsSidebarOpen} />} */}
      {/* </div> */}
    </>
  );
};

export default VMHeader;

const Menu = ({ show, setShow }) => {
  const pathname = usePathname();
  const currentroute = pathname.split("/")[1];
  const subCurrentRoute = pathname.split("/")[2];
  const hoverEffect = "hover:bg-[#edceaba6]";

  const [showSubMenu, setShowSubMenu] = useState(false);
  const [mainMenu, setMainMenu] = useState("/");

  const router = useRouter();
  useEffect(() => {
    // Set the overflow property to 'hidden' when the component mounts
    // document.body.style.overflow = "hidden";
    // Clean up: Set the overflow property back to 'auto' when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  if (!show) return null;
  return (
    <div
      id="nav_menu"
      className="h-screen w-full top-0 left-0  overflow-x-auto fixed z-50 bg-[#503C3B] "
    >
      <div className=" fixed flex w-full justify-between bg-[#503C3B] h-14">
        <a href="/">
          <h1 className="text-xl absolute top-4 left-5 font-medium text-[#EDCEAB] text-">
            Help Centre
          </h1>
        </a>
        <MdClose
          size={32}
          onClick={() => setShow(false)}
          className="absolute top-4 right-5"
        />
      </div>
      <div className="flex justify-center mt-14  flex-col">
        <div className={`flex-col `}>
          {!showSubMenu ? (
            <>
              <div className="w-full px-4 my-2">
                {/* <Link href={"/search"}> */}
                {/* <input
                  type="search"
                  placeholder="Search by keyword"
                  className=" text-black px-3 py-2 bg-[#ffffff] rounded-[9px] mr-2 border border-3 border-white outline-none focus-visible:border-black  flex-1 w-full"
                /> */}
                <input
                  className="w-full h-[45px] rounded-[80px] px-5 text-white outline-none placeholder:text-white placeholder:opacity-40 "
                  style={{
                    background: "rgb(237 206 171 / 50%)",
                  }}
                  type="search"
                  placeholder="Search "
                  onClick={() => {
                    setShow(false);
                    router.push("/search");
                  }}
                />
                {/* </Link> */}
              </div>
              <div
                onClick={() => {
                  router.push("/");
                  setShow(false);
                }}
                className=" "
              >
                <p
                  className={`p-4 ${hoverEffect} rounded-[21px] cursor-pointer ${
                    !currentroute ? "text-[#EDCEAB] font-medium" : "text-white"
                  }`}
                >
                  {"Home"}
                </p>
              </div>
              {generalTopics.map((topic, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className=" flex items-center w-full  ">
                      <p
                        onClick={() => {
                          setShow(false);
                          router.push("/" + topic.link);
                        }}
                        className={` flex-1 p-4 ${hoverEffect} rounded-[21px] cursor-pointer   ${
                          topic.link === currentroute
                            ? "text-[#EDCEAB] font-medium "
                            : ""
                        }`}
                        key={index}
                      >
                        {topic.name}
                      </p>
                      <div
                        className="p-5 cursor-pointer"
                        onClick={() => {
                          setShowSubMenu(true);
                          setMainMenu(topic);
                        }}
                      >
                        <FaChevronRight />
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </>
          ) : (
            <>
              <div className=" ">
                <div className="flex ml-2 mt-3 items-center">
                  <FaArrowLeftLong
                    size={24}
                    className="cursor-pointer "
                    onClick={() => setShowSubMenu(false)}
                  />
                  <h3 className="ml-4 text-lg font-medium ">{mainMenu.name}</h3>
                </div>
                <div className="pl-8 mt-3">
                  {subTopics[mainMenu.link].map((topic, index) => {
                    return (
                      <div
                        className={`text-sm  rounded-[21px] ${
                          topic.link === subCurrentRoute
                            ? "text-[#EDCEAB]"
                            : " text-gray-300 "
                        }${hoverEffect} p-2 m-2  `}
                        key={index}
                        onClick={() => {
                          router.push("/" + mainMenu.link + "/" + topic.link);
                          setShow(false);
                        }}
                      >
                        <span>{topic.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
