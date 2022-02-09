import React, { Component } from 'react';
import "./navbar.css";
import bayclogo from "../image/bayc-logo.png";
import Iconlink from "../extra/likns";
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = ({goLanding2}) => {
  const links = [
    {id:1,name:"BUY AN APE"},
    {id:2,name:"ROADMAP"},
    {id:3,name:"TEAM"},
    {id:4,name:"GALLERY"},
    {id:5,name:"PROVENANCE"},
    {id:6,name:"MEMBERS"}
  ];
  return (
    <div className='navboxx flex jcsb borderx'>
      <div className="navlogo borderx">
        <img src={bayclogo} alt="" className="navlogo" onClick={() => {goLanding2("go")}}/>
      </div>
      <div className="navpagelink flex borderx">
        <div className="linkbox flex borderx">
          {
            links.map((l)=>(
              <a href="#" key={l.id} className="alink borderx">{l.name}</a>
            ))
          }
        </div>
        <div className="iconlinkbox flex borderx">
          <Iconlink/>
        </div>
      </div>
      <div className="responsivenav borderx flex aic none">
        <MenuIcon fontSize="large"/>
      </div>
    </div>
    );
}
export default Navbar;