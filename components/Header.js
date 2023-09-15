// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className=" bg-primary/30 pt-9 lg:pt-6 xl:pt-4 z-50 w-full flex items-center px-0 sm:px-16 xl:px-0 h-[90px]">
      <div className=" container mx-auto">
        <div className=" flex  lg:flex-row  justify-between items-center gap-y-0 h-[150px] py-0">
          {/* logo */}
          <Link className="z-50" href={'/'}>
            <Image src={"/logo-p.png"} width={220} height={48} alt="" priority={true} />
          </Link>

          {/* socials */}
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
