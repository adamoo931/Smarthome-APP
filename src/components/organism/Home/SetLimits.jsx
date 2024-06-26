import { ChangeElementSensor } from "../../molecule/Home/ChangeElementSensor.jsx";
import { humiditylimit, templimit } from "./../../../assets/Images/index.js";
import { ForwardPageButton } from "./../../molecule/Auth/ForwardPageButton.jsx";
import {
  Container,
  VStack,
  Flex,
  Box,
  Text,
  Center,
  Button,
  Input,
} from "@chakra-ui/react";
import {InfoAlert} from "./../../molecule/Auth/index.js";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { useMutation } from "@tanstack/react-query";
import { useState , useEffect } from "react";
import {setLimitSensor} from './../../../api/index.js'

export function SetLimits() {


  const { mutate } = useMutation({
    mutationFn: setLimitSensor,
    onSuccess: (data) => {
        setInfoMessage(data);
        setIsSuccess(true);
    },
    onError: (err) => {
        console.log(err);
        setInfoMessage(err.message);
        setIsError(true);
    },
  });

  const { register, handleSubmit } = useForm();
  const [cookies, setCookie, removeCookie] = useCookies(["access-token"]);
  const [isSuccess , setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");

  const onSubmit = (data) => {
    const { temp , hum } = data;
    const access_token = cookies["access-token"];
    mutate({ temp , hum , access_token });
  };

  // Effect for clearing error message
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsError(false);
      setInfoMessage("");
      setIsSuccess(false);
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, [isError, infoMessage]);

  return (
    <Container minW={"358px"} maxW={"none"} m={"unset"} p={"unset"} mt={10}>
      <Flex
        height={"100%"}
        justifyContent={"center"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        {isSuccess && <InfoAlert message={infoMessage} status="success" />}
        {isError && <InfoAlert message={infoMessage} status="error" />}
        <Flex
          p={4}
          width={{ base: "90%", sm: "80%", md: "60%", lg: "45%", xl: "35%" }}
          borderRadius={"xl"}
          flexDirection={"column"}
          boxShadow={"xl"}
          bg={"white"}
        >
          <Box>
            <Center>
              <Text
                fontSize={{ base: "20px", md: "25px", lg: "30px" }}
                color={"black.700"}
                className="dm-sans"
                fontWeight={700}
              >
                {"Set limits"}
              </Text>
            </Center>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "15px", md: "17px", lg: "20px" }}
              marginTop={3}
              className="dm-sans"
              color={"gray.500"}
              textAlign="center"
            >
              {
                "You can set your limits of humidity and temperature. If they are reached, you will receive a notification."
              }
            </Text>
          </Box>
          <VStack
            spacing={4}
            align="stretch"
            width="full"
            maxWidth="md"
            mx="auto"
            mt={8}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
                <ChangeElementSensor
                image={templimit}
                symbol="°C"
                >
                    <Input
                    fontSize={{ base: "20px", md: "25px", lg: "30px" }}
                    color="black.700"
                    fontWeight={100}
                    textAlign="center"
                    outline="none"
                    border="none"
                    _focus={{ border: "none", boxShadow: "none" }}
                    borderRadius="lg"
                    {...register("temp", { required: true, maxLength: 3 })}
                    />
                </ChangeElementSensor>

                <ChangeElementSensor
                image={humiditylimit}
                symbol="%"
                >
                    <Input
                    fontSize={{ base: "20px", md: "25px", lg: "30px" }}
                    color="black.700"
                    fontWeight={100}
                    textAlign="center"
                    outline="none"
                    border="none"
                    _focus={{ border: "none", boxShadow: "none" }}
                    borderRadius="lg"
                    {...register("hum", { required: true, maxLength: 3 })}
                    />
                </ChangeElementSensor>
                <Center>
                    <Box mt={3}>
                    <Button
                        colorScheme="green"
                        size="md"
                        variant="solid"
                        type={"submit"}
                    >
                        Apply Changes
                    </Button>
                    </Box>
                </Center>
            </form>
          </VStack>
          <Box mt={5}>
            <ForwardPageButton url="/homepage" />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
