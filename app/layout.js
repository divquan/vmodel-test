import "./globals.css";
import Sidebar from "@/components/faqComponents/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VModelFooter from "@/components/VModelFooter";
import { dm_sans } from "@/utils/fonts";

export const metadata = {
  title: "Help | VModel",
  description: "FAQ for VModel.app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en w-full">
      <body className={dm_sans.className + " bg-[#503C3B] text-white"}>
        {/* <Navbar /> */}
        <Header />
        <div className="p-3 md:p-6 relative mb-10">
          <div
            className="gap-2 md:gap-5  flex  max-w-5xl flex-col  mx-auto h-fit
           "
          >
            {/* <Slider /> */}

            <div className="flex flex-col md:flex-row">
              {/* <h1 className="text-3xl my-3 text-[#EDCEAB] font-semibold text-center md:text-left ">
                Help Center
              </h1> */}
              <div className="">
                <Sidebar show={"notmobile"} />
              </div>
              <div className="  flex-1 mx-2">{children}</div>
            </div>
          </div>
        </div>
        <VModelFooter />
      </body>
    </html>
  );
}
