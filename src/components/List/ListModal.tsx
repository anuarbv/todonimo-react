import React, { useRef } from 'react';
import { Input } from '@chakra-ui/react';
import FormField from 'components/UI/Form/FormField';
import ModalBase from 'components/UI/Modal/ModalBase';
import { useAppDispatch } from 'hooks/useRedux';
import { addList, updateList } from 'store/slices/listSlice';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  type: string;
  listId: string;
}

const ListModal = ({ isOpen, onClose, listId, type }: Props) => {
  const dispatch = useAppDispatch();
  const initialRef = useRef<HTMLInputElement>(null);

  let modalTitle = type === 'save' ? 'Create new to-do list' : 'Rename:';

  const saveClickHandler = () => {
    const value = initialRef.current?.value;
    if (!value) return;
    if (type === 'rename') {
      dispatch(updateList({ id: listId, title: value }));
    } else {
      dispatch(addList(value));
    }
    onClose();
  };

  return (
    <ModalBase
      isOpen={isOpen}
      onClose={onClose}
      modalTitle={modalTitle}
      saveClickHandler={saveClickHandler}
    >
      <FormField title="List">
        <Input placeholder="Title" ref={initialRef} />
      </FormField>
    </ModalBase>
  );
};

export default ListModal;
