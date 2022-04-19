import style from "./Item.module.css"

const Item = ({ text, id, deleteGift }) => {
  return (
    <li className={style["list-item"]}>
      [{id}] : {text}
      <button onClick={() => deleteGift(id)}>Borrar</button>
    </li>
  )
}

export default Item
