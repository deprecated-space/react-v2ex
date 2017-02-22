import React from 'react'
import './../css/Hot.css'
import axios from 'axios'
import {Link} from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
      api: 'https://www.v2ex.com/api/topics/hot.json',
      // data: null
      data: [{member: {avatar_mini: '//v2ex.assets.uxengine.net/gravatar/9e71b4a2f18e0a8862bf9d70a700aa3c?s=24&d=retro'}, title: 'title'}]
    }
  },

  componentDidMount() {
    // 抓取数据
    // console.log(typeof axios)
    axios.get(this.state.api).then((res) => {
      // this.state.data = res.data;
      this.setState({data: res.data});
      // console.log(this.state.data)
      // 数据没有重新渲染
    });
  },

  render() {
    return (
      <div className="box-h">
        <div className="cell">
          <span className="fade">今日热议主题</span>
        </div>
        {
          this.state.data.map((item) => {
            return (
              <div className="cell">
                <span><Link to={`/member/${item.member.id}`}><img src={item.member.avatar_mini} /></Link></span>
                <p><Link to={`/detail/${item.id}`}>{item.title}</Link></p>
              </div>
            )
          })
        }
      </div>
    )
  }
})
