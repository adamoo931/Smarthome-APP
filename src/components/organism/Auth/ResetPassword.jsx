import { Flex, Box, Text, Input } from "@chakra-ui/react";
import { lock, login } from "../../../assets/Images";
import {
  InfoAccountRegister,
  SubmitButton,
  InputForm,
  Loader,
  InfoAlert,
} from "./../../molecule/Auth/index.js";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "./../../../api/index.js";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export function ResetPassword() {
  // Method for performing a request to api
  const { isPending, mutate } = useMutation({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      console.log(data);
      setIsRedirect(true);
    },
    onError: (err) => {
      console.error(err.message);
      if (err.message === "token") {
        setIsInvalidToken(true);
        setErrorMessage("Invalid token , please generate new token");
      } else {
        setIsError(true);
        setErrorMessage(err.message);
      }
    },
  });

  const [searchParams] = useSearchParams();
  const [isRedirect, setIsRedirect] = useState(false);
  const tokenLink = searchParams.get("token");
  const [isInvalidToken, setIsInvalidToken] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Method for submiting form
  const onSubmit = (data) => {
    const { password, confirmPassword } = data;
    mutate({ password, confirmPassword, tokenLink });
  };

  // Effect for clearing error message
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsError(false);
      setErrorMessage("");
      setIsInvalidToken(false);
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, [isError, errorMessage]);

  return (
    <Flex flex={1} justifyContent="space-around" marginTop={10}>
      {/* START OF FORMULA */}
      {isInvalidToken && <InfoAlert message={errorMessage} status="error" />}
      <Flex
        width={{ base: "95%", sm: "80%", md: "50%", lg: "50%", xl: "40%" }}
        p={6}
        borderRadius={"xl"}
        flexDirection={"column"}
        boxShadow={"xl"}
        bg={"white"}
      >
        <Flex flexDirection={"column"} alignItems="center">
          <Box>
            <Text
              fontSize={{ base: "20px", md: "25px", lg: "30px" }}
              color={"black.700"}
              className="dm-sans"
              fontWeight={700}
            >
              {"Reset Password"}
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "15px", md: "17px", lg: "20px" }}
              marginTop={3}
              className="dm-sans"
              color={"gray.500"}
            >
              {"You can reset your password here"}
            </Text>
          </Box>
        </Flex>
        <Flex flexDirection={"column"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm
              image={lock}
              text="Password"
              isError={isError}
              errorMessage={errorMessage}
            >
              <Input
                type="password"
                width={{ base: "100%" }}
                variant="flushed"
                borderColor={"gray.500"}
                focusBorderColor="blue.300"
                {...register("password", { required: true, maxLength: 30 })}
                isInvalid={errors.password ? true : false}
              />
            </InputForm>
            <InputForm
              image={lock}
              text="Confirm Password"
              isError={isError}
              errorMessage={errorMessage}
            >
              <Input
                type="password"
                width={{ base: "100%" }}
                variant="flushed"
                borderColor={"gray.500"}
                focusBorderColor="blue.300"
                {...register("confirmPassword", {
                  required: true,
                  maxLength: 30,
                })}
                isInvalid={errors.confirmPassword ? true : false}
              />
            </InputForm>
            {isPending ? (
              <Loader />
            ) : (
              <SubmitButton image={login} text="Submit" />
            )}
          </form>
          {isRedirect && <Navigate to="/info-reset-password" />}
          <InfoAccountRegister
            info="Do you want to login?"
            authStatus="Sign In"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
