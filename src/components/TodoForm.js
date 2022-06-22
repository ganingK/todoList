import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = z => {
    setInput(z.target.value);
  };

  const handleSubmit = z => {
    z.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
    {props.edit ? (
      <>
        <input
          placeholder='Perbaharui'
          value={input}
          onChange={handleChange}
          name='text'
          ref={inputRef}
          className='todo-input edit'
        />
        <button onClick={handleSubmit} className='todo-button edit'>
          Update
        </button>
      </>
    ) : (
      <>
        <input
          placeholder='komentar'
          value={input}
          onChange={handleChange}
          name='text'
          className='todo-input'
          ref={inputRef}
        />
        <button onClick={handleSubmit} className='todo-button'>
          Enter
        </button>
      </>
    )}
    </form>
  );
}

export default TodoForm;
