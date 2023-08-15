import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {Stack,Text,Flex,Icon, Box,Grid, Divider, Button} from "@chakra-ui/react"
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";

const Transactions = () => {
  const transactions = [
    {
      id:"1"  ,
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: " + 81,123.10",
      timestamp: "2023-08-09 7:06 PM",
    },
    {
        id:"2"  ,  
      icon: FaBtc,
      text: "BTC Sell",
      amount: " + 81,123.10",
      timestamp: "2023-08-09 7:06 PM",
    },
    {
        id:"3"  ,
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: " + 81,123.10",
      timestamp: "2023-08-09 7:06 PM",
    },
  ];

  return (
    <CustomCard h="full">
      <Text fontSize="sm" color="black.80" mb="6"> Recent Transactions</Text>
    <Stack spacing={4}>
        {transactions.map((trans,i)=>(
           <Fragment key={trans.id}>
            {i != 0 && <Divider/>}
            <Flex key={trans.id} gap={4 }>
                <Grid  placeItems="center" bg="black.5" boxSize={10} borderRadius="full">
                <Icon as= {trans.icon}/>
                </Grid>
                <Flex justify="space-between" w="full">
                    <Stack spacing={0}>
                        <Text textStyle="h6" >{trans.text}</Text>
                        <Text fontSize="sm" color="black.40">{trans.timestamp}</Text>
                    </Stack>
                    <Text textStyle="h6" >{trans.amount}</Text>

                </Flex>
            </Flex>
           </Fragment>
        ))}
    </Stack>
    <Button w="full" colorScheme="gray" mt="8">View All</Button>
    </CustomCard>
  );
};

export default Transactions;
