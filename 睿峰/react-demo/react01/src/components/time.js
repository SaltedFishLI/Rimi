import React,{Component} from 'react'

// 函数语法
// function Time(){}
const Sunzi = (props)=>{
    return(
        <span>{props.msg}</span>
    )
}
const Label=(props)=>{
    return(
        <div>
        <span>wo</span>
        <Sunzi msg={props.msg}/>
        </div>
    )
}
class Time extends Component{
    constructor(props){
        super(props);
        this.state={
            date:new Date(),
            msg:'有趣'
        }
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState({
                date:new Date(),
            })
        })
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return(
        <h1>
            北京时间：{this.state.date.toLocaleTimeString()}
            -
            <Label msg={this.props.msg} />
        </h1>
    )
    }
    
}
export default Time;