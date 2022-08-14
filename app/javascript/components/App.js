import React from "react"
import PropTypes from "prop-types"

import configureStore from "../configureStore"
import Greeting from "./Greeting"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" render= {() => ("Home")} />
            <Route path="/greeting" render= {() => <Greeting greeting="Friend" />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App