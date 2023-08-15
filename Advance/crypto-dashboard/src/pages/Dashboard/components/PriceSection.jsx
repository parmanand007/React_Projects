import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  HStack,
  Button,
  Icon,
  Stack,
  Image,
  Text,
  Flex,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const PriceSection = () => {
  const timestamps = ["8:15 PM", "9:15 PM", "10:15 PM", "11:15 PM", "12:15 PM"];

  return (
    <CustomCard>
      <Flex justifyContent="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Current Price</Text>
          </HStack>
          <HStack
            spacing={4}
            flexDir={{
              base: "column",
              sm: "row",
            }}
            align={{
              base: "flex-start",
              sm: "center",
            }}
          >
            <HStack>
              <Text fontWeight="medium" textStyle="h2">
                22.39401000
              </Text>
              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight} />

                <Text fontWeight="medium" fontSize="sm">
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle}></Icon>}>Buy</Button>
          <Button leftIcon={<Icon as={AiOutlineMinusCircle}></Icon>}>
            Sell
          </Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end" >
        <TabList bg="black.5" p="3px">
        {["1H","1D","1W","1M"].map((tab)=>(
            <Tab _selected={{
              bg:"white"
            }} key={tab} fontSize="sm" p="6px" borderRadius="4">{tab}</Tab>
          ))
        }
        
         
        </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
          <Image mt="48px" src="/images/Vector 26.png" w="100%" />
      <HStack justify="space-between">
        {timestamps.map((time) => (
          <Text key={time} fontSize="sm">
            {time}
          </Text>
        ))}{" "}
      </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      
    </CustomCard>
  );
};

export default PriceSection;
