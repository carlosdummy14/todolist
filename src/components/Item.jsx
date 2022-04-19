import style from "./Item.module.css"

const Item = ({ text }) => {
  return <li className={style["list-item"]}>{text}</li>
}

export default Item
