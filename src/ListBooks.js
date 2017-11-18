import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'
import './ListBooks.css'

class ListBooks extends Component {
  _countBook(numberOfBook) {
      if(numberOfBook === 0) {
        return 'No book yet'
      } else if (numberOfBook === 1) {
        return 'Only 1 book'
      } else {
        return `${numberOfBook} books`
      }
    }

  render() {
    const { onShelfChange } = this.props;
    const currentlyReadingBooks = this.props.books.filter((book) => book.shelf === 'currentlyReading')
    const wantToReadBooks = this.props.books.filter((book) => book.shelf === 'wantToRead')
    const readBooks = this.props.books.filter((book) => book.shelf === 'read')
    return(
      <div className="list-books">
        <div>
          <BookShelf
            countbook={this._countBook(currentlyReadingBooks.length)}
            bookshelfTitle='Currently Reading'
            bookshelfBooks={currentlyReadingBooks}
            onShelfChange={onShelfChange}  
          />
       
          <BookShelf
            countbook={this._countBook(wantToReadBooks.length)}
            bookshelfTitle='Want to Read'
            bookshelfBooks={wantToReadBooks}
            onShelfChange={onShelfChange}
          />
       
          <BookShelf 
            countbook={this._countBook(readBooks.length)}
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