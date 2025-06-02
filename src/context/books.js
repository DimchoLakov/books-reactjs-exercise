import { createContext, useCallback, useState } from "react";
import { getAllBooks, updateBook, deleteBook, createBook } from "../../api";

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
        const allBooks = await getAllBooks();
        setBooks(allBooks);
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

    const valueToShare = {
        books,
        fetchBooks,
        createNewBook,
        editBookById,
        deleteBookById
    };

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export { Provider };
export default BooksContext;