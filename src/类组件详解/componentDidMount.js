import React from 'react'

export default class App extends React.Component {
    divRef = undefined
    constructor(props) {
        super(props)
        this.state = {
            n: 1,
            width: null
        }
        this.divRef = React.createRef()
    }
    add = () => {
        this.setState((state) => {
            return { n: state.n + 1 }
        })
    }
    componentDidMount(){
        const div = this.divRef.current
        console.log(div)
        const {width} = div.getBoundingClientRect()
        this.setState({width})
    }
    render() {
        return (
        <div ref={this.divRef}> aa {this.state.width}</div>
            )
    }
}