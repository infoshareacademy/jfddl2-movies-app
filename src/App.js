import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import { store } from './store'

import MoviesSearch from './components/MoviesSearch'
import MovieView from './components/MovieView'

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router>
              <div>
                  <Route exact path="/" component={MoviesSearch} />
                  <Route path="/movie/:id" component={MovieView} />
              </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
