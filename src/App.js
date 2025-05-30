import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import { getAllBooks, createBook, updateBook, deleteBook } from '../api';

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const allBooks = await getAllBooks();
      setBooks(allBooks);
    };

    fetchBooks();
  }, []);

  const editBookById = async (id, newTitle) => {
    const updatedBook = await updateBook(id, newTitle);
    setBooks(previousBooks => previousBooks.map(book => {
      return book.id === id ? updatedBook : book
    }));
  };

  const deleteBookById = async (id) => {
    await deleteBook(id);
    setBooks(previousBooks => previousBooks.filter(book => {
      return book.id !== id;
    }));
  };

  const createNewBook = async (title) => {
    const newBook = await createBook(title);
    setBooks(previousBooks => [...previousBooks, newBook]);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createNewBook} />
    </div>
  );
}

export default App;
