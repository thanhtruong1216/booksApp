import React from 'react';
import {Link} from 'react-router-dom';
import BookShelf from './BookShelf';
import './ListBooks.css';
import PropTypes from 'prop-types';

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

function ListBooks(props) {
  const { onShelfChange, books } = props;
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

ListBooks.propTypes = {
  onShelfChange: PropTypes.func.isRequired, 
  books: PropTypes.arrayOf(
    PropTypes.shape({
      shelf: PropTypes.oneOf(['currentlyReading', 'wantToRead', 'read', 'none'])
    })
  ).isRequired
};
export default ListBooks;