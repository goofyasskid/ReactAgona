import { IProduct } from "../../../interface/IProduct.interface";
import style from "./ProductCard.module.sass";
import { FC } from "react";

const ProductCard: FC<IProduct> = ({
  title,
  category,
  image,
  price,
  brand,
}) => {
  return (
    <div className={style.product_card}>
      <div className={style.product_card__image}>
        <img src={image} alt={title} />
        <div className={style.product_card__brand}>{brand}</div>
      </div>
      <div className={style.product_card__info}>
        <h5>{title}</h5>
        <h5>{category}</h5>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
