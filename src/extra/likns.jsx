import React, { Component } from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
class Links extends Component {
  state = {  } 
  componentDidMount () {
    var icons = document.querySelectorAll(".icons");
    icons[0].addEventListener("click",()=>{
      window.open("https://www.youtube.com/", "_blank");
    });
    icons[1].addEventListener("click",()=>{
      window.open("https://www.instagram.com/", "_blank");
    });
    icons[2].addEventListener("click",()=>{
      window.open("https://twitter.com/?lang=en", "_blank");
    });
    icons[3].addEventListener("click",()=>{
      window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
    });
  }
  render() { 
    return (
    <div>
      <YouTubeIcon fontSize="small" className='icons'/>
      <InstagramIcon fontSize="small" className='icons'/>
      <TwitterIcon fontSize="small" className='icons'/>
      <MailIcon fontSize="small" className='icons'/>
    </div>
    );
  }
}
export default Links;