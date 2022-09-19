import { filtersInfo } from "../../../mocks/filters.mock";
import style from "./FiltersCard.module.sass";

const FiltersCard = () => {
  return (
    <div className={style.filter_card}>
      {filtersInfo.map((item, idx) => (
        <div key={idx} className={style.filter_card__block}>
          <h3>{item.title}</h3>
          {item.variants.map((variant, idx) => (
            <div key={idx} className={style.filter_card__box}>
              <input type="checkbox" />
              <span className="checkmark"/>
              <label>{variant}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FiltersCard;
