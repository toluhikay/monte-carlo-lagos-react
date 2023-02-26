import React from "react";
import Logo from "../assets/images/White.png";
import { commonStyle } from "../common/commonStyles";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  const socials = [
    { id: 1, icon: <FaFacebook />, link: "https://www.facebook.com/adozillion.homes/" },
    { id: 2, icon: <AiFillTwitterCircle />, link: "https://twitter.com/adozillionhomes?s=11&t=mRp2JEH-MyVUm5FNZ5GteQ" },
    { id: 3, icon: <AiFillInstagram />, link: "https://www.instagram.com/accounts/login/?next=%2Fadozillionhomes%2F&source=omni_redirect" },
    { id: 4, icon: <AiFillYoutube />, link: "https://www.youtube.com/channel/UCJYGhEi8myUaKpYCrx9KS9Q" },
  ];
  const contact = [
    { icon: <FiPhoneCall />, text: "+2349155170650" },
    { icon: <FiPhoneCall />, text: "+2347055997439" },
    { icon: <FaTelegram />, text: "sales@adozillionhomesng.com" },
  ];
  const date = new Date().getFullYear();
  return (
    <footer className={`bg-black/90 ${commonStyle} text-white`}>
      <div className="my-16 flex lg:flex-row flex-col justify-between">
        <div className="ml:mb-0 mb-12">
          <img src={Logo} className="sm:w-[250px] w-[150px] mb-5" alt="" />
          <div className="flex mb-4">
            {socials.map((item, index) => {
              return (
                <a href={item.link} target="_blank" rel="noreferrer" key={index} className="text-white hover:text-red-800 ml-2 sm:text-4xl text-2xl">
                  {item.icon}
                </a>
              );
            })}
          </div>
        </div>
        <div className="ml:mb-0 mb-12">
          <p className="mb-3 font-bold">Contact Info</p>
          <div>
            {contact.map((item, index) => {
              return (
                <p key={index} className="flex items-center mb-2 text-white/70">
                  <span className="sm:text-xl text-sm mr-4">{item.icon}</span>
                  <span className="sm:text-xl text-sm">{item.text}</span>
                </p>
              );
            })}
          </div>
        </div>
        <div className="ml:mb-0 mb-12">
          <p className="mb-3 font-bold">Let's stay in touch</p>
          <form className="flex items-center mb-5">
            <input type="email" className="p-2 sm:text-base text-black text-xs outline-none" required placeholder="enter your email" />
            <button className="bg-red-800 sm:text-base text-xs p-2" type="submit">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-white/50">Keep up to date with our latest news and special offers.</p>
        </div>
      </div>
      <div className="w-full text-center p-3 border-t ">
        <p className="text-white/50 text-xs">copyrights © {date} Adozillion Homes and Realty Ltd- All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
