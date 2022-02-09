import React, { Component } from 'react';
import "./footer.css";
import baycfooter from "../image/bayc-footer.png";
import Links from "./likns";
class Footer extends Component {
  state = {  } 
  render() { 
    return (
      <div className='flex fdc border w100'>
      <div className="room5 border rel flex jcsb">
        <div className="r5box1 flex fdc borderx">
          <div className="emailtitlew borderx">GET ON THE LIST</div>
          <div className="emailbox borderx flex">
            {/* 256 36 */}
            <input type="text" className="enteremail" placeholder="Email Address"/>
            <div className="emailsendbtn flex aic jcc">→</div>
          </div>
        </div>
        <div className="r5box2 borderx flex">
          <div className="logolinebox1 borderx rel flex aic">
            <span className="logoline1 logoline0 abs"></span>
          </div>
          <img src={baycfooter} alt="" className="footerlogo borderx" />
          <div className="logolinebox2 borderx rel flex aic">
            <span className="logoline2 logoline0 abs"></span>
          </div>
        </div>
        <div className="r5box3 borderx flex fdc jcc">
          <div className="r5bdA flex jcc borderx">
            <Links/>
          </div>
          <div className="r5bdB r5bd0 borderx">© 2021 Yuga Labs LLC</div>
          <a href ="#" className="r5bdC r5bd0 borderx">BAYC Terms & Conditions</a>
          <a href ="#" className="r5bdD r5bd0 borderx">MAYC Terms & Conditions</a>
        </div>
      </div>
      <div className="room6"></div>
      </div>
    );
  }
}
export default Footer;