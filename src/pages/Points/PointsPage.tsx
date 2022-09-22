import MaterialCard from "../../components/cards/materialCard/MaterialCard";
import Map from "../../components/ui/map/Map";
import SearchPanel from "../../components/ui/searchPanel/SearchPanel";
import style from "./PointPage.module.sass";
import { Outlet } from "react-router-dom";

const PointsPage = () => {
  return (
    <div className={style.points_page}>
      <div className={style.points_page__search}>
        <div className={style.points_page__search__content}>
          <SearchPanel />
        </div>
        <div className={style.points_page__cards}>
          <div className={style.points_page__cards__block}>
            <Outlet />
          </div>
        </div>
      </div>
      <div className={style.points_page__map}>
        <Map />
      </div>
    </div>
  );
};

export default PointsPage;
