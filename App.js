import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import List from './src/list';
import Search from './src/search';

class HomeScreen extends React.Component {
  render() {
    return (
        <List />
    );
  }
}

class SearchScreen extends React.Component {
  render() {
    return (
        <Search />
    );
  }
}
const Tabs = TabNavigator({
    Home: { screen: HomeScreen },
    Search: { screen: SearchScreen },
  }, {
    tabBarPosition: 'bottom',
  });
export default Tabs