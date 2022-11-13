import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/slice/FilterSlice';
import { Stack, Input, Text } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const onFilterChange = event => {
    dispatch(setFilter(event.currentTarget.value.toLowerCase()));
  };

  return (
    <Stack
      w="400px"
        mx="auto"
        spacing={4}
        border= '1px solid black'
        borderRadius='8px'
        display='flex'
        p='20px'
        mb='30px'>
      <Text
      fontSize={28}
        color="white"
        textShadow='#000 1px 0 0px, #000 0 1px 0px, #000 -1px 0 0px, #000 0 -1px 0px'
        filter='drop-shadow(3px 3px 2px #000)'
      >
        Find contacts by name
      </Text>
      <Input
        onChange={onFilterChange}
        value={filterValue}
        type="text"
        name="filter"
        placeholder='Enter name'
        bg='gray.40'
      />
    </Stack>
  );
};

export default Filter;