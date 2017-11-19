import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BookShelf from './BookShelf';
import './ListBooks.css';

class ListBooks extends Component {
  render() {
    const { onShelfChange, books } = this.props;
    const currentlyReadingBooks = books.filter((book) => book.shelf === 'currentlyReading');
    const wantToReadBooks = books.filter((book) => book.shelf === 'wantToRead');
    const readBooks = books.filter((book) => book.shelf === 'read');

    return(
      <div className="list-books">
        <div>
          <BookShelf
            numberOfBook={currentlyReadingBooks.length}
            bookshelfTitle='Currently Reading'
            bookshelfBooks={currentlyReadingBooks}
            onShelfChange={onShelfChange}  
          />
          <BookShelf
            numberOfBook={wantToReadBooks.length}
            bookshelfTitle='Want to Read'
            bookshelfBooks={wantToReadBooks}
            onShelfChange={onShelfChange}
          />
       
          <BookShelf 
            numberOfBook={readBooks.length}
            bookshelfTitle='Read' 
            bookshelfBooks={readBooks}
            onShelfChange={onShelfChange}
          />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
    </div>
    );
  }
}
export default ListBooks