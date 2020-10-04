import React from 'react'


export default class App  extends React.Component {
    constructor(props) {
        super(props)
        this.state = { x: 1 }
    }
    // setState传入的是对象
    onClick = () => {
        this.setState({
            x: this.state.x + 1
        })
    }
     // setState传入的是函数
    onClick2 = ()=>{
        this.setState((state)=>{
          return {x:state.x+1}
        })
      }
    render() {
        return (
            <div className="App">
                App
                <B name={this.state.x} />
                <button onClick={this.onClick2}>+1</button>
            </div>
        )
    }
}

class B extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    componentWillReceiveProps(newProps){
        console.log('旧的props')
        console.log(this.props)
        console.log('props变化了')
        console.log('新的props')
        console.log(newProps)
    }
    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}
