import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Register from './Register';
import Login from './Login';
import Detail from './Detail';
import Member from './Member';
import Middle from './Middle';
import Home from './Home'
import './../css/index.css';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route component={Middle}>
        <IndexRoute component={Home}/>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/member/:id" component={Member} />
      </Route>
    </Route>
  </Router>
  ), document.getElementById('root')
);
