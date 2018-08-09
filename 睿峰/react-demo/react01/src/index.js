import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
// import Time from './components/time'

//ReactDOM.render:生成虚拟DOM,渲染页面
// const element = <h1>Hello,React!</h1>

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

// setInterval(()=>{
//     ReactDOM.render(
//         <Time/>,
//         document.getElementById('root')
//     )
// },1000)

