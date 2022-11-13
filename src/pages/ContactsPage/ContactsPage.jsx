import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getLoggedin } from 'redux/slice/AuthSlise';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';

import { Heading, Box, Flex } from '@chakra-ui/react';
import Image from 'images/phoneBook.jpg';

const ContactsView = () => {
  const isLogdedin = useSelector(getLoggedin);
  return (
    <Box pb={5}
      w={'full'}
      backgroundImage={`url(${Image})`}
      backgroundSize={'cover'}
      backgroundPosition={'center -120px'}
    >
      <Flex
        w="400px"
        mx="auto"
        my="6"
        flexDirection={'column'}
      >
        {!isLogdedin && <Navigate to="/" replace={true} />}
        <Heading
          mb={10}
          color="white"
          textShadow='#000 1px 0 0px, #000 0 1px 0px, #000 -1px 0 0px, #000 0 -1px 0px'
          filter= 'drop-shadow(3px 3px 2px #000)'
        >
          Phonebook
        </Heading>
        <ContactForm />
        <Heading
          mb={10}
          color="white"
          textShadow='#000 1px 0 0px, #000 0 1px 0px, #000 -1px 0 0px, #000 0 -1px 0px'
          filter='drop-shadow(3px 3px 2px #000)'
        >
          Contacts
        </Heading>
        <Filter />
        <ContactList />
      </Flex>  
    </Box>
  );
};

export default ContactsView;