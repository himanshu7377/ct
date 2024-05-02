import React from 'react';
import './style.css'; // Import CSS file for styles
import logo from '../../images/logo.png';
import mountain from '../../images/losangeles_mountains_2.png';
import reactangle from '../../images/rectangle_20.jpg';
const FirstPage = () => {
  return (
    <div id="history" className="main-content-wrapper">
      <div className="sticky-nav">
            <div className="logo-2 group">
            <img className="vector-smart-object" src={logo} alt="" width="45" height="45" />
            <img className="text-3" src={mountain} alt="LOSANGELES MOUNTAINS" width="110" height="43" title="LOSANGELES MOUNTAINS" />
            </div>
            <div className="nav-2 group">
            <a href="#history" className="text-4">01. history &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
            <a href="#team" className="text-4">02. team</a>
            
            </div>
        </div>
      <div className="bg">
        <div className="text-5">
          <div className="wrapper-2">
            <p className="history">HISTORY</p>
            <p className="text-6">01.</p>
          </div>
          <p className="text-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.</p>
        </div>
      </div>
      <div className="bg-2">
        {/* Add React Carousel component here */}
      </div>
    </div>
  );
};

export default FirstPage;
