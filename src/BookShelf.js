import React, {Component} from 'react';
import Book from './Book';
import './BookShelf.css';
import './ListBooks';
import PropTypes from 'prop-types';

class BookShelf extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    }
  }

  static propTypes = {
    numberOfBook: PropTypes.number.isRequired,
    onShelfChange: PropTypes.func.isRequired,
    bookshelfBooks: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired
      })
    ).isRequired
  };
  
  toggleButton = () => {
    this.setState({
      show: !this.state.show
    })
  }

  bookCountHumanizeString() {
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

  renderShowHideButton() {
    const { show } = this.state;
    const { numberOfBook } = this.props;
    return numberOfBook > 0 &&  (
      <button className="show-hide-button" 
        onClick={this.toggleButton}>{show ? 'Hide book' : 'Show book'}
      </button> 
    );
  }

  render() {
    const { bookshelfTitle } = this.props;
    
    return(
       <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
        <h3>{this.bookCountHumanizeString()}</h3>
        {this.renderShowHideButton()}
        <div className="bookshelf-books">
          {this.renderBooks()}
        </div>
      </div>
    );
  } 
}
export default BookShelf;