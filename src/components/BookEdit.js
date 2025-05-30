import { useState, useEffect, useRef } from 'react';

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} ref={inputRef} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
