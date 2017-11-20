import React, { Component } from 'react';
import './Book.css';
import PropsTypes from 'prop-types';

const DEFAULT_IMAGE_URL = 'https://www.123freevectors.com/wp-content/uploads/new/icon/102-red-book-icon-free-vector-illustration.png';

class Book extends Component {
  static propsTypes = {
    book: PropsTypes.string.isRequired,
    onShelfChange: PropsTypes.func.isRequired
  }
  
  shelfChanger = e => {
    const { value: shelf } = e.target;
    const { book, onShelfChange } = this.props;
    onShelfChange(book, shelf);
  };

  render() {
    const { book } = this.props;
    const image = book.imageLinks ? book.imageLinks.thumbnail : DEFAULT_IMAGE_URL;
    
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{backgroundImage: `url("${ image}")`}}/>
          <div className="book-shelf-changer">
            <select onChange={this.shelfChanger} value={book.shelf}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
           </div>
         </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }   
}
export default Book;