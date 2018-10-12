import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class EmployeeListItem extends Component {
    onSelectEmployee() {
        Actions.employeeEditDetails({ employee: this.props.employee });
    }
    render() {
        const { name } = this.props.employee;
        return (
            <TouchableWithoutFeedback onPress={this.onSelectEmployee.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.textStyle}> {name} </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 20,
        color: '#000',
        flex: 1,
        textAlign: 'center'
    }
};

export default EmployeeListItem;
