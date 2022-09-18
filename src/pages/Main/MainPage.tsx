import Slider from "../../components/ui/slider/Slider";
import style from "./MainPage.module.sass";

const MainPage = () => {
  return (
    <div className={style.main}>
      <div className={style.main__wrapper}>
        <Slider/>
      </div>
    </div>
  );
};

export default MainPage;
