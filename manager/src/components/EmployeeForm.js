import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
    render() {
        const { name, phone, shift } = this.props;
        return (
            <View>
                <CardSection>
                        <Input 
                            label="Name"
                            placeholder="John Doe"
                            value={name}
                            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                        />
                    </CardSection>
                        
                    <CardSection>
                        <Input 
                            label="Phone"
                            placeholder="555-555-5555"
                            value={phone}
                            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                        />
                    </CardSection>

                    <CardSection >
                        <Text style={styles.pickerLabelStyle}>
                            Shift
                        </Text>
                        <Picker
                            style={{ flex: 2 }}
                            selectedValue={shift}
                            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                        >
                            <Picker.Item label="Monday" value="Monday" />
                            <Picker.Item label="Tuesday" value="Tuesday" />
                            <Picker.Item label="Wednesday" value="Wednesday" />
                            <Picker.Item label="Thursday" value="Thursday" />
                            <Picker.Item label="Friday" value="Friday" />
                            <Picker.Item label="Saturday" value="Saturday" />
                            <Picker.Item label="Sunday" value="Sunday" />
                        </Picker>
                    </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        color: '#000',
        flex: 1,
        fontSize: 18,
        paddingLeft: 25,
        paddingTop: 12
    }
};

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return {
        name,
        phone,
        shift
    };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
