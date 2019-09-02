import React, { Component } from "react";
import './Book.css';

class Book extends Component {

  render() {
		const {book} = this.props;
		const bookKeys = Object.keys(book);

    return (
			<div className="book">
					{bookKeys.map((key) => {
						const value = book[key];
						return (
							<div>
								<span>{`${key}:`}</span>
								<span>{value}</span>
							</div>
						)
					})}
					{/* render all the properties of the book */}
			</div>
		);
  }
}

export default Book;