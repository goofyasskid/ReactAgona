import MainCard from "../../components/cards/mainCard/MainCard";
import Slider from "../../components/ui/slider/Slider";
import { cardAbout } from "../../mocks/sliderCard.mock";
import style from "./MainPage.module.sass";

const MainPage = () => {
  return (
    <main className={style.main}>
      <div className={style.main__wrapper}>
        <div className={style.main__content}>
          <Slider />
          <div className={style.main__cards}>
            {cardAbout.map((item, idx) => (
              <MainCard
                key={idx}
                title={item.title}
                text={item.text}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
