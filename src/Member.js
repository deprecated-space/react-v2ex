import React from 'react'
import './../css/Member.css'
import axios from 'axios'

export default React.createClass({
  getInitialState() {
    return {
      api: 'https://www.v2ex.com/api/members/show.json',
      userId: 1,
      key: '', // 是根据 'id' 还是 'username'
      // data: null,
      data: {avatar_normal:'', username:'', created:''},
      isLoading: true
    }
  },

  componentDidMount() {
    this.getUserId();
    this.getData();
    // 还需要监听路由的变化，重新渲染
    // 好像用户名一直是同一个，131号会员
  },

  getUserId() {
    // 获取路由参数
    this.setState({userId: this.props.params.id})
    // alert(this.state.userId)
    return;
    // alert(this.state.userId)
    // this.state.userId = this.props.params.id;
    // this.state.userId = this.$route.params.id; // 是 'id' 或者 'username'
    // console.log(this.state.userId)
    this.setState({key: /^\d+$/.test(this.state.userId) ? 'id': 'username'})
    // this.state.key = /^\d+$/.test(this.state.userId) ? 'id': 'username';
    // alert(this.state.key)
  },

  getData() {
    if (this.state.key === 'id') {
      // test
      setTimeout(() => axios.get(this.state.api, {params: {id: this.state.userId}}).then((res) => {
        // this.state.data = res.data;
        this.setState({data: res.data})
      }), 500);
    } else { // 根据 username

      axios.get(this.state.api, {params: {username: this.state.userId}}).then((res) => {
        // this.state.data = res.data;
        this.setState({data: res.data})
      });
    }
  },

  render() {
    return (
      <div className="box-me">
        <span><img src={this.state.data.avatar_normal} /></span>
        <div className="user">
          <h2>{this.state.username }</h2>
          <p>V2EX 第 { this.state.data.id } 号会员, 加入于 { this.state.data.created }</p>
        </div>
      </div>
    )
  }
})
