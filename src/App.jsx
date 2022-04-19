import { useEffect, useRef, useState } from "react"
import style from "./App.module.css"
import ItemList from "./components/ItemList"

const App = () => {
  const [gifts, setGifts] = useState(() => {
    const localGifts = window.localStorage.getItem("gifts")
    return localGifts.split(",") || []
  })
  const inputGiftRef = useRef(null)

  useEffect(() => {
    window.localStorage.setItem("gifts", gifts)
  }, [gifts])

  const handleSubmit = (e) => {
    e.preventDefault()
    const giftInputValue = inputGiftRef.current?.value

    if (giftInputValue) {
      setGifts((prevGifts) => {
        return [giftInputValue, ...prevGifts]
      })

      if (inputGiftRef.current) {
        inputGiftRef.current.value = ""
      }
    }
  }

  console.log("render APP", gifts)

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
