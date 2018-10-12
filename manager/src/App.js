import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({ 
        apiKey: 'AIzaSyA7ZWos_rHqcRRfJlV0wFqfcssHQ43IHGc',
        authDomain: 'manager-a386d.firebaseapp.com',
        databaseURL: 'https://manager-a386d.firebaseio.com',
        projectId: 'manager-a386d',
        storageBucket: 'manager-a386d.appspot.com',
        messagingSenderId: '362347266860'
      });
    }
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
