import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import './SearchBooks.css';
import PropTypes from 'prop-types';

class SearchBooks extends Component {
  state = {
    result: []
  }

  static propTypes = {
    onShelfChange: PropTypes.func,
    books: PropTypes.arrayOf(PropTypes.shape({
      shelf: PropTypes.oneOf(['currentlyReading', 'wantToRead', 'read', 'none'])
    })) 
  };
  
  search = e => {
    const { value: query } = e.target;
    const { books } = this.props;
    query && BooksAPI.search(query, 10).then(result => {
      !result || result.error && this.setState({result: []});
      result = result.map(book => {
        const bookOnShelf = books.find(b => b.id === book.id);
        book.shelf = bookOnShelf ? bookOnShelf.shelf : null;
        return book;
      });
      this.setState({ result });
    });
  }

  render() {
    const { result } = this.state;
    const { onShelfChange } = this.props;

    return (
      <div >
        <div className="search-input-container">
          <Link className="close-search-arrow" to="/">Close</Link>
          <input className="search-input" type="text" placeholder="Search by title or author" onChange={this.search} />
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {result && result.map((book) => (
              <li key={book.id}>
                <Book book={book} onShelfChange={onShelfChange}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
