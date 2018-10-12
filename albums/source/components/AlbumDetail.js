import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { 
            headerTitleStyle,
            headerTxtContainerStyle, 
            headerImageStyle,
            headerImgContainerStyle,
            bodyImageStyle
          } = styles;
    return (
        <Card>
            <CardSection>
                <View style={headerImgContainerStyle}>
                    <Image 
                        style={headerImageStyle} 
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={headerTxtContainerStyle}>
                    <Text style={headerTitleStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                    <Image 
                        style={bodyImageStyle}
                        source={{ uri: image }} 
                    />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}> 
                    Buy Album
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerTxtContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTitleStyle: {
        fontSize: 18
    },
    headerImgContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerImageStyle: {
        height: 50,
        width: 50
    },
    bodyImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
    
};

export default AlbumDetail;
