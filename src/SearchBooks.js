import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import './SearchBooks.css'
class SearchBooks extends Component {
  state = {
    result: []
  }
  search= (event) => {
    const query= event.target.value;
    if (!query) {
      this.setState({result: []});
      return;
    }
    BooksAPI
      .search(query, 10)
      .then(result => {
        if (!result || result.error) {
          this.setState({result: []});
          return;
        }
        result = result.map((book) => {
          const bookOnShelf = this
              .props
              .books
              .find(b => b.id === book.id);
          book.shelf = bookOnShelf
              ? bookOnShelf.shelf
              : "null";
          return book;
        });

        this.setState({result});
      });
    };
  render() {
    return (
      <div >
        <div className="search-input-container">
          <Link className="close-search-arrow" to="/">Close</Link>
          <input classname="search-input" type="text" placeholder="Search by title or author" onChange={this.search} />
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.result && this
              .state
              .result
              .map((book, index) => (
                <li key={book.id + index}>
                  <Book book={book} onShelfChange={this.props.onShelfChange}/>
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks