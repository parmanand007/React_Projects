import React from 'react'
import { HStack } from "@chakra-ui/react"
import {FaUserTie,FaBars} from "react-icons/fa"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex,Container,Heading,
    Button,
    Box,
    Icon
      } from '@chakra-ui/react'
const TopNav = ({title,onOpen}) => {
  return (
    <Box px="4" bg="white">
        <HStack maxW="70rem" mx="auto" justify="space-between" h="16" > 
        <Icon as = {FaBars} onClick={onOpen} display={{
        base:"block",
        lg:"none"
        }}/>
    <Heading fontWeight="medium" fontSize="28px">
    {title}
    </Heading>
    <Menu>
  <MenuButton >
    <Icon as ={FaUserTie} fontSize="24px" />
  </MenuButton>
  <MenuList>
    <MenuItem>Log Out</MenuItem>
    <MenuItem>Support</MenuItem>
  </MenuList>
</Menu>  
  </HStack>
    </Box>
  )
}

export default TopNav
