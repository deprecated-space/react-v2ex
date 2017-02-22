import React from 'react'
import './../css/Home.css'
import {Link} from 'react-router'
import axios from 'axios'

export default React.createClass({
  getInitialState() {
    return {
      api: "https://www.v2ex.com/api/topics/latest.json",
      // data: null,
      data: [{member: {avatar_normal:'', id:1}}],
      curTab: 'tech',  // 当前 tab
      tabs: [
        {key: 'tech', value: '技术'},
        {key: 'creative', value: '创意'},
        {key: 'play', value: '好玩'},
        {key: 'apple', value: 'Apple'},
        {key: 'jobs', value: '酷工作'},
        {key: 'deals', value: '交易'},
        {key: 'city', value: '城市'},
        {key: 'qna', value: '问与答'},
        {key: 'hot', value: '最热'},
        {key: 'all', value: '全部'},
        {key: 'r2', value: 'R2'}
      ]
    }
  },

  componentDidMount() {
    // fetch data
    axios.get(this.state.api).then((res) => {
      this.setState({data: res.data})
    })
  },

  render() {
    return (
      <div className="box-ho">
        <div className="cell">
          <ul>
            {
              this.state.tabs.map((item) => {
                return (
                  <li>
                    <Link>{item.value}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        {
          this.state.data.map((item) => {
            return (
              <div className="cell">
                <span><Link to={`/member/${item.member.id}`}><img src={item.member.avatar_normal}/></Link></span>
                <Link to={`/detail/${item.id}`}>{item.title}</Link>
              </div>
            )
          })
        }
      </div>
    )
  }
})
