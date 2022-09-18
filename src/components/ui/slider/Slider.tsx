import next from "../../../assets/next.svg";
import prev from "../../../assets/prev.svg";
import { cardInfo } from "../../../mocks/sliderCard.mock";
import SliderCard from "../../cards/sliderCard/SliderCard";
import "./Slider.sass";
import { Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__nav">
        <div className="prev">
          <img src={prev} alt="prev" />
        </div>
        <div className="next">
          <img src={next} alt="next" />
        </div>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={true}
        modules={[Navigation]}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
      >
        {" "}
        {cardInfo.map((item, idx) => (
          <SwiperSlide>
            <SliderCard
              key={idx}
              title={item.title}
              background={item.background}
              text={item.text}
              image={item.image}
              buttonText={item.buttonText}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
