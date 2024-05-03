import React, { useState, useEffect } from "react";
import "./style.css"; // Import CSS file for styles
import { Mountain1, Mountain2 } from "../tabs";
import AccordionTabs from "../accordian/Accordian";

const SecondPage = () => {
  const [activeTab, setActiveTab] = useState("mountain1"); // State to track active tab
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view

  // Function to set active tab
  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  // Check if screen width is less than or equal to 768px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="team" className="group-2">
      <div className="text-8 group">
        <div className="wrapper">
          <h2 className="climb">CLIMB</h2>
          <h1 className="text-9">02.</h1>
        </div>
        <p className="text-10">
          Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida
          quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim
          tortor nec congue.
        </p>
      </div>
      <div className="tabs">
        <div className="l-constrained-2">
          {isMobile ? null
           
           : (
            <div className="tab-button">
              <button
                id="mountain1"
                className={`tab-button-item ${
                  activeTab === "mountain1" ? "active" : ""
                }`}
                onClick={() => changeTab("mountain1")}
              >
                MOUNTAIN&nbsp;1
              </button>
              <button
                id="mountain2"
                className={`tab-button-item ${
                  activeTab === "mountain2" ? "active" : ""
                }`}
                onClick={() => changeTab("mountain2")}
              >
                MOUNTAIN&nbsp;2
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="tab-content">
        {isMobile ? (
         <div>
          <AccordionTabs activeTab={activeTab} changeTab={changeTab} />
         </div>
        ) : (
          <div className={`tab-${activeTab}`}>
          {activeTab === "mountain1" ? <Mountain1 /> : <Mountain2 />}
        </div>
        )}
      </div>
    </div>
  );
};

export default SecondPage;
