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
      const randomId = Math.floor(Math.random() * 500 + 1)

      setGifts((prevGifts) => {
        return [{ text: giftInputValue, id: randomId }, ...prevGifts]
      })

      if (inputGiftRef.current) {
        inputGiftRef.current.value = ""
      }
    }
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
        </form>
        <ItemList gifts={gifts} />
      </div>
    </div>
  )
}

export default App
