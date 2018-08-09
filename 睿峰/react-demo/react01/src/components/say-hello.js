import React,{Component} from 'react'

class SayHello extends Component{
    render(){
        return(
            <div className='say-hello'>
                <h1>Hello,{this.props.name}</h1>
            </div>
        )
    }
}
export default SayHello;