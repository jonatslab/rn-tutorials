/** @format 

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
*/

//Android Code

//import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './source/components/Header';
import AlbumList from './source/components/AlbumList';
//create a component

const App = () => (
    <View style={{ flex: 1 }}>
        < Header headerText='ALBUMS' />
        < AlbumList />
    </View>
);

AppRegistry.registerComponent('albums', () => App);
