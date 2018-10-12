import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
    const { textStyles, viewStyles } = styles;
    
    return (<View style={viewStyles}>
            <Text style={textStyles}> {props.headerText} </Text>
           </View>);
};

export default Header;

const styles = {
    viewStyles: {
        backgroundColor: 'F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 30 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyles: {
        fontSize: 20,
    },
};
