import React, { Component } from 'react';
import { ListView, Text, TextInput, View, StyleSheet } from 'react-native';

class Search extends Component {
    render() {
        return (
  	    <View style={styles.container}>
	        <TextInput
                style={styles.searchBar}
                placeholder='Search'
            />
	    </View>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
    }
});

export default Search