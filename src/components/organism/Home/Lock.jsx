import { Flex } from "@chakra-ui/react";
import { ElementHeader , ElementState , ElementBody } from './../../molecule/Home/index'
import { ForwardPageButton } from "../../molecule/Auth/index";
import { open_lock , close_lock , disabled_lock} from './../../../assets/Images/index'
import { useState , useEffect } from "react";
import { useCookies } from "react-cookie";
import { useMutation , useQuery } from "@tanstack/react-query";
import {setDevice , getDeviceState} from './../../../api/index'

export function Lock()
{
    const [isOpen , setIsOpen] = useState(false);
    const [lockState , setLockState] = useState(false);
    // QUERY FOR CHANGING STATE OF DEVICE
    const [cookies, setCookie, removeCookie] = useCookies(["access-token"]);
    const {  mutate } = useMutation({
        mutationFn: setDevice,
    });

    const { isSuccess, isLoading , data } = useQuery({
    queryKey: ["stateLock"],
    queryFn: async () => getDeviceState(cookies["access-token"],'lock'),
    });

    
    // Setting state only once
    useEffect(()=>{
        if(isSuccess)
        setIsOpen(data);
    },[isSuccess,data]);

    useEffect(() => {
        setLockState(!isOpen);
      }, [isOpen]);

    function onChange()
    {
        const access_token = cookies['access-token'];
        const device = "lock";
        mutate({access_token,device, value : lockState});
    }

    return(
        <Flex  justifyContent={'center'} alignItems={'center'}>
            <Flex marginTop={'5%'} bg={'white'} width={{base : '90%', md : '70%' , lg : '50%'}} justifyContent={'center'} alignItems={'center'} flexDirection='column' borderRadius={20}>
                {/* START OF SENSOR BODY */}
                <ElementHeader text="Lock"/>
                <Flex alignItems={'center'} justifyContent={'center'} width={'100%'}>
                    <Flex flex='12' bg={'#E09FFF'} margin={5} borderRadius='10' flexDirection='column'>
                        <ElementState isOpen={lockState} plusState="open" minusState="close" device="The Lock" isLoading={isLoading}/>
                        <span onClick={()=>{
                            if(!isLoading)
                                onChange();
                        }}>
                            <ElementBody isOpen={lockState} setIsOpen={setLockState} plusImage={open_lock} minusImage={close_lock} disabledImage={disabled_lock} isLoading={isLoading} text="Click Here to close/open lock" />
                        </span>
                        <Flex margin={5}>
                            <ForwardPageButton url='/homepage'/>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}