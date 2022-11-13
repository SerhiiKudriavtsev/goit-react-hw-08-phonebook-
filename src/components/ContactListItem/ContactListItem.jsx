import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDeleteContactsMutation } from 'redux/api/ContactsApi';

import { toast } from 'react-toastify';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

const ContactListItem = ({ name, number, id }) => {
  const [deleteContacts, { isLoading: isDeleting, isSuccess, error }] =
    useDeleteContactsMutation();

  useEffect(() => {
    isSuccess && toast.info(` ${name} was removed from the phone book`);
    error && toast.error('oops something went wrong');
  }, [isSuccess, name, error]);

  return (
    <Box key={id} _odd={{ bg: "#edebeb" }} _even={{ bg: "#d9d4d4" }} fontWeight="bold" fontSize='18px'>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="400px"
        p="5px"
        >
        <Text w="45%" p="5px">{name}</Text>
        <Text w="30%" p="5px">{number}</Text>
        <Button
          type="button"
          onClick={() => deleteContacts(id)}
          disabled={isDeleting}
          p="5px"
          br="8px"
          fontWeight="bold"
          border='1px' borderColor='black'
          cursor="pointer"
          _hover={{
          transform:"scale(1.02)",
          color: "red",
          fontWeight: "bold"}}
        >
          {isDeleting ? 'Delete...' : 'Delete'}
        </Button>
      </Flex>
    </Box>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;