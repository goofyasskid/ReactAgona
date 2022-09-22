import pointCard from "../../../assets/pointCard.svg";
import style from "./PointsCard.module.sass";

const PointsCard = () => {
  const pointsInfo = [
    {
      title: "H&M",
      materials: [
        "Пластик: от 5 кг",
        "Стекло: от 2 кг",
        "Бумага: от 10 кг",
        "Батареи: от 2 кг",
      ],
    },
    {
      title: "Adidas",
      materials: ["Пластик: от 5 кг", "Стекло: от 2 кг", "Бумага: от 10 кг"],
    },
  ];
  return (
    <div className={style.point_card}>
      <div className={style.point_card__image}>
        <img src={pointCard} alt="pointCrd" />
      </div>
      <div className={style.point_card__info}>
        <div className={style.point_card__info__street}>
          <h4>​Казань, Кремлёвская, 88</h4>
          <p>+7 (917) 888 88 88</p>
          <div className={style.point_card__info__days}>
            <p>Пн - Пт 08:00 - 20:00</p>
            <p>Сб - Вс 10:00 - 18:00</p>
          </div>
          {pointsInfo.map((item) => (
            <div className={style.point_card__info__materials}>
              <h4>{item.title}</h4>
              {item.materials.map((material) => (
                <div className={style.point_card__info__blocks}>
                  <div className={style.point_card__info__block}>
                    {material}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PointsCard;
