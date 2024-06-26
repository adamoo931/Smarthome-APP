import { Flex, Text, Input } from "@chakra-ui/react";
import { ID, login } from "../../../assets/Images/index.js";
import { SubmitButton, InputForm } from "./../../molecule/Auth/index.js";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Loader, InfoAlert } from "./../../molecule/Auth/index.js";
import { useCookies } from "react-cookie";
import { registerPanel } from "./../../../api/index.js";
import { Navigate } from "react-router-dom";

export function RegisterDevice() {
  // Method for performing a request to api
  const { isPending, mutate } = useMutation({
    mutationFn: registerPanel,
    onSuccess: () => {
      setIsRegister(true);
    },
    onError: (err) => {
      console.error(err.message);
      setIsError(true);
      setErrorMessage(err.message);
    },
  });

  // States
  const [isRegister, setIsRegister] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["access-token"]);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Method for submiting form
  const onSubmit = (data) => {
    const { panelID } = data;
    const access_token = cookies["access-token"];
    mutate({ panelID, access_token });
  };

  // Effect for clearing error message
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsError(false);
      setErrorMessage("");
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [isError, errorMessage]);

  return (
    <Flex flex={1} justifyContent="space-around" marginTop={10}>
      {/* START OF FORMULA */}
      {isError && <InfoAlert message={errorMessage} status="error" />}
      <Flex
        width={{ base: "90%", sm: "80%", md: "60%", lg: "50%", xl: "40%" }}
        borderRadius={"xl"}
        flexDirection={"column"}
        boxShadow={"xl"}
        p={4}
        bg={"white"}
      >
        <Flex flexDirection={"column"} alignItems="center">
          <Text
            fontSize={{ base: "20px", md: "25px", lg: "30px" }}
            color={"black.700"}
            fontWeight={700}
            mt={6}
          >
            {"Register your device"}
          </Text>
          <Text
            fontSize={{ base: "15px", md: "17px", lg: "20px" }}
            mt={2}
            color={"gray.500"}
          >
            <>
            <span>{`If you want to use our application, please write ID here and confirm registration using button.`}</span>
            <br/>
            <strong>{`Press button on Panel by 3 sec.`}</strong>
            </>
          </Text>
        </Flex>
        <Flex flexDirection={"column"} mt={8} alignItems="center">
          <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
            <InputForm image={ID} text="Device ID">
              <Input
                type="text"
                width={{ base: "100%" }}
                variant="flushed"
                borderColor={"gray.500"}
                focusBorderColor="blue.300"
                {...register("panelID", { required: true, maxLength: 30 })}
                isInvalid={errors.panelID ? true : false}
              />
            </InputForm>
            {isPending ? (
              <Loader />
            ) : (
              <SubmitButton image={login} text="Confirm" />
            )}
          </form>
          {isRegister && <Navigate to="/homepage/info-register-device" />}
        </Flex>
      </Flex>
    </Flex>
  );
}
