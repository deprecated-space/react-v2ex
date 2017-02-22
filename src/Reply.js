import React from 'react'
import './../css/Reply.css'
import {Link} from 'react-router'
import axios from 'axios'

export default React.createClass({
  getInitialState() {
    return {
      api: 'https://www.v2ex.com/api/replies/show.json?topic_id=',
      detailedId: null,
      key: '', // 是根据 'id' 还是 ''
      // rawHtml: '',
      data: [{member:{avatar_normal:''}, content_rendered:''}]
    }
  },

  componentDidMount() {
    this.getData();
  },

  getDetailId() {

  },

  getData() {
    // 这里得不到路由，这个路由相当于是直接属于 Detail 这个组件的
    // 可以把参数往下传递
    // alert(this.props.id)
    axios.get(this.state.api + this.props.id).then((res) => {
      this.state.data = res.data
      // console.log(this.state.data)
      this.setState({data: res.data})
    })
  },

  render() {
    return (
      <div className="box-rep">
        {
          this.state.data.map((item) => {
            return (
              <div className="cell">
                <span>
                  <Link to=""><img src={item.member.avatar_normal} /></Link>
                </span>
                <p>{item.content_rendered}></p>
              </div>
            )
          })
        }
      </div>
    )
  }
})
