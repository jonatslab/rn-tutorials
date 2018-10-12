import React, { Component } from 'react';
import { Scene, Router, ActionConst, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import addImg from './images/add.png';

class RouterComponent extends Component {

    render() { 
        const { headerTitleStyle, sceneStyle } = style;
        return (
            <Router sceneStyle={sceneStyle}> 
                    <Scene key='root'>
                            <Scene 
                                initial 
                                key='login' 
                                component={LoginForm} 
                                title='Please Login' 
                                titleStyle={headerTitleStyle}
                            />
                            <Scene 
                                key='employeeList' 
                                component={EmployeeList} 
                                title='Employees' 
                                titleStyle={headerTitleStyle}
                                type={ActionConst.RESET}
                                rightButtonImage={addImg}
                                onRight={() => Actions.employeeCreate()}
                            />
                            <Scene 
                                key='employeeCreate' 
                                component={EmployeeCreate} 
                                title='Create Employee' 
                                titleStyle={headerTitleStyle}
                            />
                            <Scene
                                key='employeeEditDetails'
                                component={EmployeeEdit}
                                title='Update Employee'
                                titleStyle={headerTitleStyle}
                            />
                    </Scene>
            </Router>
        );
    }
    
}

const style = {
    headerTitleStyle: {
     flex: 1, 
     textAlign: 'center' 
    },
    sceneStyle: {
     backgroundColor: '#ffffff'
    }
};

export default RouterComponent;
