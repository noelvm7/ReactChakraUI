import React from "react";
import { Box, Heading, Button, Flex, Stack } from "@chakra-ui/react";

const bgImage = "https://cdn.pixabay.com/photo/2021/05/31/02/03/sunset-6297462_1280.jpg"
const miniBannerImage = "https://tourismmedia.italia.it/is/image/mitur/20210319144725-ciclismo-2"

const Header = () => {
  return (
    
    <Box
    m={'20'}
    h='60vh'
    w='130vh'
    color='white'
    bgImage={`url(${bgImage})`}
    bgRepeat='no-repeat'
    bgSize='cover'
    position= 'relative'
    >
      <Flex
      direction='column'
      alignItems='center'
      justify='center'
      h='100%'
      bg='rgb(0 0 0 / 50%)'
      p={['0 10$', null, '0 20%']}
      >
      <Heading variant= 'banner'>DOMINA EL TERRENO</Heading>
      <Stack direction={{ base: 'column', sm: 'row' }} spacing='40px' mt='30px'>
      <Button variant='outline' size='lg'>Ver detalles</Button>
      <Button variant='outline' size='lg'>Ver Video</Button>
      </Stack>
      
    </Flex>
    <br/>

    <Box
      bgImage={`url(${miniBannerImage})`} 
      bgRepeat='no-repeat'
      bgSize='cover'
      width='200px' 
      height='100px' 
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      color='white'
      p='10px'
      
    >
      <Heading fontSize='16px' textAlign='center'>DOMINA EL TERRENO</Heading>
      <Stack direction='row' mt='10px'>
        <Button variant='outline' size='sm'>Ver detalles</Button>
        <Button variant='outline' size='sm'>Ver Video</Button>
      </Stack>
    </Box>
    </Box>
  );
};

export default Header;