import {
  Checkbox,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { useAppDispatch } from 'hooks/useRedux';
import { removeTodo, updateTodo } from 'store/slices/todoSlice';
import { ITodo } from 'types';
import { DeleteIcon } from '@chakra-ui/icons';

const TodoItem = (todo: ITodo) => {
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(todo.completed);
  const hoverBgColor = useColorModeValue('gray.100', 'whiteAlpha.200');

  const changeCheckboxHandler = (e: ChangeEvent) => {
    console.log(e.target);
    setIsChecked(!isChecked);
    setTimeout(() => {
      dispatch(updateTodo({ ...todo, completed: !todo.completed }));
    }, 1000);
  };

  const clickRemoveHandler = () => {
    dispatch(removeTodo(todo));
  };

  return (
    <Flex
      w="full"
      p={4}
      mb={2}
      boxShadow="md"
      borderRadius="md"
      justifyContent="space-between"
      _hover={{
        bg: hoverBgColor,
      }}
    >
      <Checkbox
        onChange={changeCheckboxHandler}
        isChecked={isChecked}
        textAlign="left"
        overflow="hidden"
        {...(todo.completed ? { as: 'del', color: 'blackAlpha.500' } : null)}
      >
        <Text>{todo.title}</Text>
      </Checkbox>
      <IconButton
        aria-label="delete todo"
        icon={<DeleteIcon />}
        color="red.300"
        onClick={clickRemoveHandler}
      />
    </Flex>
  );
};

export default TodoItem;
