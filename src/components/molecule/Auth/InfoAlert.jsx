import { Box, Alert, AlertIcon } from "@chakra-ui/react";
import PropTypes from "prop-types";

export function InfoAlert({ message, status }) {
  return (
    <Box position={"absolute"} top={20}  opacity={0.8} borderRadius={20}>
      <Alert status={status} borderRadius={20}>
        <AlertIcon />
          {message}
      </Alert>
    </Box>
  );
}

InfoAlert.propTypes = {
  message: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
