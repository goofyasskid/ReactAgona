import style from './MaterialCard.module.sass'
import trash from '../../../assets/trash.svg'
import { useNavigate } from 'react-router'

const MaterialCard = () => {
  const navigate = useNavigate()
  return (
    <div className={style.material_card} onClick={() => navigate("/points/:cardId")}>
        <div className={style.material_card__image}>
            <img src={trash} alt="trash"/>
        </div>
        <div className={style.material_card__info}>
           <h5>ул.Кремлёвская, 88</h5>
           <p>Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...</p>
        </div>
    </div>
  )
}

export default MaterialCard 