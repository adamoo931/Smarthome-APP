import { Flex } from "@chakra-ui/react";
import { Temperature, Humidity } from "./../../../assets/Images/index.js";
import { ForwardPageButton } from "./../../molecule/Auth/ForwardPageButton.jsx";
import { ElementHeader, ElementSensor } from "../../molecule/Home/index.js";
import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import {getDeviceID , getHum , getTemp} from './../../../api/index.js'
import { useState , useEffect} from "react";

export function Sensor() {

  const [cookies, setCookie, removeCookie] = useCookies(["access-token"]);
  const [temp , setTemp] = useState("0");
  const [hum, setHum] = useState("0");

  const [enableSecondQuery, setEnableSecondQuery] = useState(false);

  const { data : deviceID , isSuccess : isDeviceID } = useQuery({ queryKey: ['deviceID'], queryFn: async () => {
    const token = cookies['access-token'];
    if (!token) {
      throw new Error('No access token available');
    }
    return getDeviceID(token);
  },
  });

  useEffect(() => {
    if (isDeviceID) {
      setEnableSecondQuery(true);
    }
  }, [isDeviceID,deviceID]);

  const { data : dataTemp } = useQuery({ queryKey: ['temp'], queryFn: async () => {
      const token = cookies['access-token'];
      if (!token) {
        throw new Error('No access token available');
      }
      return getTemp(deviceID,token);
    },
    enabled : enableSecondQuery,
    refetchInterval: 10000, // Ustawienie interwału na 10000 ms (5 sekund)
  });

  const { data : dataHum  } = useQuery({ queryKey: ['hum'], queryFn: async () => {
    const token = cookies['access-token'];
    if (!token) {
      throw new Error('No access token available');
    }
    return getHum(deviceID,token);
  },
  enabled : enableSecondQuery,
  refetchInterval: 10000, // Ustawienie interwału na 10000 ms (5 sekund)
});

useEffect(()=>{
  if (dataTemp !== undefined) 
    setTemp(dataTemp);

  if (dataHum !== undefined) 
    setHum(dataHum);
  
},[dataTemp,dataHum])

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
        <ElementHeader text="Temperature & Humidity" />
        <Flex alignItems={"center"} justifyContent={"center"} width={"100%"}>
          <Flex
            flex="12"
            bg={"#E09FFF"}
            margin={5}
            borderRadius="10"
            flexDirection="column"
          >
            <ElementSensor image={Temperature} value={temp} symbol="°C"/>
            <ElementSensor image={Humidity} value={hum} symbol="%"/>
            <Flex marginTop={10} marginBottom={5}>
              <ForwardPageButton url="/homepage" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
