import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
  Select,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IList } from 'types';

interface ICreationModalProps {
  items: IList[];
  isOpen: boolean;
  currentList: IList;
  onClose: () => void;
  saveCallback: (value: string, listId: string) => void;
}

const CreationModal = ({
  items,
  isOpen,
  onClose,
  currentList,
  saveCallback,
}: ICreationModalProps) => {
  const [value, setValue] = useState('');
  const [listId, setListId] = useState(currentList.id);

  const clickHandler = () => {
    saveCallback(value, listId);
    onClose();
    setValue('');
    setListId(currentList.id);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Title"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                maxLength={56}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>List</FormLabel>
              <Select
                defaultValue={listId}
                onChange={(e) => setListId(e.target.value)}
              >
                {items.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.title}
                  </option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={clickHandler} mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreationModal;
