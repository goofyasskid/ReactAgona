import money from "../../../assets/money.svg";
import { historyInfo } from "../../../mocks/history.mock";
import style from "./HistoryCard.module.sass";

const HistoryCard = () => {
  return (
    <div className={style.history}>
      <div className={style.history__wrapper}>
        <div className={style.history__content}>
          {historyInfo.map((item, idx) => (
            <div className={style.history__info} key={idx}>
              <label>{item.title}</label>
              <div className={style.history__blocks} key={idx}>
                {item.info.map((info, idx) => (
                  <p>{info}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={style.history__price}>
          <img src={money} alt="money" />
          <span>1000</span>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
