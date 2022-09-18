import Map from "../../components/ui/map/Map";
import SearchPanel from "../../components/ui/searchPanel/SearchPanel";
import style from "./PointPage.module.sass";

const PointsPage = () => {
  return (
    <div className={style.points_page}>
      <div className={style.points_page__search}>
        <div className={style.points_page__search__content}>
          <SearchPanel />
        </div>
      </div>
      <div className={style.points_page__map}>
        <Map />
      </div>
    </div>
  );
};

export default PointsPage;
