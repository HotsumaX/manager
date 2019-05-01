import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
  conponentWillMount() {
    const config = {
      apiKey: 'AIzaSyDw58IYjojnRyO163XctAa_yWwyJeaQ2NI',
      authDomain: 'manager-8535d.firebaseapp.com',
      databaseURL: 'https://manager-8535d.firebaseio.com',
      projectId: 'manager-8535d',
      storageBucket: 'manager-8535d.appspot.com',
      messagingSenderId: '43182888126'
    }
    firebase.initializeApp(config)
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
