import { Button, Flex, useColorModeValue } from '@chakra-ui/react'

export function SideBar() {
  const bgButton = useColorModeValue('white', 'gray.900')
  const borderButton = useColorModeValue('purple.650', 'green.500')
  const hoverButton = useColorModeValue('gray.200', 'gray.800')
  const hoverBorderButton = useColorModeValue('purple.600', 'green.300')

  return (
    <Flex
      pos="absolute"
      right="0"
      top="0"
      w="400px"
      h="calc(100vh - 112px)"
      borderLeft="1px"
      borderColor="gray.600"
    >
      <Button
        position="relative"
        left="150px"
        top="56px"
        bg={bgButton}
        border="1px"
        borderColor={borderButton}
        onClick={() => {}}
        transition="all 0.5s"
        _hover={{
          bg: hoverButton,
          borderColor: hoverBorderButton,
        }}
      >
        Novo Post
      </Button>
    </Flex>
  )
}
