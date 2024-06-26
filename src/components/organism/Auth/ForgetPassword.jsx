import { Flex, Box, Text, Input } from "@chakra-ui/react";
import { mail, login } from "../../../assets/Images/index.js";
import {
  InfoAccountRegister,
  SubmitButton,
  InputForm,
  Loader,
  InfoAlert,
} from "./../../molecule/Auth/index.js";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { forgetPassword } from "./../../../api/index.js";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export function ForgetPassword() {
  // Method for performing a request to api
  const { isPending, mutate } = useMutation({
    mutationFn: forgetPassword,
    onSuccess: (data) => {
      console.log(data);
      setIsSendEmail(true);
    },
    onError: (err) => {
      console.error(err.message);
      setIsError(true);
      setErrorMessage(err.message);
    },
  });

  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [isError, setIsError] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  // Method for submiting form
  const onSubmit = (data) => {
    const { email } = data;
    setEmail(email);
    mutate(data);
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
        width={{ base: "95%", sm: "80%", md: "50%", lg: "50%", xl: "40%" }}
        p={6}
        borderRadius={"xl"}
        flexDirection={"column"}
        boxShadow={"xl"}
        bg={"white"}
      >
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Box>
            <Text
              fontSize={{ base: "20px", md: "25px", lg: "30px" }}
              color={"black.700"}
              className="dm-sans"
              fontWeight={700}
            >
              {"Password Recovery"}
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "15px", md: "17px", lg: "20px" }}
              marginTop={3}
              className="dm-sans"
              color={"gray.500"}
            >
              {"Enter your e-mail to recover your password"}
            </Text>
          </Box>
        </Flex>
        <Flex flexDirection={"column"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm image={mail} text="Email">
              <Input
                type="email"
                width={{ base: "100%" }}
                variant="flushed"
                borderColor={"gray.500"}
                focusBorderColor="blue.300"
                {...register("email", { required: true, maxLength: 50 })}
                isInvalid={errors.email ? true : false}
              />
            </InputForm>
            {isPending ? (
              <Loader />
            ) : (
              <SubmitButton image={login} text="Submit" />
            )}
          </form>
          {isSendEmail && (
            <Navigate to={`/info-forget-password?email=${email}`} />
          )}
          <InfoAccountRegister
            info="Do you want to login?"
            authStatus="Sign In"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
