import { Flex, Text, Image, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
export function ElementBody({
  isOpen,
  setIsOpen,
  text,
  isLoading,
  plusImage,
  minusImage,
  disabledImage
}) {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection="column"
      margin={5}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Box bg={"white"} padding={5} borderRadius={10}>
        {isLoading ? 
          <Image
            src={`${disabledImage}`}
            width={100}
            height={100}
          /> 
        : 
          <Image
          src={`${isOpen ? plusImage : minusImage}`}
          width={100}
          height={100}
          />
      }
      </Box>
      <Text
        fontSize={{ base: "15px", md: "20px", lg: "25px" }}
        color={"black.700"}
        fontWeight={100}
        marginTop={5}
      >
        {text}
      </Text>
    </Flex>
  );
}

ElementBody.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isLoading : PropTypes.bool.isRequired,
  plusImage : PropTypes.string.isRequired,
  minusImage : PropTypes.string.isRequired,
  disabledImage : PropTypes.string.isRequired,
};
