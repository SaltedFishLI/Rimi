import React, {Component} from 'react';
import TabBar from '../components/tabbar'
import NavigtaionBar from '../components/navigationbar'
import '../styles/mine.css'
import {Icon} from 'antd'

class Mine extends Component {
  handleCancellation(){
    this.props.history.push('/')
  }
  render () {
    const infos = [
      [
        {title: '钱包', type: 'wallet'},
        {title: '发现', type: 'search'},
        {title: '分享', type: 'share-alt'},
        {title: '指南', type: 'compass'},
        {title: '礼物', type: 'gift'},
      ],
      [
        {title: '设置', type: 'setting'},
        {title: '收藏', type: 'star-o'}
      ],
    ]
      let styleObj =  {
        background:`url(${require('../asserts/bg.gif')}) no-repeat`
      }
      let styleOb =  {
        background:`url(${require('../asserts/3489d2586574954e28fd29e01ba1b9de.jpeg')}) no-repeat`
      }
    return (
      <div id='app' className='mine'>
        <NavigtaionBar title='我的' />
        <main className='content'>
          {/* infos */}
            <div className='info-box' style={styleObj}>
               <div className="head-portrait" style={styleOb}>
               
               </div>
               <p className='nikename'>有马公生</p>
               <p className='siginature'>April</p>
            </div>
            <div className='tool-box'>
              {
                infos.map((item,index)=>{
                  return(
                    <ul key={index} className='tool-list'>
                          {
                            item.map((obj)=>{
                              return(
                                <li key={obj.title}>
                                <div>
                                  <Icon className='Icon' type={obj.type}></Icon>
                                  <span className='text'>{obj.name}</span>
                                </div>
                                  <Icon type='right' />
                                </li>
                              )
                            })
                          }
                    </ul>
                  )
                })
              }
            </div>
            <div className='cancellation' onClick={this.handleCancellation.bind(this)}>退出登陆</div>
          </main>
        <TabBar />
      </div>)
  }
}

export default Mine;
