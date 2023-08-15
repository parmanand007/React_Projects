import React from 'react'
import { Flex,Box,Container, useDisclosure} from "@chakra-ui/react";
import Sidenav from './SideNav';
import TopNav from './TopNav';
import SideDrawer from './SideDrawer';

const DashboardLayout = ({title,children}) => {
const {isOpen,onClose,onOpen}= useDisclosure()

  return (
    <div>
<Flex>
        <Box
            display ={{
                base:"none",
                lg:"flex"
            }}
        > <Sidenav  /></Box>
        <SideDrawer  isOpen = {isOpen} onClose={onClose}/>
        <Box flexGrow={1}>
        <TopNav  onOpen={onOpen} title={title}/>
        <Container overflowX="hidden" overflowY="auto"
        h="calc(100vh)"
        mt="6" maxW="70rem"px="4">
           {children}
        </Container>
        </Box>
            
        </Flex>
                  
    </div>
  )
}

export default DashboardLayout
