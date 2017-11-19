import React, {Component} from 'react';
import Book from './Book';
import './BookShelf.css';
import './ListBooks'
class BookShelf extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    }
  }

  toggleButton = () => {
    this.setState({
      show: !this.state.show
    })
  }

  bookCountString() {
    const { numberOfBook } = this.props;
    if(numberOfBook === 0) {
      return 'No book to show'
    } else if (numberOfBook === 1) {
      return 'Only 1 book'
    } else {
      return `${numberOfBook} books`
    }
  }

  renderBooks() {
    const { show } = this.state;
    const { onShelfChange, bookshelfBooks } = this.props;
    let bookNodes = null;
    if(show) {
      bookNodes = (
        <ol className="books-grid">
          { bookshelfBooks.map((book) => {
            return <li key={book.id}>
              <Book book={book} onShelfChange={onShelfChange}/>
            </li>
            })
          }
        </ol>
      )
    }
    return bookNodes;
  }

  render() {
    const { show } = this.state;
    const renderBooks = this.renderBooks();
    const { bookshelfTitle, numberOfBook } = this.props;
    const showHideButton = (
      <button className="show-hide-button" 
        onClick={this.toggleButton}>{show ? 'Hide book' : 'Show book'}
      </button> 
    );

    return(
       <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
        <h3>{this.bookCountString()}</h3>
        {numberOfBook > 0 && showHideButton}
        <div className="bookshelf-books">
          {renderBooks}
        </div>
      </div>
    );
  } 
}


export default BookShelf