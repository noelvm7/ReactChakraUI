import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Header from "./components/Header";
import { useColorMode, Button} from '@chakra-ui/react';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <div>
    <ChakraProvider>
      <Box  bg='darkblue' w='100%' p={2} color='white' display='flex' justifyContent='space-between'>
      Laboratorio: Chakra UI
      <Button onClick={toggleColorMode}> 
       {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      </Box>
      <Header />
      <Box/>

    </ChakraProvider>
    </div>
  )
}

export default App
