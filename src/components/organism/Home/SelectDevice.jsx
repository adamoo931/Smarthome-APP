import { Flex, Box, Text, Center, SimpleGrid } from "@chakra-ui/react";
import {
  Camera,
  Gate,
  Humidity,
  Light,
  Lock,
  control_panel,
  plus,
} from "../../../assets/Images/index.js";

import { ClickableSVGBox } from "./../../molecule/Home/index.js";
import { RegisterDevice } from "./RegisterDevice.jsx";

export function SelectDevice() {
  return (
    <Flex flex={1} justifyContent="space-around" marginTop={10}>
      {/* START OF FORM */}
      <Flex
        width={{ base: "90%", sm: "80%", md: "60%", lg: "50%", xl: "40%" }}
        height={{ base: "90%" }}
        borderRadius={"xl"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        boxShadow={"xl"}
        bg={"white"}
      >
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={4}
        >
          <Text
            textAlign="center"
            fontSize={{ base: "20px", md: "25px", lg: "30px" }}
            color={"black.700"}
            className="dm-sans"
            fontWeight={700}
          >
            {"Select or add device"}
          </Text>

          <Flex flexDirection={"row"} justifyContent={"space-around"} mt={4}>
            <Box mr={{ base: 2, lg: 10 }}>
              <Center>
                <ClickableSVGBox
                  svgUrl={plus}
                  linkTo={"/homepage/RegisterDevice"}
                />
              </Center>
              <Text
                textAlign="center"
                fontSize={{ base: "15px", md: "15px", lg: "20px" }}
                color={"black.700"}
                className="dm-sans"
                fontWeight={650}
              >
                {"Add device"}
              </Text>
            </Box>
            <Box ml={{ base: 2, lg: 10 }}>
              <Center>
                <ClickableSVGBox
                  svgUrl={control_panel}
                  linkTo={"/homepage/Main"}
                />
              </Center>
              <Text
                textAlign="center"
                fontSize={{ base: "15px", md: "15px", lg: "20px" }}
                color={"black.700"}
                className="dm-sans"
                fontWeight={650}
              >
                {"Control panel"}
              </Text>
            </Box>
          </Flex>
        </Flex>

        <Box p={4}>
          <Center>
            <Text
              fontSize={{ base: "15px", md: "17px", lg: "20px" }}
              marginTop={3}
              className="dm-sans"
              color={"gray.500"}
            >
              {
                "Congratulations! You have successfully logged in, now select whether you want to go to the control panel or register the device"
              }
            </Text>
          </Center>
        </Box>
      </Flex>
    </Flex>
  );
}
