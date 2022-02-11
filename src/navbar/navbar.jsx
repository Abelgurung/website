import React, { Component, useState } from 'react';
import "./navbar.css";
import bayclogo from "../image/bayc-logo.png";
import Iconlink from "../extra/likns";
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = ({goLanding2}) => {
  const links = [
    {id:1,name:"MINT",link:"#mint"},
    {id:2,name:"ROADMAP",link:"#roadmap"},
    {id:3,name:"TEAM",link:"#team"},
    {id:4,name:"OWNERSHIP"},
  ];
  const [pages, updatepage] = useState([
    {
      id:1,
      display:"none"
    }
  ])
  const ClickMenu = (cm) => {
    console.log(cm,pages[0].display);
    var pagex;
    if(pages[0].display == "displayyes"){
      pagex = [
        {
          id:1,
          display:"none"
        }
      ]
      updatepage(pagex);
    }
    else if(pages[0].display == "none"){
      pagex = [
        {
          id:1,
          display:"displayyes"
        }
      ]
      updatepage(pagex);
    }
  }
  return (
    
    <div className='navboxx flex fdc borderx'>
      <div className="navboxx1  flex jcsb border">
        <div className="navlogo borderx">
          <img src={bayclogo} alt="" className="navlogo" onClick={() => {goLanding2("go")}}/>
        </div>
        <div className="navpagelink flex borderx">
          <div className="linkbox flex borderx">
            {
              links.map((l)=>(
                <a href={l.link} key={l.id} className="alink borderx">{l.name}</a>
              ))
            }
          </div>
          <div className="iconlinkbox flex borderx">
            <Iconlink/>
          </div>
        </div>
        <div className="responsivenav borderx flex aic none">
          <MenuIcon fontSize="large" onClick={() => {ClickMenu("mennu")}}/>
        </div>
        {}
      </div>
      <div className={"navboxx2 border flex fdc "+pages[0].display}>
        {
          links.map((l)=>(
            <a href={l.link} key={l.id} className="alinkres border">{l.name}</a>
          ))
        }
      </div>
    </div>
    );
}
export default Navbar;