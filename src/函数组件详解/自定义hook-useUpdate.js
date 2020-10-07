import React, { useState, useEffect } from 'react'

// const App = props => {
//     const [n, setN] = useState(0)
//     const onClickN = () => {
//         setN(n + 1)
//     }
//     const useX = (n)=>{
//         const [nUpdateCount,setNUpdateCount] = useState(0)
//         useEffect(()=>{
//             // console.log('进入x')
//             // setNUpdateCount(x=>x+1)
//             setNUpdateCount(nUpdateCount => nUpdateCount +1)
//         },[n])
//         return {nUpdateCount:nUpdateCount}
//     }
//     const {nUpdateCount} = useX(n)

//     useEffect(()=>{
//         if(nUpdateCount >1){
//             console.log('n更新了')
//         }
//     },[nUpdateCount])
//     return (
//         <div>
//             {n}
//             <button onClick={onClickN}>n+1</button>
//         </div>
//     )
// }

// 简化上面的代码


const useUpdate = (fn,dep) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        // setNUpdateCount(nUpdateCount => nUpdateCount + 1)
        setCount(x=>x+1)
    }, [dep])

    useEffect(()=>{
        if (count > 1) {
            fn()
        }
    },[count, fn])
}
const App = props => {
    const [n, setN] = useState(0)
    const onClickN = () => {
        setN(n + 1)
    }
    useUpdate(() => {
        console.log('n更新了')
    },n)

    return (
        <div>
            {n}
            <button onClick={onClickN}>n+1</button>
        </div>
    )
}

export default App