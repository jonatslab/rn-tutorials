import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, LayoutAnimation, UIManager } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && 
        UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.linear();
    }
    renderDescription() {
        const { expanded, library } = this.props; 
        if (expanded) {
            return (
                <CardSection>
                    <Text style={styles.descriptionStyle}> {library.description} </Text>
                </CardSection>
            );
        }
    }
    
    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View > 
                    <CardSection>
                        <Text style={titleStyle}> {title } </Text>
                    </CardSection>
                   {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        color: '#000',
        fontSize: 25,
        paddingLeft: 15
    },
    descriptionStyle: {
       
        paddingLeft: 15,
        fontSize: 15,
        color: '#000'
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};
export default connect(mapStateToProps, actions)(ListItem);
