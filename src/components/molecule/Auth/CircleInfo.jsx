import { Flex, Image } from "@chakra-ui/react";
import { success } from "./../../../assets/Images/index";

export function CircleInfo() {
  return (
    <Flex
      bg={"#DDEAD8"}
      mt={10}
      mb={10}
      borderRadius={100}
      width={"200px"}
      height={"200px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex
        bg={"#C2E8BC"}
        borderRadius={100}
        width={"160px"}
        height={"160px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex
          bg={"#90E283"}
          borderRadius={100}
          width={"120px"}
          height={"120px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            bg={"white"}
            borderRadius={100}
          >
            <Image src={success} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
