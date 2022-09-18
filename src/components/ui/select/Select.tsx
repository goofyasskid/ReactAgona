import { FC } from "react";
import style from './Select.module.sass'

interface ISelect {
  title: string;
  variants: string[];
}

const Select: FC<ISelect> = ({ title, variants }) => {
  return (
    <select className={style.select}>
      <option value="" disabled selected>
        {title}
      </option>
      {variants.map((item, idx) => (
        <option key={idx}>{item}</option>
      ))}
    </select>
  );
};

export default Select;
