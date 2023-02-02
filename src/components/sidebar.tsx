import { Avatar, Box, Button, Flex, Heading, Link, useColorModeValue } from '@chakra-ui/react'

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
      <Box 
        position="absolute"
        display="flex"
        alignItems="center"
        top="56px"
        left="90px"
        gap="16px"
      > 
        <Avatar src='https://avatars.githubusercontent.com/u/80000943?v=4' name="Lucas Ezidro" />

        <Heading size="md">Olá Lucas Ezidro</Heading>
      </Box>


      <Button
        position="relative"
        left="150px"
        top="156px"
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

      <Box
        margin="auto"
        display="flex"
        flexDir="column"
        gap="30px"
        pr="100px"
      >
        <Link color={borderButton}>Meus Favoritos</Link>
        <Link color={borderButton}>Meu Perfil</Link>
        <Link color={borderButton}>Configurações</Link>
        <Link color={borderButton}>Fale Conosco</Link>
      </Box>
    </Flex>
  )
}
