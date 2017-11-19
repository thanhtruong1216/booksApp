import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BookShelf from './BookShelf';
import './ListBooks.css';

const BOOK_LISTS = [
  {
    title: 'Currently Reading',
    shelfKey: 'currentlyReading',
  },
  {
    title: 'Want to Read',
    shelfKey: 'wantToRead',
  },
  {
    title: 'Read',
    shelfKey: 'read',
  },
];

class ListBooks extends Component {
  render() {
    const { onShelfChange, books } = this.props;
    return(
      <div className="list-books">
        <div>
          { BOOK_LISTS.map(({title, shelfKey}) => {
              const bookListBooks = books.filter((book) => book.shelf === shelfKey);
              return (
                <BookShelf
                  key={shelfKey}
                  numberOfBook={bookListBooks.length}
                  bookshelfTitle={title}
                  bookshelfBooks={bookListBooks}
                  onShelfChange={onShelfChange}  
                />
              )
            })
          }
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
    </div>
    );
  }
}
export default ListBooks