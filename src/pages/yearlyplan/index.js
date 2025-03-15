import YearlyCalItems from "../../components/yearlycalender/yearlycalImages";
import Image from "next/image";
import stylesMini from "../../styles/Yearlycal.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Yearlycalender = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full"
      >
        {YearlyCalItems.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.url}
              alt={item.alt || "Yearly calendar image"}
              width={0} 
            height={0} 
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
            className={stylesMini.calimage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Yearlycalender;