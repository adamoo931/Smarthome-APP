import { useState } from "react";
import { MenuItem } from "../../molecule/Home/index";
import { useQuery} from "@tanstack/react-query";
import {
  Container,
  Flex,
  Box,
  Text,
  Heading,
  Stack,
  VStack,
  IconButton,
  Button,
  useColorModeValue,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaKey,
  FaCog,
  FaPhone,
  FaEdit,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { getUserName } from "../../../api/index";
import { useCookies } from "react-cookie";
import { getAlertInfo } from "../../../api/index";

export function Profile() {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [description, setDescription] = useState(
    "You can edit description here"
  );
  const [inputValue, setInputValue] = useState(description);

  const handleDescriptionChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSave = () => {
    setDescription(inputValue);
    onClose();
  };

  const [cookies, setCookie, removeCookie] = useCookies(["access-token"]);

  const { data : name , isSuccess : nameIsSuccess } = useQuery({
    queryKey: ["name"],
    queryFn: async () => getUserName(cookies["access-token"]),
  });

  const { data : alertInfo  } = useQuery({
    queryKey: ["alert"],
    queryFn: async () => getAlertInfo(cookies["access-token"]),
  });

  return (
    <Container minW={"358px"} maxW={"none"} m={"unset"} p={"unset"} mt={10}>
      <Flex
        height={"100%"}
        justifyContent={"center"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box
          maxW={{ base: "sm", md: "md" }}
          w="full"
          bg={bg}
          boxShadow="lg"
          rounded="lg"
          p={6}
          textAlign="center"
        >
          <HStack
            bg={"blue.200"}
            p={4}
            spacing={4}
            align="center"
            mb={4}
            borderRadius="md"
            boxShadow="md"
          >
            <IconButton
              icon={<FaUser />}
              pointerEvents="none"
              aria-label="Avatar"
              width={{ base: "80px", lg: "100px" }}
              height={{ base: "80px", lg: "100px" }}
              fontSize="4xl"
              variant="ghost"
            />
            <VStack align="start" spacing={1}>
              <Heading fontSize="2xl" fontFamily="body">
                {nameIsSuccess && name}
              </Heading>
              <HStack>
                <Text fontSize="md" color={color}>
                  {description}
                </Text>
                <IconButton
                  icon={<FaEdit />}
                  aria-label="Edit description"
                  size="sm"
                  variant="ghost"
                  onClick={onOpen}
                />
              </HStack>
            </VStack>
          </HStack>

          <Stack spacing={4} mt={6}>
            <MenuItem
              VARIANT={"ghost"}
              TEXT={"Messages"}
              LEFTICON={<FaEnvelope />}
              URL={alertInfo ? "/homepage/turn-off-alert" : ''}
              isAlert={alertInfo}
            />
            <MenuItem
              VARIANT={"ghost"}
              TEXT={"Change Password"}
              URL={"/homepage/change-password"}
              LEFTICON={<FaKey />}
            />
            <MenuItem
              VARIANT={"ghost"}
              TEXT={"Set limits"}
              URL={"/homepage/set-limits"}
              LEFTICON={<FaCog />}
            />
            <MenuItem
              VARIANT={"ghost"}
              TEXT={"Contact us"}
              URL={"/homepage/contact-us"}
              LEFTICON={<FaPhone />}
            />
          </Stack>
          <MenuItem
            MT={10}
            VARIANT={"outline"}
            COLORSCHEME={"red"}
            TEXT={"Sign out "}
            URL={"/logout"}
            LEFTICON={<FaSignOutAlt />}
          />
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Description</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={inputValue}
              onChange={handleDescriptionChange}
              maxLength={25}
              placeholder="Enter your description"
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}
