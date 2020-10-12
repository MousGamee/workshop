import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Loginpage from './containers/Loginpage'
import Page404 from './containers/Page404'
import SearchResult from './containers/SearchResult'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route  path="/login" component={Loginpage} />
      <Route  path="/searchResult" component={SearchResult} />
      <Route  component={Page404} />
    </Switch>
  </Router>
)

ReactDOM.render( <Root />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
