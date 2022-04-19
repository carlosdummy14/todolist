import { useEffect, useRef, useState } from "react"
import style from "./App.module.css"
import ItemList from "./components/ItemList"

const App = () => {
  const [gifts, setGifts] = useState(() => {
    const localGifts = window.localStorage.getItem("gifts")
    return localGifts ? JSON.parse(localGifts) : []
  })
  const inputGiftRef = useRef(null)

  useEffect(() => {
    window.localStorage.setItem("gifts", JSON.stringify(gifts))
  }, [gifts])

  const handleSubmit = (e) => {
    e.preventDefault()
    const giftInputValue = inputGiftRef.current?.value

    if (giftInputValue) {
      const randomId = Math.floor(Math.random() * 500 + 1) // TODO: use library to generate id

      setGifts((prevGifts) => {
        return [{ text: giftInputValue, id: randomId }, ...prevGifts]
      })

      if (inputGiftRef.current) {
        inputGiftRef.current.value = ""
      }
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

  console.log({ gifts })

  return (
    <div className={style.app}>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={inputGiftRef}
            placeholder="What do you want??"
            autoFocus
          />
          <button type="submit">Add</button>
          <button onClick={handleClearList}>Clear List</button>
        </form>
        <ItemList gifts={gifts} deleteGift={deleteGift} />
      </div>
    </div>
  )
}

export default App
