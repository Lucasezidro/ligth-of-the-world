import React from "react";
import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { ButtonColorSwitch } from "./buttonColorSwitch/buttonColorSwitch";
import crossImage from "../assets/cruz-removebg-preview.png";

export function NavBar() {
  const bg = useColorModeValue("gray.200", "gray.800");
  const title = useColorModeValue("purple.650", "green.500");
  const subTitle = useColorModeValue("gray.900", "gray.300");

  return (
    <Box bg={bg} w="600px" h="100vh" p="56px">
      <ButtonColorSwitch />
      <Heading as="h1" size="3xl" textAlign="center" mt="50px" color={title}>
        Luz Do Mundo
      </Heading>

      <Flex w="300px" m="auto" mt="50px">
        <img src={crossImage} alt="imagem Cruz" />
      </Flex>

      <Flex m="auto" mt="120px" ml="50px">
        <Text>
          "Enquanto estou no mundo, sou a luz do mundo". <br />
          <Text pos="relative" left="150px" top="10px" color={subTitle}>
            João 8:12
          </Text>
        </Text>
      </Flex>
    </Box>
  );
}
