import { Flex, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { arrow_right } from "./../../../assets/Images/index";
import PropTypes from "prop-types";

export function ForwardPageButton({ url }) {
  return (
    <Link
      to={url}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textDecoration: "none",
      }}
    >
      <Button
        colorScheme="whatsapp"
        width={{ base: "70%", md: "40%", lg: "50%" }}
        height={{ base: "60px", md: "50px", lg: "50px" }}
        boxShadow="lg"
      >
        <Flex m={4} justifyContent="center" alignItems="center" width="100%">
          <Text
            fontSize={{ base: "16px", md: "18px", lg: "20px" }}
            color={"white"}
          >
            Go to home page
          </Text>
          <Image src={arrow_right} boxSize={{ base: "28px", lg: "32px" }} />
        </Flex>
      </Button>
    </Link>
  );
}

ForwardPageButton.propTypes = {
  url: PropTypes.string.isRequired,
};
