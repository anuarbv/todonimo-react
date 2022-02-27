import { Select } from '@chakra-ui/react';
import { ChangeEventHandler } from 'react';
import { capitalize } from 'utils/capitalize';

interface Props {
  options: string[];
  changeHandler: ChangeEventHandler;
}

const TodoFilter = ({ options, changeHandler }: Props) => {
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
