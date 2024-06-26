import {
     Box , Text , Card, CardHeader, CardBody, CardFooter , Stack , Heading , StackDivider , Button , ButtonGroup , Image,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { agree } from './../../../assets/Images/index.js'
import { useQuery} from "@tanstack/react-query";
import { getLimitSensor } from "../../../api/index.js";


export function CardAlert({ mutate , cookies }) {

    const { data , isSuccess  } = useQuery({
        queryKey: ["limits"],
        queryFn: async () => getLimitSensor(cookies["access-token"]),
    });

  return (
    <Card>
        <CardHeader>
            <Heading size='md'>Client Report</Heading>
        </CardHeader>
        <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                Summary
                </Heading>
                <Text pt='2' fontSize='sm'>
                We would like to inform you about the recent changes in temperature and humidity in your room.
                </Text>
            </Box>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                Overview
                </Heading>
                <Text pt='2' fontSize='sm'>
                These changes may affect the comfort of staying in the room and the technical condition of the equipment. We recommend monitoring these parameters to maintain optimal indoor conditions.
                </Text>
            </Box>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                Analysis
                </Heading>
                <Text pt='2' fontSize='sm'>
                    Optimal conditions :
                </Text>
                <Text pt='2' fontSize='sm'>
                <strong>Temperature:</strong> over {isSuccess && data.limitTemp}°C 
                </Text>
                <Text pt='2' fontSize='sm'>
                <strong>Humidity: </strong> below {isSuccess && data.limitHum}% 
                </Text>
            </Box>
            </Stack>
        </CardBody>
        <CardFooter display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <Text textAlign={'center'} fontSize='xs'>Accept conditions , you declare that problems has been solved</Text>
            <ButtonGroup spacing='2' marginTop={5}>
                <Button colorScheme='green' onClick={()=>mutate(cookies['access-token'])}>
                    <Image src={agree} alt='agree'/>
                </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
  );
}

CardAlert.propTypes = {
  mutate : PropTypes.func.isRequired,
  cookies : PropTypes.object.isRequired
};