import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import React, { ChangeEvent, FC, useState } from 'react';
import { addList } from 'store/slices/listSlice';
import { addTodo, updateTodo } from 'store/slices/todoSlice';
import { IList, ITodo } from 'types';

const Todo: FC = () => {
  const { lists } = useAppSelector((state) => state.lists);
  const [currentList, setCurrentList] = useState<IList>(lists[0]);
  const todos = useAppSelector<ITodo[]>((state) =>
    state.todos.todos.filter((todo: ITodo) => todo.listId === currentList.id)
  );
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    const title = prompt() || 'deleteMe';
    const listId = currentList.id;

    dispatch(addTodo(title, listId));
  };

  const changeHanlder = (todo: ITodo) => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const selectChangeHanlder = (e: ChangeEvent<HTMLSelectElement>) => {
    const list = lists.find((list) => list.id === e.target.value) || lists[0];
    console.log(list.title);
    setCurrentList(list);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 400,
      }}
    >
      <div>
        <select onChange={selectChangeHanlder}>
          {lists.map((list) => (
            <option key={list.id} value={list.id}>
              {list.title}
            </option>
          ))}
        </select>
        <button onClick={() => dispatch(addList(prompt()))}>Add List</button>
      </div>
      {todos.map((todo) => (
        <label htmlFor="todo" key={todo.id}>
          <input
            name="todo"
            type="checkbox"
            checked={todo.completed}
            onChange={() => changeHanlder(todo)}
          />
          {todo.title}
        </label>
      ))}
      <button onClick={clickHandler}>Add Todo</button>
    </div>
  );
};

export default Todo;
