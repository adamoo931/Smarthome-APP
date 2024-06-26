import { Flex, Box , Text } from "@chakra-ui/react";
import { ForwardPageButton } from "./../../molecule/Auth/index";
import { TfiAlert } from "react-icons/tfi";
export function Unauthorized()
{
    return(
        <Flex
            height={"100%"}
            justifyContent={"center"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Box
              maxW={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
              w="full"
              bg={"white"}
              boxShadow="lg"
              p={10}
              rounded="lg"
              textAlign="center"
            >
              <Text
                fontSize={{ base: "30px", md: "35px" }}
                color="gray.700"
                mb={6}
                textAlign="center"
              >
                Something went wrong!
              </Text>
              <Box display="flex" justifyContent="center" mb={6}>
                <TfiAlert size="100px" color="red" />
              </Box>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                mb={6}
                textAlign="center"
              >
                Maybe you've been logged out, or you still haven't verified
                yourself?
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.700"
                mb={6}
                textAlign="center"
              ></Text>
              <ForwardPageButton url="/" />
            </Box>
          </Flex>
    )
}