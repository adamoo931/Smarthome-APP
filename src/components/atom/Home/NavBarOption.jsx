import { Flex, Box, Image, Center, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function NavBarOption({ image, text, nav }) {
  return (
    <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
      <Link
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        to={`/${nav}`}
      >
        <Box me={{ base: "3", md: "5" }}>
          <Image
            src={`${image}`}
            width={{ lg: "30px", xl: "40px" }}
            height={{ lg: "30px", xl: "40px" }}
          />
        </Box>
        <Box>
          <Center>
            <Text
              fontSize={{ lg: "16px", xl: "20px" }}
              className="dm-sans"
              fontWeight={700}
            >
              {text}
            </Text>
          </Center>
        </Box>
      </Link>
    </Flex>
  );
}

NavBarOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  nav: PropTypes.string.isRequired,
};
