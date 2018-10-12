import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, onLogin } from '../actions';

class LoginForm extends Component {
    
    onEmailChanged(email) {
        this.props.emailChanged(email);
    }
    onPasswordChanged(password) {
        this.props.passwordChanged(password);
    }
    logInButton() {
        const { email, password } = this.props;
        this.props.onLogin({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
         return (<Spinner />); 
        }
        return (
           <Button onPress={this.logInButton.bind(this)}> 
                Log In
           </Button>
        );
    }
     
    render() {
        const { email, password } = this.props;
            return (
                <Card>
                    <CardSection>
                        <Input
                            label='Email'
                            placeholder='user@gmail.com'
                            onChangeText={this.onEmailChanged.bind(this)}
                            value={email}
                        />
                    </CardSection>
                        
                    <CardSection>
                        <Input
                            secureTextEntry
                            label='Password'
                            placeholder='password'
                            onChangeText={this.onPasswordChanged.bind(this)}
                            value={password}
                        />
                    </CardSection>

                    <Text style={styles.errorStyle}> 
                        {this.props.error}
                    </Text>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            );
    }
}
const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return {
        email,
        password,
        error,
        loading
    };
};

const styles = {
    errorStyle: {
        fontSize: 18,
        padding: 5,
        color: 'red',
        alignSelf: 'center'
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, onLogin })(LoginForm);

