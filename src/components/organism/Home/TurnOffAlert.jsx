import {
    Flex , Box , Center , Text , Card, CardHeader, Heading , Spinner
} from "@chakra-ui/react";
import { ForwardPageButton } from "./../../molecule/Auth/ForwardPageButton.jsx";
import { useMutation} from "@tanstack/react-query";
import { getAlertInfo, turnOffAlert } from "../../../api/index.js";
import { useCookies } from "react-cookie";
import { useQuery} from "@tanstack/react-query";
import { CardAlert } from "../../molecule/Home/index.js";

export function TurnOffAlert()
{
    const [cookies, setCookie, removeCookie] = useCookies(["access-token"]);
    // Method for performing a request to api
    const { mutate } = useMutation({
        mutationFn: turnOffAlert,
        onSuccess: () => {
            window.location.reload();
        },
        onError: (err) => {
        console.error(err.message);
        },
    });

    const { data : alertInfo , isLoading } = useQuery({
        queryKey: ["alert"],
        queryFn: async () => getAlertInfo(cookies["access-token"]),
    });
    
    return(
        <Flex flex={1} justifyContent="space-around" marginTop={10}>
            <Flex
            width={{ base: "95%", sm: "80%", md: "60%", lg: "60%", xl: "40%" }}
            p={6}
            borderRadius={"xl"}
            flexDirection={"column"}
            boxShadow={"xl"}
            bg={"white"}
            justifyContent={'center'}
            alignItems={'center'}
            >
                <Box>
                    <Center>
                    <Text
                        fontSize={{ base: "20px", md: "25px", lg: "30px" }}
                        color={"black.700"}
                        className="dm-sans"
                        fontWeight={700}
                    >
                        {"Alerts"}
                    </Text>
                    </Center>
                </Box>
                {isLoading ? <Spinner /> : 
                <>
                    <Flex 
                    width={{ base: "95%", sm: "80%", md: "80%" }}
                    alignItems={'center'}
                    justifyContent={'center'}
                    >
                        {alertInfo ? <CardAlert mutate={mutate} cookies={cookies}/> :
                        <Card>
                            <CardHeader>
                                <Heading size='md'>Nothing to change</Heading>
                            </CardHeader>
                        </Card>}
                    </Flex>
                    <Box mt={10} width="100%">
                        <ForwardPageButton url="/homepage" />
                    </Box>
                </>
                }
            </Flex>
        </Flex>
        
    )
}