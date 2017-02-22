import React from 'react'
import './../css/Middle.css'
import Right from './Right'

export default React.createClass({
  render() {
    return (
      <div className="box-m">
        <div className="left">
          {this.props.children}
        </div>
        <Right className="Right">
        </Right>
      </div>
    )
  }
})
