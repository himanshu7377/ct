import React, { useState } from 'react';
import { Mountain1, Mountain2 } from "../tabs"; // Import Mountain components
import './style.css'; // Import CSS file for styles

const SecondPage = () => {
  const [activeTab, setActiveTab] = useState('mountain1'); // State to track active tab

  // Function to set active tab
  const setActive = (tab) => {
    setActiveTab(tab);
    console.log(tab);
  };

  return (
    <div id="team" className="group-2">
      <div className="text-8">
        <div className="wrapper">
          <p className="climb">CLIMB</p>
          <p className="text-9">02.</p>
        </div>
        <p className="text-10">Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.</p>
      </div>
      <div className="tabs">
        <div className="l-constrained-2">
          <button
            className={activeTab === 'mountain1' ? 'text-11 active' : 'text-11'}
            onClick={() => setActive('mountain1')}
          >
            <a href="#">MOUNTAIN&nbsp;1</a>
          </button>
          <button
            className={activeTab === 'mountain2' ? 'text-11 active' : 'text-11'}
            onClick={() => setActive('mountain2')}
          >
            <a href="#">MOUNTAIN&nbsp;2</a>
          </button>
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 'mountain1' ? <Mountain1 /> : <Mountain2 />}
      </div>
    </div>
  );
};

export default SecondPage;
