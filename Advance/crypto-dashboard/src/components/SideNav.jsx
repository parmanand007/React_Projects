import {Box, Stack,HStack,Icon,Text,Heading} from "@chakra-ui/react"
import {RxDashboard} from "react-icons/rx"
import {BsArrowDownUp} from "react-icons/bs"
import {BiSupport} from "react-icons/bi"
import {Link, useLocation } from "react-router-dom"
const Sidenav = ()=>{
    const location = useLocation();
     const isActiveLink = (link)=>{
        return location.pathname === link;
     }
    const navLinks = [
    {
        icon: RxDashboard,
        text:"Dashboard",
        link: "/",
    },
    {
        icon:BsArrowDownUp  ,
        text:"Transactions",
        link:"/transaction"
    }
   ];
// Stack=>flex + flex-col
    return (<Stack 
        bg="white" justifyContent="space-between" width="16rem" h="100vh"
    boxShadow ={{
        base:"none",
        lg:"lg"
    }}

    w= {{
        base:"full",
        lg:"16rem"
    }}

    >  
          <Box>
            <Heading textAlign="center" pt="3.5rem" as = "h1" fontSize="20px">Striker </Heading> 
          <Box mt="6" mx="3">
          {  navLinks.map((nav)=>(
            <Link to ={nav.link} key={nav.text}>

            
                <HStack
                
                bg={isActiveLink(nav.link) ? "#F3F3F7" :"transparent"}
                color={isActiveLink(nav.link) ? "#171717" :"#797E82"}
     
                borderRadius="10px"
                 py="3" px="4" _hover= {
                    {
                        bg:"#F3F3F7",
                        color:"#171717"
                    }
                }
                
                 >
                    <Icon  as= {nav.icon} />
                    <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
                </HStack>  
                </Link>
            ))}

          </Box>
          </Box>
          <Box  mt="6" mx="3" mb="6">
           <Link to = "/support">
           <HStack borderRadius="10px" py="3" px="4" 
           bg={isActiveLink("/support") ? "#F3F3F7" :"transparent"}
           color={isActiveLink("/support") ? "#171717" :"#797E82"}
           _hover= {
                    {
                        bg:"#F3F3F7",
                        color:"#171717",
                        fontWeight:[300] 
                    }
                } 
                
            >
                <Icon as ={BiSupport} />
                <Text fontSize="14px" fontWeight="medium">Support</Text>
            </HStack>
           </Link>
          </Box>
        
    </Stack>
    )
}

export default Sidenav