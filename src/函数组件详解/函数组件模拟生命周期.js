import React, { useState,useEffect } from 'react'

const App = props => {
    const [n, setN] = useState(0)
    const [m, setM] = useState(0)
    const onClickN = () => {
        setN(n + 1)
    }
    const onClickM = () => {
        setM(m + 1)
    }
    // useEffect在后面接一个空数组，就可以只在第一次渲染的时候执行函数
    // 这是模拟componentDidMount的效果
    useEffect(()=>{
        console.log('use effect')
    },[])

    // 在什么数据更新的时候执行，就在数组里面写。比如n
    // 为什么第一次也打印出了n更新了，因为第一次n从undefined变成了1
    useEffect(()=>{
        console.log('n更新了')
    },[n])
    return (
        <div>
            {n}
            <button onClick={onClickN}>n+1</button>
            <hr/>
            {m}
            <button onClick={onClickM}>m+1</button>
        </div>
    )
}

export default App