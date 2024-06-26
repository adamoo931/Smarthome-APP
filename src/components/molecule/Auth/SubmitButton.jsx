import {
  Flex,
  Box,
  Text,
  Image,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export function SubmitButton({ image, text }) {
  const imageWidth = useBreakpointValue({
    base: "30px",
  });
  const imageHeight = useBreakpointValue({
    base: "30px",
  });
  const buttonWidth = useBreakpointValue({
    base: "300px", // Zwiększamy szerokość przycisku
    md: "300px",
    lg: "400px",
    xl: "400px",
    "2xl": "400px",
  });

  return (
    <Flex justifyContent={"center"} marginTop={50}>
      <Button
        width={buttonWidth}
        borderRadius={"20px"}
        bgGradient="linear(to-r, rgba(94,175,250,1), rgba(138,73,247,1))"
        _hover={{
          bgGradient: "linear(to-r, rgba(138,73,247,1), rgba(94,175,250,1))",
        }}
        type={"submit"}
      >
        <Flex w={"100%"}>
          <Box
            display={"flex"}
            justifyContent={"end"}
            alignItems={"center"}
            flex={5}
          >
            <Text fontSize={{ base: "18px", md: "20px" }} color={"white"}>
              {text}
            </Text>
          </Box>
          <Box display={"flex"} justifyContent={"end"} flex={4}>
            <Image src={image} width={imageWidth} height={imageHeight} />
          </Box>
        </Flex>
      </Button>
    </Flex>
  );
}

SubmitButton.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
