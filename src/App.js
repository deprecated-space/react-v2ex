import React, { Component } from 'react';
import './../css/App.css';
import Top from './Top'
import Middle from './Middle'
import Bottom from './Bottom'

class App extends Component {
  render() {
    return (
     <div id ="app">
       <Top/>
       {this.props.children}
       <Bottom/>
     </div>
    );
  }
}

export default App;
