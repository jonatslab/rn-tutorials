import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSaveChanges, employeeDelete } from '../actions';

class EmployeeEdit extends Component {
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    } 
    
    saveChangesButton() {
        const { name, phone, shift } = this.props;
        const { employee } = this.props;
        this.props.employeeSaveChanges({ name, phone, shift, uid: employee.uid });
    }
    callEmployeeButton() {
        const { phone } = this.props;
        Communications.phonecall(phone, false);
    }
    fireEmployeeButton() {
         this.setState({ showModal: true });
    }
    onAccept() {
        this.props.employeeDelete({ uid: this.props.employee.uid });
    }
    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.saveChangesButton.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.callEmployeeButton.bind(this)}>
                        Call Employee
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.fireEmployeeButton.bind(this)}>
                        Fire
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>

            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;

    return {
        name,
        phone,
        shift
    };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSaveChanges, employeeDelete })(EmployeeEdit);
