import { HStack, Stack,Text,Icon,Tag, Button} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineInfoCircle} from "react-icons/ai"
const PortfolioSection = () => {
  return  (
  <HStack justify="space-between"  bg="white" borderRadius="xl" p="6"
  flexDir={{
    base:"column",
    xl:"row"
  }} align={{
    base:"flex-start",
    xl:"center"
  }} 
  spacing={{
    base:4,
    xl:0
  }} >
<HStack  spacing={{
  base:1,
  xl:16
}} 
flexDir={{
  base:"column",
  xl:"row"
}} align={{
  base:"flex-start",
  xl:"center"
}}>
<Stack>
      <HStack color="black.80">
        <Text fontSize="sm" >
      Total Portfolio Value
        </Text>
      <Icon as = {AiOutlineInfoCircle} />
      </HStack>
     <Text fontWeight="medium" textStyle="h2" >112,312.24</Text>
    </Stack>
    <Stack>
      <HStack color="black.80">
        <Text fontSize="sm" >
      Wallet Balances
        </Text>
      </HStack>
   <HStack spacing={4}
   flexDir={{
    base:"column",
    sm:"row"
  }} align={{
    base:"flex-start",
    sm:"center"
  }}>
       
<HStack 
>
<Text fontWeight="medium" textStyle="h2" >22.39401000</Text> <Tag colorScheme='gray '>BTC</Tag>

</HStack>
<HStack>
<Text fontWeight="medium" textStyle="h2" >13,00.00</Text> <Tag colorScheme='gray '>INR</Tag>

</HStack>
   </HStack>

    </Stack>
</HStack>
    <HStack>
      <Button leftIcon ={<Icon as ={AiOutlineArrowDown}></Icon>}>Deposit</Button>
      <Button leftIcon ={<Icon as ={AiOutlineArrowUp}></Icon>}>Widthdraw</Button>
    </HStack>
  </HStack>)
}

export default PortfolioSection
