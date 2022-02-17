import { ChangeEvent, ReactNode, useState } from 'react';
import { HStack } from '@chakra-ui/react';
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';
import ListMenu from 'components/List/ListMenu';
import { useAppSelector } from 'hooks/useRedux';
import { IList, ITodo } from 'types';

interface ITodoListProps {
  currentList: IList;
  setListId: (listId: string) => void;
  children?: ReactNode;
}

const TodoList = ({ currentList, setListId }: ITodoListProps) => {
  const todos = useAppSelector<ITodo[]>((state) =>
    state.todos.todos.filter((todo: ITodo) => todo.listId === currentList.id)
  );
  const [filter, setFilter] = useState(false);

  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const isCompleted = e.target.value === 'completed';
    setFilter(isCompleted);
  };

  return (
    <>
      <HStack mb={4} justifyContent="space-between">
        <ListMenu setListId={setListId} currentList={currentList} />
        <TodoFilter
          options={['open', 'completed']}
          changeHandler={changeHandler}
        />
      </HStack>
      {todos.map((todo: ITodo) => {
        if (filter !== todo.completed) {
          return null;
        }
        return (
          <TodoItem
            id={todo.id}
            key={todo.id}
            title={todo.title}
            listId={todo.listId}
            completed={todo.completed}
          />
        );
      })}
    </>
  );
};

export default TodoList;
