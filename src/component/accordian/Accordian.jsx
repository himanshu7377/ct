import React, { useState } from 'react';
import './style.css'; // Import CSS file for styles

const AccordionTabs = ({ activeTab, changeTab }) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false); // Close the other accordion
  };

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false); // Close the other accordion
  };

  return (
    <div className="accordion-tabs">
      <button className={`accordion ${isOpen1 ? 'active' : ''}`} onClick={toggleAccordion1}>
        MOUNTAIN 1
      </button>
      {isOpen1 && (
        <div className="accordion-content">
          <div className="content-1">
            <p className="schedule">SCHEDULE</p>
            <p className="text-13">
              25 Nov 2016&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vestibulum viverra<br />28 Nov 2016&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vestibulum viverra<br />
            </p>
          </div>
        </div>
      )}
      <button className={`accordion ${isOpen2 ? 'active' : ''}`} onClick={toggleAccordion2}>
        MOUNTAIN 2
      </button>
      {isOpen2 && (
        <div className="accordion-content">
          <div className="content-2">
            <p className="schedule">SCHEDULE</p>
            <p className="text-13">
              13 Dec 2016&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vestibulum viverra<br />28 Dec 2016&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vestibulum viverra<br />
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionTabs;
