import React from 'react'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            n:1,
            array:[1,2,3]
        }
    }
    add = ()=>{
        this.setState((state)=>{
           return {n : state.n+1}
        })
    }
    render(){
        // 直接使用for循环要依靠数组
        // 要用一个数组push回来，如果直接返回的话，第一次数组的循环return就结束了
        // let result = []
        // for(let i=0; i<this.state.array.length; i++){
        //     result.push(this.state.array[i])
        // }
        // return result

        // 使用map
        // 就可以直接return了
        return this.state.array.map(e=>
            <div key= {e}>{e}</div>
        )


    }
}