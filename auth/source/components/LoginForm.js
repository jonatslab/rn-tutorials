import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };
    
    onLoginFail() {
        this.setState({ error: 'Authentication Failed!', loading: false });
    }
    onLoginSuccess() {
        this.setState({ email: '', password: '', error: '', loading: false });
    }
    loginButton() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
            });
    }
    renderLoginButton() {
        if (this.state.loading) {
            return (
             <Spinner size="small" />
            );
        }
        return (
            <Button onPress={this.loginButton.bind(this)}>
             Log In
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        label="Email"
                        placeholder="user@gmail.com"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        label="Password"
                        placeholder="password"
                    />
                </CardSection>
                
                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderLoginButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
