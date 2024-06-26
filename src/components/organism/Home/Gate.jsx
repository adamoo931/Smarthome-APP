import { Flex } from "@chakra-ui/react";
import {
  ElementHeader,
  ElementState,
  ElementBody,
} from "./../../molecule/Home/index";
import { ForwardPageButton } from "../../molecule/Auth/index";
import { open_gate, close_gate , disabled_gate } from "./../../../assets/Images/index";
import { useEffect, useState } from "react";
import {setDevice , getDeviceState} from './../../../api/index'
import { useMutation , useQuery} from "@tanstack/react-query";
import { useCookies } from "react-cookie";

export function Gate() {
  const [isOpen, setIsOpen] = useState(false);
  //const [imitateChange , setImitateChange] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["access-token"]);

  const { isSuccess, isLoading , data } = useQuery({
    queryKey: ["stateGate"],
    queryFn: async () => getDeviceState(cookies["access-token"],'gate'),
  });

  // Setting state only once
  useEffect(()=>{
    if(isSuccess)
      setIsOpen(data);
  },[isSuccess,data]);

  // QUERY FOR CHANGING STATE OF DEVICE
  const { mutate } = useMutation({
    mutationFn: setDevice,
    onSuccess: () => {
    },
    onError: (err) => {
    },
  });

  function onChange()
  {
    const access_token = cookies['access-token'];
    const device = "gate";
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
        <ElementHeader text="Gate" />
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
              plusState="open"
              minusState="close"
              device="The Gate"
              isLoading={isLoading}
            />
            <span onClick={()=>{
              if(!isLoading)
                onChange();
            }}>
              <ElementBody
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              text="Click Here to close/open gate"
              isLoading={isLoading}
              plusImage={open_gate}
              minusImage={close_gate}
              disabledImage={disabled_gate}
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
