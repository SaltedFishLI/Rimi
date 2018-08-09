import React,{Component} from 'react'
import SayHello from '../components/say-hello'
import UserInfo from '../components/user-info'
import WebShow from '../components/web-show'
import NameList from '../components/name-list'
import Time from '../components/time'

//创建App组件，组件名必须大写
const name = "nihao"
class App extends Component{
    render(){
        //组件只允许有一个根标签
        return(
            <div class='app'>
               {/* jsx表达式 */}
                <h2 class="title">Hello,{name}</h2>
                <SayHello name="世界"/>
                <hr/>
                <UserInfo name="L" age="?" gender="?"/>
                <hr/>
                <WebShow />
                <hr/>
                <NameList>
                    <span>1</span>    
                    <span>5</span>  
                    <span>8</span>  
                </NameList>
                <hr/>
                <Time />
            </div>
        ) 
    }
}
//导出组件
export default App;