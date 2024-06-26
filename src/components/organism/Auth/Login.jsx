import { Flex, Box, Text, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { user, lock, login } from "../../../assets/Images/index.js";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { loginUser } from "./../../../api/index.js";
import { Navigate } from "react-router-dom";
import {
  InfoAccountLogin,
  SubmitButton,
  InfoForgetPassword,
  InputForm,
  Loader,
  InfoAlert,
} from "./../../molecule/Auth/index.js";

export function Login() {
  // Method for performing a request to api
  const { isPending, mutate } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      const { payload } = data;
      const { token } = payload;
      console.log(token);
      setCookie("access-token", token);
      setIsLogin(true);
    },
    onError: (err) => {
      setIsError(true);
      setErrorMessage(err.message);
    },
  });

  const [isLogin, setIsLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
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
              {"Let's Sign You in"}
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "15px", md: "17px", lg: "20px" }}
              marginTop={3}
              className="dm-sans"
              color={"gray.500"}
            >
              {"Welcome back, you've been missed!"}
            </Text>
          </Box>
        </Flex>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDirection={"column"} p={5}>
            <InputForm image={user} text="Username or Email">
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
            <InputForm image={lock} text="Password">
              <Input
                type="password"
                width={{ base: "100%" }}
                variant="flushed"
                borderColor={"gray.500"}
                focusBorderColor="blue.300"
                {...register("password", { required: true, maxLength: 20 })}
                isInvalid={errors.password ? true : false}
              />
            </InputForm>
            <InfoForgetPassword />
            {isPending ? (
              <Loader />
            ) : (
              <SubmitButton image={login} text="Login" />
            )}
            <InfoAccountLogin
              info="Don't have an account?"
              authStatus="Sign up"
            />
          </Flex>
        </form>
        {isLogin && <Navigate to="/homepage" />}
      </Flex>
    </Flex>
  );
}
