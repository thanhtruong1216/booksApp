import React, {Component} from 'react'
import Book from './Book'
import './BookShelf.css'
class BookShelf extends Component {
  render() {
    return(
       <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
        <h3>{this.props.countbook}</h3>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { this.props
              .bookshelfBooks
              .map((book) => {
                return <li key={book.id}>
                  <Book book={book} onShelfChange={this.props.onShelfChange}/>
                </li>
              })
            }
          </ol>
        </div>
      </div>
    );
  }
}


export default BookShelf