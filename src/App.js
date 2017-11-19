import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books})
    })
  }

  onShelfChange = (book, shelf) => {
    book.shelf = shelf
    const { books } = this.state;
    this.setState(state => ({books: books.filter(b => b.id !== book.id).concat([book])}))
    BooksAPI.update(book, shelf)
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ListBooks books={books} onShelfChange={this.onShelfChange}/>
          </div>
          )}
        />

        <Route path="/search" render={({history}) => (
          <SearchBooks
          onShelfChange={this.onShelfChange}
          history={history}
          books={this.state.books}/>
          )}
        />
      </div>
    )
  }
}

export default BooksApp
