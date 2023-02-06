import React, { Fragment, useState } from "react";
import MonteCarloLogo from "../assets/images/White.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { commonStyle } from "../common/commonStyles";

const Header = () => {
  const Links = [
    { id: 1, link: "home", url: "" },
    { id: 2, link: "about", url: "" },
    { id: 3, link: "blog", url: "" },
    { id: 4, link: "+2349155170650", url: "" },
  ];
  const [openNav, setOpenNav] = useState(false);

  return (
    <Fragment>
      <header className={`fixed top-0 left-0 flex md:flex-row flex-col w-full justify-between items-center ${openNav ? "bg-[#c31516]" : ""} ${commonStyle} text-white`}>
        <div className="flex justify-between md:w-auto w-full items-center">
          <img src={MonteCarloLogo} className="lg:w-[250px] md:w-[200px] w-[150px]" alt="" />
          <div className="md:hidden" onClick={() => setOpenNav(!openNav)}>
            <GiHamburgerMenu className="text-3xl" />
          </div>
        </div>
        <nav className={`lg:w-2/3 md:w-1/2 transition-all md:h-auto overflow-hidden w-full ${openNav ? "h-[40vh] py-8" : "h-0"} md:py-0`}>
          <ul className="flex md:flex-row flex-col h-full w-full justify-between">
            {Links.map((item) => {
              return (
                <li key={item.id}>
                  <a target="_blank" rel="noreferrer" className="capitalize hover:text-[#e9a92e] text-base" href={item.url}>
                    {item.link}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;