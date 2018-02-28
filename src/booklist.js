import React, { Component } from 'react';
import { 
    Image, 
    Text, 
    View, 
    ListView,
    TouchableHighlight,
} from 'react-native';
import styles from './style/styles'

const REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        };
     }
 
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                // cloneWithRows cập nhật dữ liệu trong nguồn dữ liệu
                dataSource: this.state.dataSource.cloneWithRows(responseData.items),
                isLoading: false
            });
        })
        .done();
    }
    
    render() {
        if (this.state.isLoading) {
            return this.renderLoadingView();
        }
 
        return (
             <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderBook.bind(this)}
                style={styles.listView}
            />
        );
    }

    renderBook(book) {
        return (
            <TouchableHighlight 
                onPress={() => this.showBook(book)}
            >
                <View>
                    <View style={styles.container}>
                        <Image
                            source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                            style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{book.volumeInfo.title}</Text>
                            <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
    }
 
    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <Text>
                    Loading books...
                </Text>
            </View>
        );
    }

    showBook = (book) => {
        this.props.navigation.navigate('Details', { ...book });
    };
}

export default BookList