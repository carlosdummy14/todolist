import Item from "./Item"
import style from "./ItemList.module.css"

const ItemList = ({ gifts, deleteGift }) => {
  return (
    <ul className={style["list-gifts"]}>
      {gifts.map((gift) => (
        <Item
          key={gift.id}
          text={gift.text}
          id={gift.id}
          deleteGift={deleteGift}
        />
      ))}
    </ul>
  )
}

export default ItemList
