import TopHeader from "./topHeader";
import Logo from "../../../assets/images/logo.jpg";

const Header = () => {
  const navLinks = [
    "Home",
    "About Us",
    "Services",
    "Projects",
    "Clients",
    "Contact Us",
  ];

  return (
    <div className="sticky top-0 z-10">
      <TopHeader />
      <div
        className="px-16 bg-white
       text-primary flex justify-between items-center shadow-lg"
      >
        <div>
          <img src={Logo} alt="logo" className="w-24" />
        </div>
        <div className="flex gap-8 text-lg font-medium">
          {navLinks.map((link) => (
            <div className="hover:text-secondary cursor-pointer" key={link}>
              {link}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
