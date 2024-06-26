import { Flex, Text, Input } from "@chakra-ui/react";
import { mail, user, lock, login } from "../../../assets/Images/index.js";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  InfoAccountRegister,
  SubmitButton,
  InputForm,
  Loader,
  InfoAlert,
} from "./../../molecule/Auth/index.js";
import { registerUser } from "./../../../api/index.js";

export function Register() {
  // Method for performing a request to api
  const { isPending, mutate } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      const { message } = data;
      setIsRegister(true);
      setSuccessMessage(message);
      setTimeout(() => {
        setIsRedirect(true);
      }, 2000);
    },
    onError: (err) => {
      console.error(err.message);
      setIsError(true);
      setErrorMessage(err.message);
    },
  });

  const [isRegister, setIsRegister] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState(false);

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
      {isRegister && <InfoAlert message={successMessage} status="success" />}
      <Flex
        width={{ base: "95%", sm: "80%", md: "50%", lg: "50%", xl: "40%" }}
        borderRadius={"xl"}
        flexDirection={"column"}
        boxShadow={"xl"}
        bg={"white"}
      >
        <Flex flexDirection={"column"} alignItems="center" mt={4}>
          <Text
            fontSize={{ base: "20px", md: "25px", lg: "30px" }}
            color={"black.700"}
            fontWeight={700}
            mt={6}
          >
            {"Getting Started"}
          </Text>
          <Text
            fontSize={{ base: "15px", md: "17px", lg: "20px" }}
            mt={2}
            color={"gray.500"}
          >
            {"Create an account to continue!"}
          </Text>
        </Flex>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDirection={"column"} alignItems="center" p={5}>
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
            <InputForm image={user} text="Username">
              <Input
                type="text"
                width={{ base: "100%" }}
                variant="flushed"
                borderColor={"gray.500"}
                focusBorderColor="blue.300"
                {...register("name", { required: true, maxLength: 30 })}
                isInvalid={errors.name ? true : false}
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
                {...register("password", { required: true, maxLength: 20 })}
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
                  maxLength: 20,
                })}
                isInvalid={errors.confirmPassword ? true : false}
              />
            </InputForm>
            {isPending ? (
              <Loader />
            ) : (
              <SubmitButton image={login} text="Sign Up" />
            )}
            <InfoAccountRegister
              info="Already have an account?"
              authStatus="Sign In"
            />
          </Flex>
        </form>
        {isRedirect && <Navigate to={`/info-register?email=${email}`} />}
      </Flex>
      {/* END OF FORMULA */}
    </Flex>
  );
}
