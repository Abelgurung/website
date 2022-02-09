import React, { Component } from 'react';
import "./landing.css";
import Enterbtn from './enterbtn';
import bayclogo from "../image/bayc-logo.png";
import landinggif from "../image/landing-gif.gif";
import Links from '../extra/likns';
import Footer from "../extra/footer";
const Landing = ({goHome1}) => {
  return (
    <div className="mainlandingpage flex fdc">
      <div className="room1 borderx flex rel jcsb">
        <div className="empty borderx"></div>
        <div className="landing-nav flex borderx">
          <img src={bayclogo} alt="" className="landing-logo borderx" />
        </div>
        <div className="landing-link borderx">
          <div className="icon-box borderx flex">
            <Links/>
          </div>
        </div>
      </div>
      <div className="room2 borderx flex rel">
        <img src={landinggif} alt="" className="landing-gif borderx" />
        <div className="r2box1 borderx abs flex">
          <Enterbtn goHome2={goHome1}/>
        </div>
      </div>
      <div className="r2box2 borderx flex">
        <Enterbtn goHome2={goHome1}/>
      </div>
      <div className="room3 borderx">
        <div className="r3text1 borderx">
        A limited NFT collection where the token itself doubles as your membership to a swamp<br className="br1"/>
        club for apes. The club is open! Ape in with us.
        </div>
      </div>
      <div className="room4 borderx rel">
        <span className="r4span abs borderx"></span>
      </div>
      <Footer/>
    </div>
  );
}
export default Landing;