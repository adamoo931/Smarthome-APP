import { Button, Text, Box , Badge} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

export function MenuItem({ VARIANT, URL, TEXT, LEFTICON, COLORSCHEME, MT , isAlert }) {
  return (
    <Link to={URL}>
      <Box
        mt={MT}
        display="inline-block"
        _hover={{ transform: "scale(1.05)" }}
        transition="transform 0.2s ease"
        bg={isAlert && 'red.400'}
        rounded={6}
      >
        <Button variant={VARIANT} leftIcon={LEFTICON} colorScheme={COLORSCHEME}>
          <Text className="dm-sans" fontSize="lg">
            {TEXT}
          </Text>
          {isAlert && <Badge colorScheme='red' marginStart={2}>!</Badge>}
        </Button>
      </Box>
    </Link>
  );
}

MenuItem.propTypes = {
    VARIANT : PropTypes.string.isRequired,
    URL : PropTypes.string,
    TEXT : PropTypes.string.isRequired,
    LEFTICON : PropTypes.object.isRequired,
    COLORSCHEME : PropTypes.string,
    MT : PropTypes.number,
    isAlert : PropTypes.bool
};
