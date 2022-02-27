import { AddIcon, DeleteIcon, EditIcon, UpDownIcon } from '@chakra-ui/icons';
import {
  Text,
  Button,
  useToast,
  Menu,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuOptionGroup,
  useDisclosure,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { useState } from 'react';
import { removeList } from 'store/slices/listSlice';
import { IList } from 'types';
import ListModal from './ListModal';

interface Props {
  currentList: IList;
  setListId: (listId: string) => void;
}

const ListMenu = ({ setListId, currentList }: Props) => {
  const { lists } = useAppSelector((state) => state.lists);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [type, setType] = useState('save');

  const clickAddHandler = () => {
    setType('save');
    onOpen();
  };

  const clickRenameHandler = () => {
    setType('rename');
    onOpen();
  };

  const clickRemoveHandler = () => {
    const isLastList = lists.length === 1;
    if (isLastList) {
      toast({
        title: `Can't delete: ${currentList.title}.`,
        description: 'There must be at least one to-do list.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    dispatch(removeList({ id: currentList.id }));
    const nextList: IList =
      lists.find((list) => list.id !== currentList.id) || lists[0];
    setListId(nextList.id);
  };

  return (
    <>
      <Menu isLazy strategy="fixed">
        <MenuButton
          h={12}
          maxW="sm"
          bg="transparent"
          as={Button}
          overflow="hidden"
          rightIcon={<UpDownIcon />}
        >
          <Text fontSize={['xl', '4xl']}>{currentList.title}</Text>
        </MenuButton>
        <MenuList>
          <MenuOptionGroup defaultValue={currentList.id}>
            {lists.map((list) => (
              <MenuItemOption
                value={list.id}
                onClick={() => setListId(list.id)}
                key={list.id}
              >
                {list.title}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
          <MenuGroup>
            <MenuDivider />
            <MenuItem icon={<EditIcon />} onClick={clickRenameHandler}>
              Rename
            </MenuItem>
            <MenuItem icon={<DeleteIcon />} onClick={clickRemoveHandler}>
              Delete
            </MenuItem>
            <MenuDivider />
            <MenuItem icon={<AddIcon />} onClick={clickAddHandler}>
              New list
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
      <ListModal
        isOpen={isOpen}
        onClose={onClose}
        type={type}
        listId={currentList.id}
      />
    </>
  );
};

export default ListMenu;
