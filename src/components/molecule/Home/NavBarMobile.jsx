import { Flex, Box, Image } from "@chakra-ui/react";
import { log_out, burger_menu } from "../../../assets/Images/index";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function NavBarMobile({ isClickedBurger, setIsClickedBurger }) {
  return (
    <Flex bg={"white"} height={"80px"} display={{ base: "flex", lg: "none" }}>
      <Flex flex={1} alignItems={"center"}>
        <Box
          ms={"2"}
          onClick={() => setIsClickedBurger(() => !isClickedBurger)}
        >
          <Image
            src={`${burger_menu}`}
            width={"60px"}
            height={"60px"}
            border={`${isClickedBurger ? "1px" : ""}`}
            borderColor={"gray.200"}
            borderRadius={"10px"}
          />
        </Box>
      </Flex>
      <Flex flex={1} justifyContent={"end"} alignItems={"center"}>
        <Box me={"2"}>
          <Link to={'/logout'}>
            <Image src={`${log_out}`} width={"50px"} height={"50px"} />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}

NavBarMobile.propTypes = {
  isClickedBurger: PropTypes.bool.isRequired,
  setIsClickedBurger: PropTypes.func.isRequired,
};
