import { Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
export function ElementState({ isOpen, plusState, minusState, device , isLoading}) {



  return (
    <Flex alignItems={"center"} justifyContent={"center"} margin={5}>
      <Flex
        bg={"white"}
        paddingLeft={10}
        paddingRight={10}
        paddingTop={2}
        paddingBottom={2}
        borderRadius={10}
        justifyContent={"space-around"}
        width={{ base: "90%", sm: "80%", md: "60%", lg: "65%" }}
      >
        <Text
          fontSize={{ base: "20px", md: "25px", lg: "30px" }}
          color={"black.700"}
          fontWeight={100}
        >
          {isLoading ? <span>Ładowanie stanu ...</span> : 
          <>
            {device} : {" "}
            <span
              style={{ color: `${isOpen ? "green" : "red"}` }}
            >{`${isOpen ? plusState : minusState}`}</span>
            </>
          }
        </Text>
      </Flex>
    </Flex>
  );
}

ElementState.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  plusState: PropTypes.string.isRequired,
  minusState: PropTypes.string.isRequired,
  device: PropTypes.string.isRequired,
  isLoading : PropTypes.bool.isRequired,
};
