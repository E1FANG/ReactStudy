import React from 'react'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            n:1
        }
    }
    add = ()=>{
        this.setState((state)=>{
           return {n : state.n+1}
        })
        this.setState((state)=>{
            return {n : state.n-1}
         })
        //由于点击之前的{n:1}和之后{n:1}不是同一个对象。所以react又render了一次
        //这就造成了不必要的更新，所以我们可以通过shoulComponentUpdate来阻止这一次的更新
    }
    shouldComponentUpdate(newProps,newState){
        if(newState.n === this.state.n){
            return false
        }else{
            return true
        }
        // 这样的话，再次将n加一减一之后，也不会再次触发render的更新
    }
    render(){
        console.log('render了一次')
        return(
            <div>App
                <div>
                    {this.state.n}
                    <button onClick={this.add}>+1</button>
                </div>
            </div>
        )
    }
}