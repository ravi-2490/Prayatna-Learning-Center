import YearlyCalItems from "../../components/yearlycalender/yearlycalImages";
import Image from 'next/image';
import stylesMini from "../../styles/MiniGalley.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Yearlycalender = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      
      {YearlyCalItems.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Image
                  src={item.url}
                  alt="image"
                  className={stylesMini.image}
                  
                />
              </SwiperSlide>
            );
          })}
    </div>
  );
};

export default Yearlycalender;