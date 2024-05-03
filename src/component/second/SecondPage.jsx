import React, { useState } from "react";
import "./style.css"; // Import CSS file for styles
import { Mountain1, Mountain2 } from "../tabs";

const SecondPage = () => {
  const [activeTab, setActiveTab] = useState("mountain1"); // State to track active tab

  // Function to set active tab
  const changeTab = (tab) => {
    setActiveTab(tab);
    console.log(tab);
  };

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
        </div>
      </div>

      <div className="tab-content">
        <div className={`tab-${activeTab}`}>
          
          
            {activeTab === "mountain1" ? <Mountain1 /> : <Mountain2 />}
         
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
