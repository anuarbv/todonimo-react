import { FormControl, FormLabel } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
}

const FormField = ({ children, title }: Props) => {
  return (
    <FormControl>
      <FormLabel>{title}</FormLabel>
      {children}
    </FormControl>
  );
};

export default FormField;
