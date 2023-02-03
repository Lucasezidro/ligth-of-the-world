import { Box, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { GrInstagram } from "react-icons/gr"

export function Footer () {
    const footerColor = useColorModeValue("purple.650", "green.500")
    const textColor = useColorModeValue("gray.900", "gray.300")
    const bg = useColorModeValue("white", "gray.900")

    return (
        <Flex
            as="footer"
            borderTop="1px"
            borderColor="gray.600"
            w="calc(100% - 600px)"
            h="100px"
            position="absolute"
            display="flex"
            flexDir="row"
            justifyContent="space-between"
            right="0"
            bottom="0"
            padding="56px"
            bg={bg}
        >
            <Box display="flex" gap="10px">
                <Link 
                    href="https://www.instagram.com/" 
                    fontSize="20px"
                    color={footerColor}
                >
                    <GrInstagram />
                </Link>
                <Text color={textColor} fontWeight="bold">
                    Conheça um pouco mais sobre a comunidade!
                </Text>

            </Box>

            <Box>
                <Link href="/content" color={footerColor}>Ver mais conteúdos</Link>
            </Box>
         </Flex>
    )
}