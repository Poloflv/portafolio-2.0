// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

//impor required modules
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [

  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "For the design I rely on tools like Tailwind, css, Figma, and sometimes js for complex animations",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "I specialize in JavaScript, React, Node JS, Bubble... to develop solutions to various problems.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "I try to ensure that what I write on the pages is understandable and with good writing, and be a good proyect.",
  },
  {
    icon: <RxRocket />,
    title: "Junior Developer",
    description: "I am committed to delivering a quality product following certain metrics, in order to deliver the best of me.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        340: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode,Pagination]}
      className="h-[260px] sm:h-[340px] "
    >
      {
        serviceData.map((item,index)=> {
          return (
            <SwiperSlide key={index}>
              <div className="bg-[rgba(65,47,123,0.15)] h-max  rounded-lg px-6 py-8 gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                {/* icon */}
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
                {/* title & des c */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[400px] line-clamp-2 sm:line-clamp-3 xl:line-clamp-none leading-normal">{item.description}</p>
                </div>
                {/* arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
