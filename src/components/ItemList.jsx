import Item from "./Item"
import style from "./ItemList.module.css"

const ItemList = ({ gifts }) => {
  return (
    <ul className={style["list-gifts"]}>
      {gifts.map((gift) => (
        <Item key={gift.id} text={gift.text} />
      ))}
    </ul>
  )
}

export default ItemList
