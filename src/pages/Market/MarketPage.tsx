import FiltersCard from "../../components/cards/filtersCard/FiltersCard";
import ProductCard from "../../components/cards/productCard/ProductCard";
import MarketPanel from "../../components/ui/marketPanel/MarketPanel";
import { productsInfo } from "../../mocks/products.mock";
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
            <div className={style.market__blocks__products}>
              {productsInfo.map((item, idx) => (
                <ProductCard
                  key={idx}
                  title={item.title}
                  category={item.category}
                  image={item.image}
                  price={item.price}
                  brand={item.brand}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
