import MaterialCard from "../../components/cards/materialCard/MaterialCard";
import Map from "../../components/ui/map/Map";
import SearchPanel from "../../components/ui/searchPanel/SearchPanel";
import style from "./PointPage.module.sass";

const PointsPage = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className={style.points_page}>
      <div className={style.points_page__search}>
        <div className={style.points_page__search__content}>
          <SearchPanel />
          <div className={style.points_page__cards}>
            {arr.map((item) => (
              <MaterialCard key={item} />
            ))}
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
