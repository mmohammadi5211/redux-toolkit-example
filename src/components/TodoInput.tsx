import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import todos, { addTodo } from '../store/todos';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue('');
  };
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <label htmlFor='todoInput'>Enter Todo Here </label>
        <input
          id='todoInput'
          type='text'
          value={inputValue}
          onChange={handleInput}
        />
        <button type='submit'>Add Todo</button>
      </form>
    </>
  );
};

export default TodoInput;
