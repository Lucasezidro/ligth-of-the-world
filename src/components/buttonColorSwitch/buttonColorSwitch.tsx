import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MdNightlight, MdLightMode } from "react-icons/md"

export function ButtonColorSwitch() {
    const { colorMode, toggleColorMode } = useColorMode()
    const buttonColor = useColorModeValue("gray.200", "gray.800")
    const hover = useColorModeValue("gray.100", "gray.700")
    const bg = useColorModeValue("purple.600", "yellow.200")

    return (
        <Button
            onClick={toggleColorMode}
            color={bg}
            bg={buttonColor}
            border="1px"
            borderColor={bg}
            opacity="0.8"
            _hover={{
                bg: hover,
                opacity: 1
            }}
        >
            {colorMode === "dark" ? <MdNightlight /> : <MdLightMode />}
        </Button>
    )
}