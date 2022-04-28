import { useEffect, useState } from "react"
import style from "./App.module.css"
import ItemList from "./components/ItemList"
import { nanoid } from "nanoid"

const App = () => {
  const [gifts, setGifts] = useState(() => {
    const localGifts = window.localStorage.getItem("gifts")
    return localGifts ? JSON.parse(localGifts) : []
  })
  const [inputGift, setInputGift] = useState("")
  const [giftToEdit, setGiftToEdit] = useState(null)

  useEffect(() => {
    window.localStorage.setItem("gifts", JSON.stringify(gifts))
  }, [gifts])

  const handleChange = (ev) => {
    setInputGift(ev.target.value)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()

    if (inputGift) {
      if (giftToEdit) {
        const giftEdited = {
          ...giftToEdit,
          text: inputGift,
        }

        const restGifts = gifts.filter((gift) => gift.id !== giftToEdit.id)

        setGifts([giftEdited, ...restGifts])
        setGiftToEdit(null)
      } else {
        const randomId = nanoid()

        setGifts((prevGifts) => {
          return [{ text: inputGift, id: randomId }, ...prevGifts]
        })
      }
      setInputGift("")
    } else {
      setGiftToEdit(null)
    }
  }

  const handleClearList = () => {
    setGifts([])
  }

  const deleteGift = (id) => {
    setGifts((prevGifts) => {
      return prevGifts.filter((gift) => gift.id !== id)
    })
  }

  const editGift = (id) => {
    const giftSelected = gifts.find((gift) => gift.id === id)
    setGiftToEdit(giftSelected)
    setInputGift(giftSelected.text)
  }

  return (
    <div className={style.app}>
      <div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            className={style.input}
            type="text"
            placeholder="What do you want??"
            autoFocus
            value={inputGift}
            onChange={handleChange}
          />
          <button type="submit">🎁 Add</button>
          <button onClick={handleClearList}>🗑️ Clear</button>
        </form>
        <ItemList gifts={gifts} deleteGift={deleteGift} editGift={editGift} />
      </div>
    </div>
  )
}

export default App
