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
    }
    render(){
        let message 
        if (this.state.n %2 === 0) {
            message = <div>偶数</div>
        }else{
            message = <div>奇数</div>
        }
        return (
            <>
            {
                this.state.n%2===0?
                <div>偶数</div>:
                <div>奇数</div>
            }
            {message}
            <button onClick={this.add}>+1</button>
            </>
        )
    }
}