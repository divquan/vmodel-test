"use client";
import React, { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import Sidebar from "./faqComponents/Sidebar";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { usePathname, useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

/**Materail ui imports */
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";
import { generalTopics, subTopicContent, subTopics } from "@/data";
import { VMLogo } from "./VMLogo";
/**Materail ui imports ends here */

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) router.push("/search?q=" + decodeURIComponent(searchTerm));
  };
  return (
    <nav className="w-full ">
      <div className="flex items-center justify-between p-4">
        <div className="flex  items-center gap-3 md:gap-6 ">
          {/* <Image
              alt="vmodel logo"
              height={65}
              className="h-14 md:h-16"
              src={logo}
            /> */}
          <div>
            <a
              href="https://vmodelweb.vercel.app/"
              className="hidden md:inline-block"
            >
              <VMLogo isDark={true} width={53} height={53} />
            </a>
            <a href="https://vmodelweb.vercel.app/" className="md:hidden">
              <VMLogo isDark={true} width={40} height={40} />
            </a>
          </div>
          <a href={"/"}>
            <h1 className="text-2xl md:text-3xl my-3 text-[#EDCEAB] font-semibold text-center md:text-left ">
              Help Center
            </h1>
          </a>
        </div>
        {/* <span className="text-2xl font-bold">Help Center</span> */}

        <form onSubmit={handleSearch} className="relative hidden md:block">
          <input
            className="w-full h-[45px] rounded-[80px] px-5 text-white outline-none placeholder:text-white placeholder:opacity-40 "
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
        <div className="md:hidden">
          <MdMenu
            color="#edceab"
            size={32}
            onClick={() => setShow((init) => !init)}
          />
          {/* <MenuTwo /> */}
        </div>
        {/* <img src={light.src} className="h-8 w-8 text-white" /> */}

        {show ? <Menu setShow={setShow} /> : null}
      </div>
    </nav>
  );
};

export default Navbar;

const Menu = ({ setShow }) => {
  const pathname = usePathname();
  const currentroute = pathname.split("/")[1];
  const subCurrentRoute = pathname.split("/")[2];
  const hoverEffect = "hover:bg-[#edceaba6]";

  const [showSubMenu, setShowSubMenu] = useState(false);
  const [mainMenu, setMainMenu] = useState("/");

  const router = useRouter();
  useEffect(() => {
    // Set the overflow property to 'hidden' when the component mounts
    document.body.style.overflow = "hidden";
    // Clean up: Set the overflow property back to 'auto' when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      id="nav_menu"
      className="h-screen w-full top-0 left-0  overflow-x-auto fixed z-50 bg-[#503C3B] "
    >
      <div className=" fixed flex w-full justify-between bg-[#503C3B] h-14">
        <h1 className="text-xl absolute top-4 left-5 font-medium text-[#EDCEAB] text-">
          Help Centre
        </h1>
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

const MenuTwo = () => {
  const [state, setState] = useState(false);
  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(!state);
  };

  // const list = (anchor) => (
  //   <Box
  //     sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
  //     role="presentation"
  //     onClick={toggleDrawer}
  //     onKeyDown={toggleDrawer}
  //   >
  //     <List>
  //       {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <MailIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {["All mail", "Trash", "Spam"].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <MailIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  return (
    <div>
      <Button
        onClick={toggleDrawer(!state)}
        className="text-white rounded-full"
      >
        <div className="md:hidden">
          <MdMenu className="text-white" size={32} />
        </div>
      </Button>
      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(!state)}>
        {/* {list(anchor)} */}
        <div className="bg-black  text-white pt-3">
          <div className="flex mb-4 justify-between px-3">
            <h1 className="text-2xl text-[#edceab] font-medium">Help Centre</h1>
            <MdClose
              size={32}
              onClick={toggleDrawer()}
              className="cursor-pointer"
            />
          </div>
          <MenuItems toggleDrawer={toggleDrawer} />
        </div>
      </Drawer>
    </div>
  );
};

const MenuItems = ({ toggleDrawer }) => {
  const hoverEffect = "hover:bg-[#edceaba6]";
  const pathname = usePathname();
  const currentroute = pathname.split("/")[1];
  const subCurrentRoute = pathname.split("/")[2];
  return (
    <div
      onClick={toggleDrawer}
      className={`flex-col min-w-[290px]  max-w-[290px]`}
    >
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
        const subTopic = subTopics[topic.link];
        return (
          <React.Fragment key={index}>
            <Link href={"/" + topic.link} onClick={() => toggleDrawer()}>
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
