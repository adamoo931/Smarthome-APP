import { Flex, Box, Text, Input } from "@chakra-ui/react";
import {
  InfoAccountRegister,
  SubmitButton,
  InputForm,
  Loader,
  InfoAlert,
} from "./../../molecule/Auth/index.js";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { user, login, code } from "../../../assets/Images/index.js";
import { verifyUser } from "./../../../api/index.js";
import { Navigate } from "react-router-dom";

export function VerifyUser() {
  // Method for performing a request to api
  const { isPending, mutate } = useMutation({
    mutationFn: verifyUser,
    onSuccess: () => {
      setIsVerify(true);
    },
    onError: (err) => {
      setIsError(true);
      setErrorMessage(err.message);
    },
  });

  const [isVerify, setIsVerify] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  // Method for submiting form
  const onSubmit = (data) => {
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
      {/* START OF FORM */}
      {isError && <InfoAlert message={errorMessage} status="error" />}
      <Flex
        p={6}
        width={{ base: "90%", sm: "80%", md: "60%", lg: "50%", xl: "40%" }}
        borderRadius={"xl"}
        flexDirection={"column"}
        boxShadow={"xl"}
        bg={"white"}
      >
        <Flex flexDirection={"column"} alignItems={"center"} mt={4}>
          <Box>
            <Text
              fontSize={{ base: "20px", md: "25px", lg: "30px" }}
              color={"black.700"}
              className="dm-sans"
              fontWeight={700}
            >
              {"Verify User"}
            </Text>
          </Box>
        </Flex>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDirection={"column"} p={5}>
            <InputForm image={user} text="Email">
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
            <InputForm image={code} text="Verification Code">
              <Input
                type="text"
                width={{ base: "100%" }}
                variant="flushed"
                borderColor={"gray.500"}
                focusBorderColor="blue.300"
                {...register("activationCode", {
                  required: true,
                  maxLength: 20,
                })}
                isInvalid={errors.password ? true : false}
              />
            </InputForm>
            {isPending ? (
              <Loader />
            ) : (
              <SubmitButton image={login} text="Verify" />
            )}
          </Flex>
        </form>
        {isVerify && <Navigate to="/info-verify-user" />}
        <InfoAccountRegister
          info="Do you want to login?"
          authStatus="Sign In"
        />
      </Flex>
    </Flex>
  );
}
