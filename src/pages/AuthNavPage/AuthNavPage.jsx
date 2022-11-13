import { NavLink } from 'react-router-dom';

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

import Image from '../../images/phoneBook.jpg';

const WithBackgroundImage = () => {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={`url(${Image})`}
      backgroundSize={'cover'}
      backgroundPosition={'center -200px'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            Welcome to the phone book. <br />
            If you are a new user, please register. <br />
            If you are a registered user, please log in with your email and password. <br />
            Pleasant use.
          </Text>
          <Stack
            direction={'row'}
            w={'full'}
            justify={'center'}>
            <Button
              as={NavLink}
              to="register"
              bg={'gray.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'gray.500' }}
            >
              Registration
            </Button>
            <Button
              as={NavLink}
              to="login"
              bg={'gray.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'gray.500' }}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default WithBackgroundImage;