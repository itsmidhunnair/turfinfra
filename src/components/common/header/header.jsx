import TopHeader from "./topHeader";
import Logo from "../../../assets/images/logo.jpg";
import { useState } from "react";
import { HamburgerIcon } from "../../icons";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const { hash } = useLocation();

  const navLinks = [
    ["Home", "#home"],
    ["About Us", "#about-us"],
    ["Services", "#services"],
    ["Projects", "#projects"],
    ["Clients", "#clients"],
    ["Contact Us", "#contact-us"],
  ];

  return (
    <div className="sticky top-0 z-10">
      <TopHeader />
      <div
        className="px-16 bg-white
       text-primary flex justify-between items-center shadow-lg max-sm:flex-row-reverse max-sm:px-6 "
      >
        <div>
          <img src={Logo} alt="logo" className="w-24" />
        </div>
        <button
          onClick={() => setOpenNavbar(!openNavbar)}
          className="w-8 h-8 sm:hidden"
        >
          <HamburgerIcon />
        </button>
        <div
          className={`flex gap-8 text-lg transition-all duration-200 font-medium max-sm:absolute bg-white max-sm:left-0 max-sm:flex-col max-sm:top-12 max-sm:border-r-2 max-sm:-z-10 max-sm:pt-6 max-sm:drop-shadow-lg border-primary overflow-hidden max-sm:h-screen ${
            openNavbar ? "max-sm:w-52" : "max-sm:w-0"
          }`}
        >
          {navLinks.map(([text, link]) => (
            <a
              href={`${link}`}
              className={`hover:text-secondary cursor-pointer max-sm:ml-6 ${
                hash === link ? "text-secondary" : ""
              }`}
              key={link}
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
