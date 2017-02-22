import React from 'react'
import './../css/V2ex.css'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="box-v">
        <div className="cell">
          <strong>V2EX = way to explore</strong>
          <div className="sep5"></div>
          <span className="fade">V2EX 是一个关于分享和探索的地方</span>
        </div>
        <div className="inner">
          <Link to="/register"><input type="button" value="现在注册" /></Link>
          <div className="sep5"></div>
          <div>已注册用户请<Link to="/login">登录</Link></div>
        </div>
      </div>
    )
  }
})
