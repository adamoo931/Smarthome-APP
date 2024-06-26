import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function AsideMenuOption({ image, text, nav, onClick }) {
  return (
    <Flex marginLeft="37%" my={3} onClick={onClick}>
      <Link to={nav} style={{ textDecoration: "none" }}>
        <Flex>
          <Box mr={5}>
            <Image
              src={image}
              width={{ base: "25px", sm: "30px", md: "35px" }}
              height={{ base: "25px", sm: "30px", md: "35px" }}
            />
          </Box>
          <Text
            fontSize={{ base: "16px", sm: "18px", md: "22px" }}
            className="dm-sans"
            fontWeight={700}
          >
            {text}
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}

AsideMenuOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  nav: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
