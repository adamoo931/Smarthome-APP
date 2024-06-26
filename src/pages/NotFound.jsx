import { Container, Text } from "@chakra-ui/react";
import { Flex, Box } from "@chakra-ui/react";
import { ForwardPageButton } from "../components/molecule/Auth";

export function NotFound() {
  return (
    <Container
      minW={"358px"}
      maxW={"none"}
      m={"unset"}
      p={"unset"}
      height={"100vh"}
    >
      <Flex
        height={"100%"}
        justifyContent={"center"}
        flex={1}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        bgGradient="linear(to-r, rgba(94,175,250,1), rgba(138,73,247,1))"
      >
        <Flex
          p={4}
          width={{ base: "90%", sm: "80%", md: "60%", lg: "50%", xl: "40%" }}
          borderRadius={"xl"}
          flexDirection={"column"}
          boxShadow={"xl"}
          bg={"white"}
        >
          <Text
            fontSize={["6xl", "7xl"]}
            fontWeight="extrabold"
            color="gray.400"
            textAlign="center"
            mb={4}
          >
            404
          </Text>
          <Text
            fontSize={["xl", "2xl"]}
            fontWeight="semibold"
            color="black"
            textAlign="center"
            mb={4}
          >
            Sorry, we couldn't find this page.
          </Text>
          <Text
            fontSize={["md", "lg"]}
            color="gray.600"
            textAlign="center"
            mb={8}
          >
            But don't worry, you can find plenty of other things on our
            homepage.
          </Text>
          <Box margin={5}>
            <ForwardPageButton url="/homepage" />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
