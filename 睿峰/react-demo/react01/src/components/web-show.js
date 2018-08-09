import React,{Component} from 'react'
const WebName=()=>{
    return(
        <span >名字</span>
    )
}

const WebLink=(props)=>{
    return(
        <a {...props}> www.baidu.com</a>
    )
}
const WebShow=()=>{
    return(
        <div className='web-show'>
            <p>
                <WebName title='这是一个链接' data-msg='j1'/>
                <WebLink href="https://www.baidu.com/"/>
            </p>
        </div>
    )
}
export default WebShow;