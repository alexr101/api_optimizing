import React, { Component } from "react";
import axios from 'axios';
import BookCollection from './Components/BookCollection/BookCollection';
import Spinner from '../../SharedComponents/Spinner/Spinner';

/*

	200 


*/

class BookScene extends Component {

	state = {
		books: []
	}

	componentWillMount() {
		this.getBooks();
	}

	getBooks = () => {
		const url = 'http://fakerestapi.azurewebsites.net/api/Books';

		axios.get(url)
		.then((res) => {
			const books = res.data;
			this.setState({
				books: books
			})
		})
		.catch((err) => {
			console.log({err});
		})
	}

	// handle the API call and get the data

  render() {
		const {books} = this.state;
    return (
			<div>
				<h1>Book Scene</h1>
				{!books.length ? (
					<Spinner/>
				) : (
					<BookCollection
					books={books}/>
				)}
			</div>
		);
  }
}

export default BookScene;