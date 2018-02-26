import React, { Component } from 'react';
import { ListView, Text, TextInput, View, StyleSheet } from 'react-native';

class Search extends Component {

    constructor(props){
        super(props);
    
        this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
        this.state = {
          isLoading: true,
          empty: false,
          rawData: {},
          note: '',
          error: '',
          searchText: '',
        }
    }

    render() {
        return (
  	    <View style={styles.container}>
	        <TextInput
                style={styles.searchBar}
                value={this.state.searchText}
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