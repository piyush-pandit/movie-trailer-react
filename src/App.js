import './App.css';
import React from 'react';
import { Provider } from 'react-redux'
import Navbar from './components/Navbar';
import LoadingPage from './components/LoadingPage';
import store from './store'
import { HashRouter as Router, Route } from 'react-router-dom';
import  secondpage  from './components/secondpage';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={LoadingPage} />
          <Route exact path="/secondpage/:id" component={secondpage} />
      </div>
      </Router>
    </Provider>

  )
}

export default App;
