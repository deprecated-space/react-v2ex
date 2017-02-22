import React from 'react'
import './../css/Right.css'
import V2ex from './V2ex'
import Hot from './Hot'
import Description from './Description'

export default React.createClass({
  render() {
    return (
      <div className="box-r">
        <V2ex/>
        <Hot/>
        <Description/>
      </div>
    )
  }
})
