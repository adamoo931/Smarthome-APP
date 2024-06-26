import { Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export function ElementHeader({ text }) {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      borderRadius={20}
      marginTop={5}
    >
      <Text
        fontSize={{ base: "20px", md: "25px", lg: "30px" }}
        color={"black.700"}
        fontWeight={700}
      >
        {text}
      </Text>
    </Flex>
  );
}

ElementHeader.propTypes = {
  text: PropTypes.string.isRequired,
};
