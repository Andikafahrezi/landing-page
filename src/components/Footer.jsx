import img from "../assets/images/logos.png";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
} from "flowbite-react";
import {
  BsInstagram,
} from "react-icons/bs";
function Component() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="https://flowbite.com"
              src={img}
              alt="Addust Logo"
              name="TK Fajar Nusantara"
            />
            
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="https://github.com/Andikafahrezi" by="Addust™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="https://www.instagram.com/tkfajar.nusantara/" icon={BsInstagram} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Component;
