// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden z-0 xl:flex xl:max-w-none">
      <Image
        src={"/avatar3.png"}
        width={737}
        height={678}
        alt=""
        className="translate-z-0 h-full w-full"
      />
    </div>
  );
};

export default Avatar;
