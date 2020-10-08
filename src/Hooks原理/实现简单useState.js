import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const rootElement = document.getElementById("root")

const myUseState = (initialValue)=>{
    let state = initialValue
    const setState = newValue=>{
        state = newValue
        render()
    }
    return [state,setState]
}

const render = ()=>{
    ReactDOM.render(<App />,rootElement)
}

const App = () => {
  console.log('App运行了')
  const [n, setN] = useState(0)
  console.log(`n:${n}`)
  return (
    <div>
      {n}
      <button onClick={() => { setN(n + 1) }}> `+1 </button>
    </div>
  )
}
export default App
