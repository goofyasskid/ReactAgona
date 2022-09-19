import FiltersCard from "../../components/cards/filtersCard/FiltersCard";
import MarketPanel from "../../components/ui/marketPanel/MarketPanel";
import style from "./MarketPage.module.sass";

const MarketPage = () => {
  return (
    <div className={style.market}>
      <div className={style.market__wrapper}>
        <div className={style.market__content}>
          <MarketPanel />
          <div className={style.market__blocks}>
            <div className={style.market__blocks__filters}>
              <FiltersCard />
            </div>
            <div className={style.market__blocks__products}>;lkjghf</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
