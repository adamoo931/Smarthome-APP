import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Image,
  Spacer,
  Tooltip,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export function InputForm({ image, text, children, isError, errorMessage }) {
  return (
    <FormControl marginTop={30}>
      <Box display="flex" alignItems="flex-end">
        <Box width={{ base: "10%" }} flexShrink={0}>
          <Image
            src={image}
            marginRight={{ base: 0, md: 5 }}
            width={{ base: 7, md: 8 }}
            height={{ base: 7, md: 8, lg: 10 }}
          />
        </Box>
        <Box width={{ base: "90%" }}>
          <FormLabel>
            <Text
              fontSize={{ base: "12px", md: "14px", lg: "16px" }}
              color={"gray.500"}
              className="dm-sans"
              fontWeight={400}
            >
              {text}
            </Text>
          </FormLabel>
          <Tooltip
            isOpen={isError ? true : false}
            label={errorMessage}
            placement="bottom-start"
            bg="red.600"
            borderRadius={10}
          >
            {children}
          </Tooltip>
        </Box>
      </Box>
      <Spacer marginTop={2} />
    </FormControl>
  );
}

InputForm.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
};
