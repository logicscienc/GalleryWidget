import React, { useState } from "react";
import Frame from "../../images/Frame.png";

const TabWidget = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Me" },
    { id: "experiences", label: "Experiences" },
    { id: "recommended", label: "Recommended" },
  ];

  return (
    <div
      className="relative w-[720px] h-[316px] rounded-[18.89px] mt-[96px] mr-[86px] flex flex-col items-center"
      style={{
        backgroundColor: "#363C43",
        boxShadow: "5.67px 5.67px 3.78px 0 rgba(0,0,0,0.4)",
      }}
    >
      {/* Tabs Container */}
      <div
        className="w-[614px] h-[62px] rounded-[23px] flex items-center mt-[17px]"
        style={{
          backgroundColor: "#171717",
          boxShadow: "inset 0px 4.96px 12.4px 2.48px rgba(0,0,0,0.25)",
        }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          const marginStyle = {};
          if (tab.id === "about") marginStyle.marginLeft = "6px";
          if (tab.id === "recommended") marginStyle.marginRight = "6px";
          if (tab.id !== "recommended") marginStyle.marginRight = "10px";

          return (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative w-[195px] h-[49px] rounded-[16px] flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-200 ease-in-out`}
              style={{
                ...(isActive
                  ? {
                      backgroundColor: "#28292F",
                      boxShadow:
                        "-8.43px -16.87px 50.6px -16.87px #485B71, 13.49px 16.87px 67.47px 8.43px #0A0A0A",
                    }
                  : {}),
                ...marginStyle,
              }}
            >
              {/* Hover Gradient Overlay */}
              {!isActive && (
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1f2125] via-[#2b2e33] to-[#2a3036] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
              </div>
              )}

              {/* Label */}
              <span
                className={`relative font-poppins font-medium text-[18px] leading-[16.1px] transition-colors duration-300 ${
                  isActive ? "text-white" : "text-[#666666]"
                }`}
              >
                {tab.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex-1 mt-[35px] w-[611px] ">
         <p
    className="font-plusjakarta-sans text-[20px] text-[#969696]"
   
  >
   Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
<br/>

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
  </p>

      </div>

      {/* Right-side gradient rectangle */}
<div
  className="absolute w-[8px] h-[64px] rounded-[8px] top-[111px] right-[13px] bg-gradient-to-tr from-[#888989] to-[#4A4E54]"
></div>
   <img
   src={Frame}
   className="absolute top-[20px] left-[12px] w-auto h-auto"
   />
    </div>
  );
};

export default TabWidget;


