import React, { Component } from 'react';
import { ListView, Text, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BookList from './booklist';
import DetailsBook from './details-book';

const RootStack = StackNavigator(
    {
      Home: {
        screen: BookList,
        navigationOptions: {
            title: 'List Books',
            headerStyle: {
                backgroundColor: '#8c66ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
      },
      Details: {
        screen: DetailsBook,
        navigationOptions: {
            title: 'Detail Books',
        }
      },
    },
    {
      initialRouteName: 'Home',
    }
);

export default class List extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}
