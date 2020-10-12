import React from 'react'
import ReactDOM from 'react-dom'
// import { useState } from 'react'

const rootElement = document.getElementById("root")

let _state

const myUseState = (initialValue)=>{
  console.log('myUseState run')
    _state = _state===undefined ?  initialValue : _state
    const setState = newValue=>{
        _state = newValue
        // 重新渲染APP，这是一个简化，react不单单只做这一件事。
        render()
    }
    return [_state,setState]
}

const render = ()=>{
    ReactDOM.render(<App />,rootElement)
}

const App = () => {
  console.log('App运行了')
  const [n, setN] = myUseState(0)
  console.log(`n:${n}`)
  return (
    <div>
      {n}
      <button onClick={() => { setN(n + 1) }}> `+1 </button>
    </div>
  )
}
export default App
