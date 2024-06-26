import {
  Flex,
  Image,
} from "@chakra-ui/react";
import PropTypes from 'prop-types'

export function ChangeElementSensor({
  image,
  symbol,
  children
}) {

  return (
    <Flex
      alignItems="center"
      justifyContent="space-around"
      marginTop={5}
      bg="blue.200"
      borderRadius="lg"
      boxShadow="md"
    >
      <Flex
        flex={{ base: 3, lg: 5 }}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={image}
          p={{ base: "3" }}
          width={{ base: 120, lg: 150 }}
          height={{ base: 120, lg: 150 }}
        />
      </Flex>
      <Flex
        flex="3"
        alignItems="center"
        justifyContent="center"
        marginEnd="5"
        border="1px"
        borderColor="gray.200"
        borderRadius="lg"
        height="50px"
        boxShadow="sm"
        bg="white"
      >
        {children}
        <Flex alignItems="center" justifyContent="center" marginStart="2">
          {symbol}
        </Flex>
      </Flex>
    </Flex>
  );
}


ChangeElementSensor.propTypes = {
    image : PropTypes.string,
    children : PropTypes.node,
    symbol : PropTypes.string,
}

// minValue={-15}
// maxValue={70}
// image={templimit}
// symbol="°C"