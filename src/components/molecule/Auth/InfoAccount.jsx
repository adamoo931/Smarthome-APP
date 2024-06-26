import { Flex, Text, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export function InfoAccount({ info, authStatus }) {
  return (
    <Center marginTop={"20px"}>
      <Flex>
        <Text
          fontSize={{ base: "12px", md: "14px", lg: "16px" }}
          color={"gray.500"}
          marginRight={"5px"}
          className="dm-sans"
        >
          {info}
        </Text>
        <Link to={"/register"}>
          <Text
            fontSize={{ base: "12px", md: "14px", lg: "16px" }}
            className="dm-sans"
            fontWeight={700}
          >
            {authStatus}
          </Text>
        </Link>
      </Flex>
    </Center>
  );
}

InfoAccount.propTypes = {
  info: PropTypes.string.isRequired,
  authStatus: PropTypes.string.isRequired,
};
