import { Flex } from "@chakra-ui/react";
import {
  ElementHeader,
  ElementState,
  ElementBody,
} from "./../../molecule/Home/index";
import { ForwardPageButton } from "../../molecule/Auth/index";
import { useState , useEffect } from "react";
import { light_off, light_on , disabled_light } from "./../../../assets/Images/index";
import { useCookies } from "react-cookie";
import { useMutation , useQuery } from "@tanstack/react-query";
import {setDevice , getDeviceState} from './../../../api/index'

export function Light() {
  const [isOpen, setIsOpen] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["access-token"]);
  const { mutate } = useMutation({
      mutationFn: setDevice
  });

  const { isSuccess, isLoading , data  } = useQuery({
    queryKey: ["stateLight"],
    queryFn: async () => getDeviceState(cookies["access-token"],'light'),
  });

  // Setting state only once
  useEffect(()=>{
    if(isSuccess)
      setIsOpen(data);
    
  },[isSuccess,data]);

  function onChange()
  {
      const access_token = cookies['access-token'];
      const device = "light";
      mutate({access_token,device, value : !isOpen});
  }
  
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Flex
        marginTop={"5%"}
        bg={"white"}
        width={{ base: "90%", md: "70%", lg: "50%" }}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection="column"
        borderRadius={20}
      >
        {/* START OF SENSOR BODY */}
        <ElementHeader text="Light" />
        <Flex alignItems={"center"} justifyContent={"center"} width={"100%"}>
          <Flex
            flex="12"
            bg={"#E09FFF"}
            margin={5}
            borderRadius="10"
            flexDirection="column"
          >
            <ElementState
              isOpen={isOpen}
              plusState="on"
              minusState="off"
              device="Turn"
              isLoading={isLoading}
            />
            <span onClick={()=>{
              if(!isLoading)
                onChange();
            }}>
              <ElementBody
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                plusImage={light_on}
                minusImage={light_off}
                disabledImage={disabled_light}
                isLoading={isLoading}
                text="Click Here to turn on / off the light"
              />
            </span>
            <Flex margin={5}>
              <ForwardPageButton url="/homepage" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
