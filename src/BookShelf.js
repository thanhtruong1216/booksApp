import React, {Component} from 'react'
import Book from './Book'
import './BookShelf.css'
class BookShelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }

  toggleButton = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    const show = this.state.show;
    const { onShelfChange, bookshelfTitle, countbook, bookshelfBooks } = this.props;
    let bookNodes = null;
    if(show) {
      bookNodes = (
        <ol className="books-grid">
          { bookshelfBooks
            .map((book) => {
              return <li key={book.id}>
                <Book book={book} onShelfChange={onShelfChange}/>
              </li>
            })
          }
        </ol>
      )
    }
    const showHideButton = <button className="show-hide-button" onClick={this.toggleButton}>{show ? 'Hide book' : 'Show book'}</button> 
    return(
       <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
        <h3>{countbook}</h3>
        {showHideButton}
        <div className="bookshelf-books">
          {bookNodes}
        </div>
      </div>
    );
  }
}


export default BookShelf