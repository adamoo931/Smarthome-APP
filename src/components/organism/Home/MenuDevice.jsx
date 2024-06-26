import { Flex, Text, SimpleGrid, Center } from "@chakra-ui/react";
import { SmartHomeElements } from "./../../../utils/index.js";

const elements = SmartHomeElements();

import { ClickableSVGBox } from "../../molecule/Home/index.js";

export function MenuDevice() {
  return (
    <Flex flex={1} justifyContent="space-around" marginTop={10}>
      <Flex marginTop={"5%"}
        bg={"white"}
        p={4}
        width={"auto"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection="column"
        borderRadius={20}>
        <Text
          textAlign="center"
          fontSize={{ base: "20px", md: "25px", lg: "30px" }}
          color={"black.700"}
          className="dm-sans"
          fontWeight={700}
        >
          {"Select your sensor"}
        </Text>
        <Flex />
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Center>
            <Text
              textAlign="center"
              fontSize={{ base: "15px", md: "17px", lg: "20px" }}
              margin={3}
              className="dm-sans"
              color={"gray.500"}
            >
              {
                "You can choose any sensor you want and, you will be redirected to sensor menu"
              }
            </Text>
          </Center>
        </Flex>
        <SimpleGrid columns={[2, 3]} spacing={4} p={4}>
          {elements.map((item, index) => {
            return (
              <ClickableSVGBox
                key={index}
                image={item.image}
                link={item.link}
              />
            );
          })}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
