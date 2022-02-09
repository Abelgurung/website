import React, { useState } from 'react';
import './allstyle.css';
import Landing from "./landing/Landing";
import Navbar from "./navbar/navbar";
import Home from "./home/home";
const App1 = () => {
  const [pages, updatepage] = useState([
    {
      id:1,
      display:"displayno"
    },
    {
      id:2,
      display:"displayyes"
    }
  ])
  const goHome = (h) => {
    console.log(h);
    var pagesX = [
      {
        id:1,
        display:"displayyes"
      },
      {
        id:2,
        display:"displayno"
      }
    ]
    updatepage(pagesX);
    window.scrollTo(0, 0);
  }
  const goLanding = (l) => {
    console.log(l);
    var pagesX = [
      {
        id:1,
        display:"displayno"
      },
      {
        id:2,
        display:"displayyes"
      }
    ]
    updatepage(pagesX);
    window.scrollTo(0, 0);
  }
  
  const app = "apple";
  return (
    <div>
      <div className={pages[0].display}>
        <Home goLanding1 ={goLanding}/>
      </div>
      <div className={pages[1].display}>
        <Landing goHome1 ={goHome}/>  
      </div>
    </div>
  );
}
export default App1;