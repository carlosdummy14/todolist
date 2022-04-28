import style from "./Item.module.css"

const Item = ({ text, id, deleteGift, editGift }) => {
  return (
    <li className={style["list-item"]}>
      <div className={style.text}>🎁 {text}</div>
      <div>
        <button onClick={() => editGift(id)}>✏️ Edit</button>
        <button onClick={() => deleteGift(id)}>❌ Delete</button>
      </div>
    </li>
  )
}

export default Item
