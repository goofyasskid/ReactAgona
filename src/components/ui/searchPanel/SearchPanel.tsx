import { searchItem } from "../../../mocks/searchVar.mock";
import Select from "../select/Select";
import style from "./SearchPanel.tsx.module.sass";

const SearchPanel = () => {
  return (
    <div className={style.panel}>
      <div className={style.panel__input}>
        <input placeholder="Поиск"/>
      </div>
      {searchItem.map((item, idx) => (
        <div key={idx} className={style.panel__select}>
          <Select title={item.title} variants={item.vsriants} />
        </div>
      ))}
    </div>
  );
};

export default SearchPanel;
