import React from 'react'
import { useState } from 'react'



const App = () => {
  console.log('App运行了')
  const [n, setN] = useState(0)
  console.log(`n:${n}`)
  return (
    <div>
      {n}
      <button onClick={() => { setN(n + 1) }}> +1 </button>
    </div>
  )
}
export default App


//   • 执行setN的时候会发生什么？
//     重新渲染UI，因为n发生了变化
//   • 执行setN(),n会变吗？
//    不会变。
//   • 执行setN(),App()会重新执行吗？
//     会
//   • 如果App()会重新执行，那么useSate(0)的时候，n每次的值会有不同吗？
//     会
//   • 以上的问题都可以通过console.log得到答案


//   分析
//   有哪些事情是一定会做的
//   setN
//   • setN一定会修改某个数据x，然后将n+1存入x   (x可以理解为一个中介位置)
//   • setN一定会触发<App />重新渲染(re-render)
//   useState
//   • useState肯定会从x读取n的最新值
//   X
//   • 每个组件都有自己的数据x， 我们将其命名为state
//   • x是我们最需要了解的核心