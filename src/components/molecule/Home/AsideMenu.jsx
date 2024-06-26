import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import {
  dashboard,
  log_out_black,
  user,
} from "./../../../assets/Images/index";
import { AsideMenuOption } from "./../../atom/Home/index";

export function AsideMenu({ isClickedBurger }) {
  const [isVisible, setIsVisible] = useState(isClickedBurger);

  useEffect(() => {
    setIsVisible(isClickedBurger);
  }, [isClickedBurger]);

  const handleOptionClick = () => {
    setIsVisible(false);
  };

  return (
    <Flex
      position={"absolute"}
      display={{ base: "block", lg: "none" }}
      height={"100%"}
      top={"80px"}
      width={"100%"}
      bg={"white"}
      transform={`${isVisible ? "translateX(0%)" : "translateX(-100%)"}`}
      transition="transform 1s ease-in-out"
      zIndex={10}
    >
      <AsideMenuOption image={dashboard} text="Dashboard" nav="/homepage" onClick={handleOptionClick} />
      <AsideMenuOption image={user} text="Profile" nav="/homepage/profile" onClick={handleOptionClick} />
      <AsideMenuOption image={log_out_black} text="Log out" nav="logout" onClick={handleOptionClick} />
    </Flex>
  );
}

AsideMenu.propTypes = {
  isClickedBurger: PropTypes.bool.isRequired,
};
