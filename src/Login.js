import React from 'react'
import './../css/Login.css'

export default React.createClass({
  render() {
    return (
      <div className="box-l">
        <div className="header">
          v2ex - 登录
        </div>
        <div className="inner">
          用户名<input type="text" /><br/>
          密码<input type="text" /><br/>
          <input type="button" value="登录" />
        </div>
      </div>
    )
  }
})
