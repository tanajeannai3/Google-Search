import React, { Component } from 'react';
import { Row, Col } from "../../components/Grid";
import {List, BookListItem } from "../../components/List";
import axios from "axios";
import EmptyList from '../../components/EmptyList';
import RmvBookBtn from '../../components/RmvBtn';
import { toast } from 'react-toastify';


class Saved extends Component {
  state = {
    savedBooks: [],
    initialized: true
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    axios.get("/api/books")
      .then(res => {
        this.setState({ savedBooks: res.data })
      })
      .catch((err => console.log(err)))
  }

  deleteFromDB = id => {
    console.log(id);

    axios.delete(`/api/books/${id}`)
      .then( () => {
        toast.error('Book Deleted');
        this.getBooks();
        
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Row>
          <Col size="md-12">
            {this.state.savedBooks.length > 0 ?
              <List>
                {this.state.savedBooks.map(book => {
                  console.log(book)
                  return (
                    <div>
                      <BookListItem
                        key={book._id}
                        authors={book.authors}
                        title={book.title}
                        synopsis={book.synopsis}
                        link={book.link}
                        thumbnail={book.thumbnail}
                      // delete={()=> this.deleteFromDB(book._id)}
                      />
                      <RemoveBookBtn
                        onClick={() => this.deleteFromDB(book._id)}
                      />
                    </div>
                  )

                })}
              </List>
              :
              <EmptyList />
            }
          </Col>
        </Row>
      </div>
    );
  }
}

export default Saved;