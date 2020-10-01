import React from 'react'

function Father2(){
    return (
        <div>
            爸爸
            <Son MessageForSon="儿子爬"></Son>
        </div>
    )
}

class Son extends React.Component{
    render(){
        const MessageForGrandSon = '孙子爬'
        return(
            <div>
                我是儿子，爸爸对我说{this.props.MessageForSon}
                <GrandSon MessageForGrandSon={MessageForGrandSon}/>
            </div>
        )
    }
}

const GrandSon= (props)=>{
    return (
        <div>
            我是孙子，
            儿子对我说 {props.MessageForGrandSon}
        </div>
    )
}

export default Father2