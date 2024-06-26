import { Container } from "@chakra-ui/react";
import { Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
export function Auth() {
  return (
    <Container
      minW={"358px"}
      maxW={"none"}
      m={"unset"}
      p={"unset"}
      height={"100vh"}
    >
      <Flex height={"100%"} justifyContent={"center"}>
        <Box
          flex={1}
          overflow={"auto"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"start"}
          height={"100%"}
          bgGradient="linear(to-r, rgba(94,175,250,1), rgba(138,73,247,1))"
        >
          <Outlet />
        </Box>
      </Flex>
    </Container>
  );
}
