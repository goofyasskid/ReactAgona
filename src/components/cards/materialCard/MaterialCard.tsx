import style from './MaterialCard.module.sass'
import trash from '../../../assets/trash.svg'

const MaterialCard = () => {
  return (
    <div className={style.material_card}>
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