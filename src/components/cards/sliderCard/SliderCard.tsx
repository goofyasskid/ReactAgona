import style from "./SliderCard.module.sass";

const SliderCard = () => {
  const mock = {
    title: "Сделаем мир чище",
    background: "#B3EDC8",
    text: "Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов",
    image: "/slider/first.png",
    buttonText: "Условия сервиса",
  };
  return (
    <div
      className={style.slider_card}
      style={{
        background: `${mock.background}`,
      }}
    >
      <div className={style.text}>
        <div className={style.wrapper}>
          <h1>{mock.title}</h1>
          <p>{mock.text}</p>
          <div className={style.button_wrapper}>
            <button>{mock.buttonText}</button>
          </div>
        </div>
      </div>
      <div className={style.image}>
        <img src={mock.image} alt={mock.title} />
      </div>
    </div>
  );
};

export default SliderCard;
