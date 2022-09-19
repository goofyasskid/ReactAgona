import style from "./MarketPanel.module.sass";

const MarketPanel = () => {
  return (
    <div className={style.market_panel}>
      <div className={style.market_panel__title}>
        <h1>ЭкоМаркет</h1>
      </div>
      <div className={style.market_panel__nav}>
        <ul>
          <li>По популярности</li>
          <li>По цене</li>
          <li>По новизне</li>
        </ul>
      </div>
    </div>
  );
};

export default MarketPanel;
