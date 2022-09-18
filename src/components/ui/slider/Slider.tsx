import style from "./Slider.module.sass";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from "../../cards/sliderCard/SliderCard";

const Slider = () => {
  return (
    <div>
      <div className={style.slider}>
        <div className={style.navigation}>
          <div className="swiper-button-prev-u"></div>
          <div className="swiper-button-next-u"></div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={true}
          navigation={{
            nextEl: ".swiper-button-next-u",
            prevEl: ".swiper-button-prev-u",
          }}
        >
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
