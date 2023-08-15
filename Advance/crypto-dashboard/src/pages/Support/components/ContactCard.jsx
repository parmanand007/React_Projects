import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Card,
    Flex,
    HStack,
    Icon,
    Stack,
    Text,
    Input,
    Textarea,
    Checkbox, CheckboxGroup,
    Box,
    Button
  } from "@chakra-ui/react";
  import { IoMdMail } from "react-icons/io";

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow={1}>
    <Text fontWeight="medium" fontSize="sm">
      You will receive response within 24hr of time of submit.
    </Text>
    <HStack
        flexDir={{
            base:"column",
            md:"row"
        }}
    >
      <FormControl>
        <FormLabel fontWeight="bold">First Name</FormLabel>
        <Input type="text" placeholder="Enter your first name.." />
      </FormControl>
      <FormControl>
        <FormLabel fontWeight="bold">Last Name</FormLabel>
        <Input type="text" placeholder="Enter your last name.." />
      </FormControl>
    </HStack>
    <FormControl>
        <FormLabel fontWeight="bold">Email</FormLabel>
        <Input type="email" placeholder="Enter your email.." />
      </FormControl>
    <FormControl>
        <FormLabel fontWeight="bold">Message</FormLabel>
       <Textarea placeholder="Enter your message.." />
      </FormControl>
      <Checkbox defaultChecked >
     <Text fontSize="xs">
           
      I agree with 
        <Box as ="span" color="p.purple">
            {" "}
              Terms & Conditions. 
        </Box>
     </Text>
      </Checkbox>
   <Stack>
    <Button fontSize="sm">
        Send a Message
    </Button>
    <Button fontSize="sm" colorScheme="gray">
        Book a Meeting        </Button>
   </Stack>
  </Card>
  )
}

export default ContactCard
