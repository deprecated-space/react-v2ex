import React from 'react'
import {Link} from 'react-router'
import './../css/Top.css';

export default React.createClass({
  getInitialState() {
    return {
      curTab: 'index',
      tabs: [
        {key: '/', value: '首页'},
        {key: 'register', value: '注册'},
        {key: 'login', value: '登录'}
      ]
    }
  },

  componentDidMount() {
    // let tab = this.$route.name;
    // this.curTab = tab;
  },

  render() {
    return (
      <div className="box">
        <div className="left"><Link to="/">V2EX Clone</Link></div>
        <div className="right">
          <ul>
            {
              this.state.tabs.map((item) => {
                return <li><Link to={item.key}>{item.value}</Link></li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
})
