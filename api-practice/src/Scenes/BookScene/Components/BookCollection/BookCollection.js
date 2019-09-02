import React, { Component } from "react";
import Book from './Book/Book';

class BookCollection extends Component {

	state = {
		renderedBooks: [1]
	}

	// handle the lazy loading

	// once the user scrolls down maybe 1/2 height pf the book put another book into renderedbooks

	/*
		Once you reach bottom - load more items
		XXX Once you're NEAR the bottom - load more items
	*/

	/*
		There is no limit to the amount of books that you can load
	*/


	/*
		1) Scroll position in the page
		2) How often do you want to load new books, every time the user scrolls about 1.5 pages down
		3) have an array of all the points (in pixels) where we need to load more books
		4) How many book to render per load
		5) total AVAILABLE books
		6) total RENDERED books
		7) screenDown - how many screens have we scrolled down to

		1, 2, 3, 4, 5, 6, 7, 8, 9

		1

		state = {
			scrollPosition: 0,
			renderedBooks: []
			howManyScreensPerLoad: 1.5,
			breakPoints: [],
			getMorePointsEvery: 5,
			screensDown: 0,
		}

		componentDidMount() {
			this.calculatePoints()
			window.addEventListener('scroll', () => {
				
			})
		}

		calculateMorePoints() {
			// get the height of the screen
			const screenHeight = getWindowHeight;

			// loop through getMorePointsEvery - 5 loops
				bottomPoint = breakPoints[breakPoints.length-1]
				const newPoint = bottomPoint + screenHeight;
				breakPoints.push(newPoint)

		}

		this.getMoreBooks() {
			get more books from books array
			totalRenderedBooks = 1;
			bookToRenderPerLoad = 1;
			const newBooks = books.slice(totalRenderedBooks, totalRenderedBooks + bookToRenderPerLoad)

			renderedBooks.push(newBooks);
		}

		renderedBooks = [1]
		books = [1...9]
		if screen measure 500px

		750px load more books
		1500px load more books


		App -> Home Page

		-> Books Scene
				Book Collections
				Buy Books
		-> Magazines Scene


		Global Components

			Navigation
			Side Navigation
			Button




	*/


  render() {
		const {renderedBooks} = this.state;
		const { books } = this.props;

    return (
			<div>
				<h1>Book Collection</h1>
				{renderedBooks.map((book) => {
					return ( <Book
						book={book}
					/>)
				})}
			</div>
		);
  }
}

export default BookCollection;