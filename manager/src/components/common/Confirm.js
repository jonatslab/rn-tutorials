import React from 'react';
import { View, Text, Modal } from 'react-native';
import { Button } from './Button';
import { CardSection } from './CardSection';

const Confirm = ({ children, onAccept, onDecline, visible }) => {
    const { containerStyle, textCardSectionStyle, textStyle, buttonCardSectionStyle } = styles;
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                    <CardSection style={textCardSectionStyle}>
                        <Text style={textStyle}>
                            {children}
                        </Text> 
                    </CardSection>

                    <CardSection style={buttonCardSectionStyle}>
                        <Button onPress={onAccept}>
                            Yes
                        </Button>
                        <Button onPress={onDecline}>
                            No
                        </Button>
                    </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    textCardSectionStyle: {
        justifyContent: 'center',
        borderTopRightRadius: 3,
        borderTopLeftRadius: 3
    },
    buttonCardSectionStyle: {
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3
    },
    textStyle: {
        color: 'red',
        flex: 1,
        fontSize: 20,
        textAlign: 'center'
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        padding: 20
        
    },
};
export { Confirm };
