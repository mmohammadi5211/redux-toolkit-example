import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { deleteTodo, sort } from '../store/todos';

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleSort = () => {
    dispatch(sort());
  };
  return (
    <>
      <div>
        {todos.map((todo) => (
          <div>
            <input type='checkbox' />
            <span>{todo.message}</span>
            <button
              type='button'
              onClick={() => dispatch(deleteTodo(todo.id))}>
              X
            </button>
          </div>
        ))}
        <button onClick={handleSort}>Sort em</button>
      </div>
    </>
  );
};

export default TodoList;
