import { FormControl, FormLabel } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  title: string;
}

const FormField = ({ children, title }: IProps) => {
  return (
    <FormControl>
      <FormLabel>{title}</FormLabel>
      {children}
    </FormControl>
  );
};

export default FormField;
