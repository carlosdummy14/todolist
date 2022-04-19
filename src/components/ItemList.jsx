import Item from "./Item"
import style from "./ItemList.module.css"

const ItemList = ({ gifts }) => {
  return (
    <ul className={style["list-gifts"]}>
      {gifts.map((gift, index) => (
        <Item key={index} text={gift} />
      ))}
    </ul>
  )
}

export default ItemList
