import React, { Component } from 'react';
import "./home.css";
import Navbar from "../navbar/navbar";
import Homeimg from "../image/bayc-home.jpg";
import Footer from "../extra/footer";
import Ape1 from "../image/ape1.png";
import Ape2 from "../image/ape2.png";
import Ape3 from "../image/ape3.png";
import Ape4 from "../image/ape4.png";
import Ape5 from "../image/ape5.png";
import Ape6 from "../image/ape6.png";
import Ape7 from "../image/ape7.png";
import Ape8 from "../image/ape8.png";
import Monkeygif from "../image/mystery-ape.webp";
import item1 from "../image/icon1.png";
import item2 from "../image/icon2.png";
import item3 from "../image/icon3.png";
import item4 from "../image/icon4.png";
import item5 from "../image/icon5.png";
import toilet from "../image/toilet.png";
import shirt from "../image/shirt.png";
const Home = ({goLanding1}) => {
  const hr2apes = [
    {id:1,name:Ape1},
    {id:2,name:Ape2},
    {id:3,name:Ape3},
    {id:4,name:Ape4}
  ];
  const hr12apes = [
    {id:1,name:Ape5},
    {id:2,name:Ape6},
    {id:3,name:Ape7},
    {id:4,name:Ape8}
  ];
  const hr7itenms = [
    {id:1,a:"a",b:"b",name:item1,def:"10,000 Provably-rare Bored Ape tokens"},
    {id:2,a:"a",b:"b",name:item2,def:"Fair Launch, fair distribution: All apes cost 0.08 ETH"},
    {id:3,a:"a",b:"b",name:item3,def:"Ownership and commercial usage rights given to the consumer over their NFT"},
    {id:4,a:"a",b:"b",name:item4,def:"The Bathroom: A member's-only graffiti board"},
    {id:5,a:"a",b:"b",name:item5,def:"Gain additional benefits through roadmap activations"}
  ];
  const hr10texts = [
    {id:1,strike:"striketrue",a:"a",b:"b",c:"c",num:10,def:"We pay back our moms."},
    {id:2,strike:"striketrue",a:"a",b:"b",c:"c",num:20,def:"We release the Caged Apes. 5 Caged Apes (tokens held back from the sale) are airdropped to random Apeholders."},
    {id:3,strike:"striketrue",a:"a",b:"b",c:"c",num:40,def:"BAYC gets its own YouTube channel, BAYC LoFi Radio - Beats to Ape into Shitcoins To."},
    {id:4,strike:"striketrue",a:"a",b:"b",c:"c",num:60,def:"Member-Exclusive BAYC Merch Store gets unlocked, featuring Limited Edition tees, hoodies, and other goodies."},
    {id:5,strike:"strikefalse",a:"a",b:"b",c:"c",num:80,def:"The clubhouse image becomes interactive and the Mysterious Note becomes legible, beginning a treasure hunt. The first to solve the mystery will be rewarded 5 ETH and a Bored Ape."},
    {id:6,strike:"striketrue",a:"a",b:"b",c:"c",num:90,def:"The Bored Ape liquidity pool is initiated."},
    {id:7,strike:"striketrue",a:"a",b:"b",c:"c",num:100,def:"The Mutant Ape (NFT Breeding) Arcade Machine gets ﬁxed. And we cook up new ways to ape with our friends."}
  ];
  return (
    <div className='homepagemain flex fdc'>
      <Navbar goLanding2={goLanding1}/>
      <div className="hroom1 border flex">
        <img src={Homeimg} alt="" className="homeimg borderx w100"/>
      </div>
      <div className="hroom2 borderx flex jcsb">
        <div className="hr2box1 borderx">
          <div className="hr2txt1 borderx">
            WELCOME TO THE <br className='h2br1'/>
            BORED APE YACHT CLUB
          </div>
          <div className="hr2txt2 borderx">
            BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. 
            Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, 
            the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can 
            be unlocked by the community through roadmap activation.
          </div>
        </div>
        <div className="hr2box2 borderx"></div>
        <div className="hr2box3 flex borderx">
          {
            hr2apes.map((a)=>(
              <img key={a.id} src={a.name} alt="" className="hr2apeimg borderx" />
            ))
          }
        </div>
      </div>
      <div className="hroom3 border flex jcsb">
        <div className="hr3box1 border">
          <div className="hr3txt1 border">
          FAIR DISTRIBUTION
          </div>
          <div className="hr3txt2 border">
            (BONDING CURVES ARE A PONZI)
          </div>
          <div className="hr3txt3 border">
            There are no bonding curves here. Buying a Bored Ape costs 0.08 ETH. 
            There are no price tiers; BAYC membership costs the same for everyone.
          </div>
        </div>
        <div className="hr3box2 borderx"></div>
        <div className="hr3box3 borderx flex fdc jcfe">
          <div className="hr3txt4 borderx">
            Note: Thirty apes are being withheld from the sale. These will be used for giveaways, puzzle rewards—and for the creators' BAYC memberships.
          </div>
        </div>
      </div>
      <div className="hroom4 border flex">
        <div className="ihroom4 flex jcsa border w100">
          <div className="hr4box1 border flex jcc aic">
            BUY AN APE
          </div>
          <div className="hr4box2 border flex jcc aic">
            The initial sale has sold out. To get your<br className='hr4br1'/>
            Bored Ape, check out the collection on<br className='hr4br1'/>
            OpenSea.
          </div>
          <div className="hr4box3 border">
            <div className="buyappbtn border">
              BUY AN APE ON<br className='hr4br2'/> 
              OPENSEA
            </div>
          </div>
        </div>
        
      </div>
      <div className="hroom5 border flex">
        <span className="hr5line"></span>
      </div>
      <div className="hroom6 border flex jcsb">
        <div className="hr6box1 border flex fdc">
          <div className="hr6txt1 border">
            THE SPECS
          </div>
          <div className="hr6txt2 border">
            Each Bored Ape is unique and programmatically generated from over 170 possible traits,
            including expression, headwear, clothing, and more. All apes are dope, but some are rarer than others.
            <br className="hr6br1"/>
            <br className="hr6br1"/>
            The apes are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. 
            (<a href="#" className="hr6txt2link0">See Record and Proof.</a>) Purchasing an ape costs 0.08 ETH.
            <br className="hr6br1"/>
            <br className="hr6br1"/>
            To access members-only areas such as <a href="#" className="hr6txt2link0">THE BATHROOM</a>, 
            Apeholders will need to be signed into their Metamask Wallet.
          </div>
        </div>
        <div className="hr6box2 border"></div>
        <div className="hr6box3 border">
          <img src={Monkeygif} alt="" className="monkeygifbox border w100" />
        </div>
      </div>
      <div className="hroom5_1 hroom5 border flex">
        <span className="hr5line_1 hr5line"></span>
      </div>
      <div className="hroom7 border flex fdc">
        <div className="hr7box1 border">
          WELCOME TO THE CLUB
        </div>
        <div className="hr7box2 border">
          <div className="ihr7box2 border">
            When you buy a Bored Ape, you’re not simply buying an avatar or a provably-rare piece of art. You are 
            gaining membership access to a club whose benefits and offerings will increase over time. Your 
            Bored Ape can serve as your digital identity, and open digital doors for you.
          </div>
        </div>
        <div className="hr7box3 border flex jcsb">
          {
            hr7itenms.map((i)=>(
              <div key={i.a+i.id} className="hr7itmbox border">
                <div key={i.b+i.id} className="hr7itmimgbox border flex jcc">
                  <img key={i.a+i.b+i.id} src={i.name} alt="" className="hr7itmpic1 border"/>
                </div>
                <div key={i.id} className="hr7b3txt0 border">
                  {i.def}
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="hroom5_2 hroom5 border flex">
        <span className="hr5line_2 hr5line"></span>
      </div>
      <div className="hroom8 border flex jcsb">
        <div className="hr8box1 flex fdc border">
          <div className="hr8b1txt1">
            THE BATHROOM
          </div>
          <div className="hr8b1txt2">
            The BAYC Bathroom will become operational once the presale period is over. 
            It contains a canvas accessible only to wallets containing at least one ape. 
            Like any good dive bar bathroom, this is the place to draw, scrawl, or write expletives.
            <br/>
            <br/>
            Each ape-holder will be able to paint a pixel on the bathroom wall every fifteen minutes. 
            Think of it as a collaborative art experiment for the cryptosphere. 
            A members-only canvas for the discerning minds of crypto twitter.
            <br/>
            <br/>
            We're pretty sure it's going to be full of dicks.
          </div>
        </div>
        <div className="hr8box2 border flex jcc">
          <img src={toilet} alt="" className="toiletimg border" />
        </div>
      </div>
      <div className="hroom5_3 hroom5 border flex">
        <span className="hr5line_3 hr5line"></span>
      </div>
      <div className="hroom9 border flex fdc">
        <div className="hr9txt1 border">
          ROADMAP ACTIVATIONS
        </div>
        <div className="hr9txt2 border">
          <div className="ihr9txt2 border">
            We’re in this for the long haul.
            <br/>
            <br/>
            We’ve set up some goalposts for ourselves. Once we hit a target sell through percentage, we will
            begin to work on realizing the stated goal.
          </div>
        </div>
      </div>
      <div className="hroom10 border flex jcsb">
        <div className="hr10box1 border">
        {
          hr10texts.map((t)=>(
            <div key={t.a+t.id} className="hr10txtbox border flex">
              <div key={t.b+t.id} className="hr10txt1 border flex jcc aic">{t.num}%</div>
              <div key={t.c+t.id} className={"hr10txt2 "+t.strike}>
                {t.def}
              </div>
            </div>
          ))
        }
        </div>
        <div className="hr10box2 border">
          <div className="shirtimgbox border rel">
            <img src={shirt} alt="" className="shirtimg border abs" />
          </div>
        </div>
      </div>
      <div className="hroom5_4 hroom5 border flex">
        <span className="hr5line_4 hr5line"></span>
      </div>
      <div className="hroom11 border flex jcsb">
        <div className="hr11box1 border">
          <div className="hr11txt1 border">
            COMMUNITY TOOLS
          </div>
          <div className="hr11txt2 border">
            Here are some helpful tools created by the Bored Ape Yacht Club community. 
            Please note that these are unofficial in nature. Every assignment of an ape's
            overall value or rarity is inherently subjective.
          </div>
        </div>
        <div className="hr11box2 flex fdc border">
          <a href="#" className="h11btnbox1 h11btnbox0">
            NFTEXP.IO
          </a>
          <a href="#" className="h11btnbox2 h11btnbox0">
            RARITY.TOOLS
          </a>
        </div>
      </div>
      <div className="hroom5_5 hroom5 border flex">
        <span className="hr5line_5 hr5line"></span>
      </div>
      <div className="hroom12 border flex">
        <div className="hr12box1 border flex fdc">
          <div className="hr12txt1">
            THE TEAM
          </div>
          <div className="hr12txt2">
            BAYC was created by four friends who set out to make some dope apes, 
            test our skills, and try to build something (ridiculous).
            <br/><br/>
            <span className="hr12txt2color">GARGAMEL. </span>
            STARCRAFT OBSESSED. EATS SMURFS.
            <br/><br/>
            <span className="hr12txt2color">GORDON GONER. </span>
            REFORMED LEVERAGE ADDICT.
            <br/><br/>
            <span className="hr12txt2color">EMPEROR TOMATO KETCHUP. </span>
            SPENT ALL THEIR MONEY ON FIRST PRESSES AND PET-NAT.
            <br/><br/>
            <span className="hr12txt2color">NO SASS. </span>
            HERE FOR THE APES. NOT FOR THE SASS.
          </div>
        </div>
        <div className="hr12box2 border"></div>
        <div className="hr12box3 flex border">
          {
            hr12apes.map((a)=>(
              <img key={a.id} src={a.name} alt="" className="hr2apeimg borderx" />
            ))
          }
        </div>
      </div>
      <div className="hroom13 border flex jcc">
        <div className="hr13box1 border">
          VERIFIED SMART CONTRACT ADDRESS:&nbsp;
        </div>
        <a href="#" className='hr13link border'> 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D</a>
      </div>
      <div className="hroom5 hroom5_6 border flex">
        <span className="hr5line hr5line_6"></span>
      </div>
      <div className="hroom14 border flex">
        <Footer/>
      </div>
    </div>
    );
}
export default Home;