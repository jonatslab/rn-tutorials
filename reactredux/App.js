import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './source/components/reducers';
import { Header } from './source/components/common';
import LibraryList from './source/components/LibraryList';

const App = () => (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText='React Redux' />
        <LibraryList />
      </View>
    </Provider>
  );


export default App;
