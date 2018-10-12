/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import LoginForm from './source/components/LoginForm';
import { Button, Header, Spinner, CardSection } from './source/components/common';

 
export default class App extends Component {
  state = { loggedIn: null, error: '' };

  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({ 
        apiKey: 'AIzaSyA6rKwcDP_CcHxCFVl3aDbLbYFPY3iqde4',
        authDomain: 'auth-c53a6.firebaseapp.com',
        databaseURL: 'https://auth-c53a6.firebaseio.com',
        projectId: 'auth-c53a6',
        storageBucket: 'auth-c53a6.appspot.com',
        messagingSenderId: '942814845317'
      });
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  logoutButton() {
    this.setState({ error: '' });
    firebase.auth().signOut()
      .catch(() => {
        this.setState({ error: 'Logging Out Failed.' });
      });
  }
  renderContent() {
    switch (this.state.loggedIn) {
    case true:
        return (
          <CardSection>
            <Button onPress={this.logoutButton.bind(this)}> Log Out </Button>
          </CardSection>
        );
    case false:
        return <LoginForm />;
    default:
        return (
          <View style={styles.container} >
            <Spinner />
          </View>
        );
    }
  }
  
  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
        <Text >
          {this.setState.error}
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};
