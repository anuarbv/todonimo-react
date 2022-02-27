import { Input, Select } from '@chakra-ui/react';
import FormField from 'components/UI/Form/FormField';
import ModalBase from 'components/UI/Modal/ModalBase';
import { useState } from 'react';
import { IList } from 'types';

interface Props {
  lists: IList[];
  isOpen: boolean;
  currentList: IList;
  onClose: () => void;
  saveCallback: (value: string, listId: string) => void;
}

const TodoModal = ({
  lists,
  isOpen,
  onClose,
  currentList,
  saveCallback,
}: Props) => {
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
      <ModalBase
        isOpen={isOpen}
        onClose={onClose}
        saveClickHandler={clickHandler}
        modalTitle="Create todo"
      >
        <FormField title="Title">
          <Input
            placeholder="Title"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            maxLength={56}
          />
        </FormField>
        <FormField title="List">
          <Select
            defaultValue={listId}
            onChange={(e) => setListId(e.target.value)}
          >
            {lists.map((list) => (
              <option value={list.id} key={list.id}>
                {list.title}
              </option>
            ))}
          </Select>
        </FormField>
      </ModalBase>
    </>
  );
};

export default TodoModal;
