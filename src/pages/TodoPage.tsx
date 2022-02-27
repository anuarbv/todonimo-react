import React, { FC, useState } from 'react';
import { Button, Flex, useDisclosure } from '@chakra-ui/react';
import TodoList from 'components/Todo/TodoList';
import { addTodo } from 'store/slices/todoSlice';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { IList } from 'types';
import TodoModal from 'components/Todo/TodoModal';

const Todo: FC = () => {
  const dispatch = useAppDispatch();
  const { lists } = useAppSelector((state) => state.lists);
  const [listId, setListId] = useState(lists[0].id);
  const currentList = useAppSelector<IList>(
    (state) => state.lists.lists.find((list) => list.id === listId) || lists[0]
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const saveTodo = (title: string, listId: string) => {
    dispatch(addTodo(title, listId));
  };

  return (
    <Flex flexDirection="column" as="main">
      <TodoList currentList={currentList} setListId={setListId} />
      <Button onClick={onOpen}>+</Button>
      <TodoModal
        isOpen={isOpen}
        onClose={onClose}
        lists={lists}
        currentList={currentList}
        saveCallback={saveTodo}
      />
    </Flex>
  );
};

export default Todo;
