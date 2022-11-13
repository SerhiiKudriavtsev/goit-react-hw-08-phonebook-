import React from 'react';

import { useSelector } from 'react-redux';
import { getUserName } from 'redux/slice/AuthSlise';
import { useUserLogoutMutation } from 'redux/api/AuthApi';

import { Box, Flex, Text, Button } from '@chakra-ui/react';

const UserMenu = () => {
  const name = useSelector(getUserName);
  const [userLogout] = useUserLogoutMutation();

  return (
    <Box>
      <Flex h={16} alignItems={'center'} justifyContent={'center'}>
        <Text fontSize="20px" color="#ffff00" as="u" mr={10} textShadow='#000080 1px 0 0px, #000080 0 1px 0px, #000080 -1px 0 0px, #000080 0 -1px 0px'
          >
          Hello! {name}
        </Text>
        <Button
          type="button"
          onClick={() => {
            userLogout();
          }}
          w={50}
          _hover={{
          transform:"scale(1.02)",
          color: "red",
          fontWeight: "bold"}}
        >
          LogOut
        </Button>
      </Flex>
    </Box>
  );
};

export default UserMenu;