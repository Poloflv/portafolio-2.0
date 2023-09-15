import Link from "next/link";

// icons
import {
  RiMailLine,
  RiGithubFill,
  RiLinkedinBoxLine,
  RiFileDownloadFill,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiDriveLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 z-50 text-lg ">
      <Link href={"/contact"}  className="hover:text-accent transition-all duration-300 ">
        <RiMailLine size={'1.8rem'} className="hover:scale-125  transition-all duration-300" />
      </Link>
      <Link href={"https://github.com/Poloflv"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiGithubFill size={'1.8rem'} className="hover:scale-125 transition-all duration-300" />
      </Link>
      <Link href={"https://www.linkedin.com/in/kevin-yesid-polo-benavides-859a69139/"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinBoxLine size={'1.8rem'} className="hover:scale-125 transition-all duration-300"/>
      </Link>
      <Link href={"/kevinpolocv.pdf"} download="kevinpolocv.pdf" target="_blank" className="hover:text-accent transition-all duration-300">
        <RiFileDownloadFill size={'1.8rem'} className="hover:scale-125 transition-all duration-300"/>
      </Link>



    </div>
  );
};

export default Socials;
