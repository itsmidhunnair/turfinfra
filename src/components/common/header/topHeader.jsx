import { FacebookIcon, InstagramIcon, MailIcon } from "../../icons";

const TopHeader = () => {
  return (
    <div className="bg-gray-800 flex items-center justify-between text-white w-full py-2 px-16 max-sm:hidden">
      <div className="flex gap-4">
        <div>
          <div className="inline-block w-5">
            <MailIcon />
          </div>
          <span className="pl-2">turfinfra@gmail.com</span>
        </div>
        <div>
          <div className="inline-block w-5">
            <MailIcon />
          </div>
          <span className="pl-2">+91 90996 69896</span>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="inline-block w-3">
          <FacebookIcon />
        </div>
        <div className="inline-block w-5">
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
