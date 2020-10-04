import React from 'react'

function Father() {
    return (
        <div>
            爸爸
            <Son />
        </div>
    )
}

class Son extends React.Component {
    constructor() {
        super()
        this.state = {
            n: 0
        }
    }
    add() {
        // this.state.n += 1   //为什么不行,
                               //与vue的区别，vue会监听n的变化然后去刷新UI(劫持n)
                               //但是react并没有帮你做这件事(react不知道n变化了，所以不会更新视图)
        // this.setState(this.state)   //可以生效 但是不建议

        // this.setState({ n: this.state.n + 1 })
        // console.log(this.state.n) // 0
         this.setState((state)=>{
             const n = state.n+1
             console.log(n)
             return {n}
         })
    }
    render() {
        return (
            <div>
                儿子 {this.state.n}
                <button onClick={() => this.add()}>+1</button>
                <Grandson />
            </div>
        )
    }
}

const Grandson = () => {
    const [n, setN] = React.useState(0);
    return (
        <div>
            Grandson
            {n}
            <button onClick={() => setN(n + 1)}>+1</button>
        </div>
    )
}

export default Father