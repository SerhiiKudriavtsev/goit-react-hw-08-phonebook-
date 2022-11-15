import { useState, useEffect } from 'react';

import {
  useAddContactsMutation,
  useGetContactQuery,
} from 'redux/api/ContactsApi';

import { toast } from 'react-toastify';
import { Stack, Input, Button, Text } from '@chakra-ui/react';

const ContactForm = () => {
  const [addContacts, { isLoading, isSuccess, error }] =
    useAddContactsMutation();
  const { data } = useGetContactQuery();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nameForToast, setnameForToast] = useState('');

  useEffect(() => {
    isSuccess &&
      toast.success(` ${nameForToast} added to contact book`, {
        autoClose: 800,
      });
    error && toast.error('oops something went wrong');
  }, [error, isSuccess, nameForToast]);

  const handleInputChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setnameForToast(name);
    data.every(item => item.name.toLowerCase() !== name.toLowerCase())
      ? addContacts({
          name: name,
          number: number,
        })
      : toast.error(`${name} is alredy in contacts!!!`);
    // setName('');
    // setNumber('');
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Stack
        w="400px"
        mx="auto"
        spacing={4}
        border= '1px solid black'
        borderRadius='8px'
        display='flex'
        p='20px'
        mb='30px'
      >
        <Text
          fontSize={28}
          color="white"
          textShadow='#000 1px 0 0px, #000 0 1px 0px, #000 -1px 0 0px, #000 0 -1px 0px'
          filter='drop-shadow(3px 3px 2px #000)'
        >
          Name
        </Text>

        <Input
          onChange={handleInputChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder='Boris Jonsoniuk'
          bg='gray.40'
        />

        <Text
          fontSize={28}
          color="white"
          textShadow='#000 1px 0 0px, #000 0 1px 0px, #000 -1px 0 0px, #000 0 -1px 0px'
          filter='drop-shadow(3px 3px 2px #000)'
        >
          Number
        </Text>
        <Input
          onChange={handleInputChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="+38 050 777 77 77"
          bg='gray.40'
        />
        <Button
          colorScheme="gray"
          type="submit"
          disabled={number && name ? false : true}
        >
          {isLoading ? 'Add Contact...Spiner' : 'Add Contact'}
        </Button>
      </Stack>
    </form>
  );
};

export default ContactForm;