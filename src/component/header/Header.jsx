import React from "react";
import logo from '../../images/logo.png';
import mountain from '../../images/lamc.png';
import bgimg from '../../images/bg-image.jpg';
import layer from '../../images/layer_627.png';
import './headerStyle.css'; // Import CSS file for header styles

const Header = () => {
  return (
    <header class="hero">
        <div class="image">
          <div class="col">
            <div class="l-constrained-3">
              <div class="row-2 group">
                <img class="logo" src={logo} alt="" width="45" height="45"/>
                <div class="nav">
                  <a  href="#history"  class="text">01. history </a>
                  <a href="#team" class="text">02. team</a>
                 
                </div>
              </div>
              <img class="text-2" src={mountain} alt="LOSANGELES MOUNTAINS" width="594" height="230" title="LOSANGELES MOUNTAINS"/>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
