import React from 'react'
import axios from 'axios'
import './../css/Description.css'

export default React.createClass({
  getInitialState() {
    return {
      api: 'https://www.v2ex.com/api/site/stats.json',
      data: {member_max: 1, topic_max: 2}
    }
  },

  componentDidMount() {
    axios.get(this.state.api).then((res) => {
      // this.state.data = res.data;
      this.setState({data: res.data});
      // console.log(this.state.api)
      // 无法重新渲染数据
    });
  },

  render() {
    return (
      <div className="box-d">
        <div className="cell">
          <span className="fade">社区运行状况</span>
        </div>
        <div className="cell">
          <p>注册会员：{ this.state.data.member_max } </p>
          <p>主题：{ this.state.data.topic_max} </p>
        </div>
      </div>
    )
  }
})
