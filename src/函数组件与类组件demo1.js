import React from 'react'

function Father(){
    return (
            <div>
                爸爸
                <Son />
            </div>
    )
}

class Son extends React.Component{
    constructor(){
        super()
        this.state ={
            n:0
        }
    }
    add(){
        this.setState({n:this.state.n + 1})
    }
    render(){
        return (
            <div>
                儿子 {this.state.n}
                <button onClick={()=> this.add()}>+1</button>
                <Grandson />
            </div>
        )
    }
}

const Grandson = ()=>{
    const [n,setN] = React.useState(0);
    return (
        <div>
            Grandson
            {n}
            <button onClick={()=> setN(n +1 )}>+1</button>
        </div>
    )
}

export default Father