import React, { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import MonteCarloLogo from "../assets/images/White.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { commonStyle } from "../common/commonStyles";

const Header = () => {
  const Links = [
    { id: 1, link: "home", url: "https://adozillionhomesng.com/#start-booking-calendar" },
    { id: 2, link: "about", url: "https://adozillionhomesng.com/about/#start-booking-calendar" },
    { id: 3, link: "blog", to: "/blog" },
    { id: 4, link: "+2349155170650", url: "tel:+2349155170650" },
  ];
  const [openNav, setOpenNav] = useState(false);

  return (
    <Fragment>
      <header className={`fixed top-0 left-0 flex md:flex-row flex-col w-full  justify-between items-center ${openNav ? "backdrop-blur-sm  bg-[#c31516]/90" : "backdrop-blur-sm bg-black/50"} ${commonStyle} text-white`}>
        <div className="flex justify-between md:w-auto w-full items-center">
          <Link to={"/"} onClick={() => setOpenNav(false)}>
            <img src={MonteCarloLogo} className="lg:w-[250px] md:w-[200px] w-[150px]" alt="" />
          </Link>
          <div className="md:hidden" onClick={() => setOpenNav(!openNav)}>
            <GiHamburgerMenu className="text-3xl" />
          </div>
        </div>
        <nav className={`lg:w-2/3 md:w-1/2 transition-all md:h-auto overflow-hidden w-full ${openNav ? "h-[40vh] py-8" : "h-0"} md:py-0`}>
          <ul className="flex md:flex-row flex-col h-full w-full justify-between">
            {Links.map((item) => {
              return (
                <li key={item.id}>
                  {item.url ? (
                    <a target={item.link === "+2349155170650" ? "" : "_blank"} rel="noreferrer" className="capitalize hover:text-[#e9a92e] text-base" href={item.url} onClick={() => setOpenNav(!openNav)}>
                      {item.link}
                    </a>
                  ) : (
                    <Link className="capitalize cursor-pointer hover:text-[#e9a92e] text-base" to={item.to} onClick={() => setOpenNav(!openNav)}>
                      <p className="cursor-pointer">{item.link}</p>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Header;
