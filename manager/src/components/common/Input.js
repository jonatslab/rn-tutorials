import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}> {label} </Text>
            <TextInput 
                secureTextEntry={secureTextEntry}
                autoCorret={false}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                underlineColorAndroid={'transparent'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 2,
    },
    labelStyle: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    containerStyle: {
        paddingRight: 10,
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export { Input };

