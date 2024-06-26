import { ForwardPageButton } from "./../../molecule/Auth/ForwardPageButton.jsx";
import {
  Container,
  VStack,
  Flex,
  Box,
  Text,
  Center,
  Link,
} from "@chakra-ui/react";

export function ContactUs() {
  const authors = [
    {
      name: "Dawid Głowacz",
      role: "Leader, DevOps FullStack Developer",
      email: "240573@edu.p.lodz.pl",
    },
    {
      name: "Adam Ławniczak",
      role: "Frontend Developer",
      email: "240588@edu.p.lodz.pl",
    },
    {
      name: "Aleksander Kretek",
      role: "Embedded Developer",
      email: "240586@edu.p.lodz.pl",
    },
    {
      name: "Artur Bondyra",
      role: "Embedded Developer",
      email: "240586@edu.p.lodz.pl",
    },
  ];

  return (
    <Container
      minW={"358px"}
      maxW={"none"}
      m={"unset"}
      p={"unset"}
      minHeight={"100vh"}
    >
      <Flex
        justifyContent={"center"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Flex
          p={4}
          marginTop={10}
          width={{ base: "90%", sm: "80%", md: "60%", lg: "45%", xl: "35%" }}
          borderRadius={"xl"}
          flexDirection={"column"}
          boxShadow={"xl"}
          bg={"white"}
          maxW={"100%"}
          overflow={"hidden"}
        >
          <Box>
            <Center>
              <Text
                fontSize={{ base: "20px", md: "25px", lg: "30px" }}
                color={"black.700"}
                className="dm-sans"
                fontWeight={700}
              >
                {"Contact us"}
              </Text>
            </Center>
          </Box>

          <VStack spacing={6} mt={4} width="100%">
            {authors.map((author, index) => (
              <Box
                key={index}
                p={4}
                borderRadius={"md"}
                boxShadow={"md"}
                bg={"gray.50"}
                width={"100%"}
              >
                <Text fontSize={"20px"} fontWeight={600} color={"black.700"}>
                  {author.name}
                </Text>
                <Text fontSize={"16px"} color={"gray.600"}>
                  {author.role}
                </Text>
                <Link href={`mailto:${author.email}`} color={"blue.500"}>
                  {author.email}
                </Link>
              </Box>
            ))}
          </VStack>

          <Box mt={10} width="100%">
            <ForwardPageButton url="/homepage" />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
