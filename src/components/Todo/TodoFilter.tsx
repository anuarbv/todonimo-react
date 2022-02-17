import { Select } from '@chakra-ui/react';
import { ChangeEventHandler } from 'react';
import { capitalize } from 'utils/capitalize';

interface ITodoFilterProps {
  options: string[];
  changeHandler: ChangeEventHandler;
}

const TodoFilter = ({ options, changeHandler }: ITodoFilterProps) => {
  return (
    <Select onChange={changeHandler} maxWidth="max-content">
      {options.map((option) => (
        <option value={option} key={option}>
          {capitalize(option)}
        </option>
      ))}
    </Select>
  );
};

export default TodoFilter;
