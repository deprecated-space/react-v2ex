import React from 'react'
import './../css/Bottom.css'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="box-b">
        <p><Link to="/">&copy;&nbsp;2017 - 2017</Link></p>
      </div>
    )
  }
})
