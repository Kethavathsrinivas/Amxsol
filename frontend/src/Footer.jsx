import React, { useState, useEffect } from 'react';
import SubContent from './SubContent';
import { FaYoutube, FaTwitter, FaWhatsapp, FaFacebook, FaLinkedin, FaVoicemail, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import bgimg from './video/background.mp4';

const Footer = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 1000);
  }, []);

  const [content] = useState([
    {
      title: "Company",
      subItems: ["About Us", "Careers", "Contact Us", "NewsRoom", "People"],
    },
    {
      title: "Solutions",
      subItems: ["AMX Business Solutions", "AMX IT Consulting", "AMX Talent Services", "AMX Digital", "AMX Security", "AMX MIT Services", "AMX BPO", "AMX Health Care", "AMX Reality"],
    },
    {
      title: "Programs",
      subItems: ["AMX Foundation", "AMX Academy", "AMX IT Business School"],
    },
    {
      title: "Support",
      subItems: ["Terms Of Use", "Privacy Policy", "Cookie Policy", "Site Map", "Legal", "PayNow"],
    },
  ]);

  return (
    <footer className='footer relative m-2 '>
      <video autoPlay loop muted className='background-video rounded-lg'>
        <source src={bgimg} type="video/mp4"/>
      </video>
      
      <div className='footer-content grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 m-10 pl-3'>
        {content.map((item, index) => (
          <SubContent key={index} title={item.title} subItems={item.subItems} />
        ))}
      </div>

      <div className='footer-content h-0.5 bg-green-100 m-10'></div>

      <div className='footer-icons flex justify-center space-x-5 py-2.5 mx-10 rounded-md'>
        {/* <div className={`content1 ${showContent ? 'slide-in1' : ''}`}><a href="#"><FaLinkedin /></a></div> */}
        {/* <div className={`content1 ${showContent ? 'slide-in1' : ''}`}><a href="#"><FaFacebook /></a></div> */}
        {/* <div className={`content1 ${showContent ? 'slide-in1' : ''}`}><a href="#"><FaTwitter /></a></div> */}
        {/* <div className={`content2 ${showContent ? 'slide-in1' : ''}`}><a href="#"><FaWhatsapp /></a></div> */}
        {/* <div className={`content2 ${showContent ? 'slide-in1' : ''}`}><a href="#"><FaYoutube /></a></div> */}
        {/* <div className={`content2 ${showContent ? 'slide-in1' : ''}`}><a href="#"><FaVoicemail /></a></div> */}

        {/* <div className="cardf">
            <div className="background"></div>
                    <div className="logo">
                        Socials
                      </div>

                <a href="#"><div className="box box1"><span className="icon">
                </span></div></a>

                <a href="##"><div className="box box2"> <span className="icon">
                </span></div></a>

                <a href="###"><div className="box box3"><span className="icon">
                </span></div></a>

                <a href="###"><div className="box box4"><span className="icon">
                </span></div></a>

                <a href="###"><div className="box box5"><span className="icon">
                </span></div></a>

                <a href="#"><div className="box box6"><span className="icon">
                <FaVoicemail  color="black"/>
                </span></div></a>

            </div>
        </div> */}

<div className="card_i flex">
  <a href="#" className="socialContainer containerOne">
  <FaLinkedin color="black"/>

  </a>
  
  <a href="#" class="socialContainer containerTwo">
  <FaFacebook color="black"/>

    </a>
    
  <a href="#" class="socialContainer containerThree">
  <FaTwitter color="black"/>

  </a>
  
  <a href="#" class="socialContainer containerFour">
  <FaWhatsapp  color="black"/>

  </a>

  <a href="#" class="socialContainer containerFive">
                     <FaYoutube  color="black"/>
  </a>

  <a href="#" class="socialContainer containerOne">
  <FaInstagram  color="black"/>

  </a>
</div>             



        </div>
      <div className="copyright-container  text-center py-3 text-sm text-black m-10 rounded-md shadow-xl ring-1">
        <p className='font-mono font-extrabold'>info@amxsol.com  | www.amxsol.com | +1(917)396-7061 | +91-8179382764 | +91-4035759443</p><br/>
         COPYRIGHT &copy; 2022 - 2024 ,AMXSOL ALL RIGHTS RESERVED PRIVACY POLICY. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
