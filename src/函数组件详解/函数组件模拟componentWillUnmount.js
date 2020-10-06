import React, { useState,useEffect } from 'react'

const App = props => {
    const [childVisiable,setChildVisiable] = useState(true)
    const hide = ()=>{
        setChildVisiable(false)
    }
    const show =()=>{
        setChildVisiable(true)
    }
    return (
        <div>
            {childVisiable? <button onClick={hide}>hide</button> :<button onClick={show}>show</button>}
            {childVisiable? <Child/> : null}
        </div>
    )
}

const Child = ()=>{
    useEffect(()=>{
        return ()=>{
            console.log('Child 销毁了')
        }
    })
    return <div>chilid</div>
}
export default App