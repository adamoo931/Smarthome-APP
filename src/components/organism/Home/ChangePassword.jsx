import { Flex, Box, Text, Input } from "@chakra-ui/react";
import { lock, login } from "../../../assets/Images";
import {
  SubmitButton,
  InputForm,
  Loader,
  InfoAlert,
} from "./../../molecule/Auth/index.js";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "./../../../api/index.js";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export function ChangePassword() {

  // Method for performing a request to api
  const { isPending, mutate } = useMutation({
    mutationFn: updatePassword,
    onSuccess: (data) => {
      console.log(data);
      setIsRedirect(true);
    },
    onError: (err) => {
      console.error(err.message);
      setErrorMessage(err.message);
      setIsError(true);
    },
  });

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["access-token"]);
  const [isRedirect , setIsRedirect] = useState(false);

  // Method for submiting form
  const onSubmit = (data) => {
    const { password, confirmPassword , currentPassword } = data;
    const access_token = cookies["access-token"];
    mutate({ password, confirmPassword, currentPassword , access_token });
  };

  // Effect for clearing error message
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsError(false);
      setErrorMessage("");
    }, 4000);
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
        <Flex flexDirection={"column"} alignItems="center">
          <Box>
            <Text
              fontSize={{ base: "20px", md: "25px", lg: "30px" }}
              color={"black.700"}
              className="dm-sans"
              fontWeight={700}
            >
              {"Change password"}
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "15px", md: "17px", lg: "20px" }}
              marginTop={3}
              className="dm-sans"
              color={"gray.500"}
            >
              {"You can change your current password here"}
            </Text>
          </Box>
        </Flex>
        <Flex flexDirection={"column"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm
              image={lock}
              text="Current password"
              isError={isError}
              errorMessage={errorMessage}
            >
              <Input
                type="password"
                width={{ base: "100%" }}
                variant="flushed"
                borderColor={"gray.500"}
                focusBorderColor="blue.300"
                {...register("currentPassword", { required: true, maxLength: 30 })}
                isInvalid={errors.currentPassword ? true : false}
              />
            </InputForm>
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
              text="Confirm new Password"
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
          {isRedirect && <Navigate to="/homepage/info-reset-password" />}
        </Flex>
      </Flex>
    </Flex>
  );
}
