import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function ClickableSVGBox({ image , link }) {

  return (
    <Link to={`/homepage/${link}`}>
      <Image src={image} width={150} height={150}/>
    </Link>
  );
}

ClickableSVGBox.propTypes = {
  image : PropTypes.string.isRequired,
  link : PropTypes.string.isRequired
};
