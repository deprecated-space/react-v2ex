import React from 'react'
import './../css/Register.css'

export default React.createClass({
  render() {
    return (
      <div className="box-reg">
        <div className="header">
          v2ex - 注册
        </div>
        <div className="inner">
          用户名<input type="text" /><br/>
          密码<input type="text" /><br/>
          电子邮件<input type="text" /><br/>
          <input type="button" value="注册" />
        </div>
      </div>
    )
  }
})
