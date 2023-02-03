import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonColorSwitch } from "../../components/buttonColorSwitch/buttonColorSwitch";

export function CreatePost() {
  const text = useColorModeValue("purple.650", "purple.500");
  const textInput = useColorModeValue("purple.650", "green.500");
  const bg = useColorModeValue("gray.100", "gray.900");
  const focus = useColorModeValue("purple.650", "purple.500");
  const borderColor = useColorModeValue("gray.700", "gray.500");

  const router = useNavigate()

  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false)
  const [titlePost, setTitlePost] = useState<string>("");
  const [content, setContent] = useState<string>("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function handleClick () {
    setShowSuccessMessage(true)

    setTimeout(() => {
      router("/content")
    }, 4000);
  }
  
  const isError = !titlePost

  return (
    <Flex
      margin="56px"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
    >
      <Flex position="absolute" left="56px" top="0">
        <ButtonColorSwitch />
      </Flex>
      <Heading color={text} size="3xl">
        Criar Novo Post
      </Heading>
   
    {showSuccessMessage && (
      <Flex
        position="relative"
        top="100px"
      >
        <Stack spacing={3}>
          <Alert status='success'>
            <AlertIcon />
              Post Publicado com sucesso!
          </Alert>
        </Stack>
      </Flex>
    )}

      <FormControl
        isInvalid={isError}
        onSubmit={handleSubmit}
        pos="relative"
        top="150px"
        w="max-content"
        display="flex"
        flexDir="column"
        h="max-content"
        p="56px"
        bg={bg}
        borderRadius="16px"
      >
        <Text mb="16px" color={textInput} fontWeight="bold">
          Titulo
        </Text>
        <Input
          variant="outline"
          borderColor={borderColor}
          _focus={{
            borderColor: focus,
          }}
          onChange={(e) => setTitlePost(e.target.value)}
          value={titlePost}
          placeholder="Titulo"
        />
        {!isError ? (
          <FormHelperText mb="32px">Digite o titulo do tema do seu post</FormHelperText>
        ) : (
          <FormErrorMessage mb="32px">O título é obrigatório.</FormErrorMessage>
        )}

        <Text mb="16px" color={textInput} fontWeight="bold">
          Escreva aqui o conteúdo do Post
        </Text>
        <Textarea
          borderColor={borderColor}
          _focus={{
            borderColor: focus,
          }}
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder="Conteúdo"
        />
        {!isError ? (
          <FormHelperText mb="32px">Descreva a tese de seu Post</FormHelperText>
        ) : (
          <FormErrorMessage mb="32px">Este campo é obrigatório.</FormErrorMessage>
        )}

        <Button
          type="submit"
          mt="32px"
          bg={focus}
          color="gray.900"
          _hover={{ bg: "purple.700" }}
          onClick={handleClick}
        >
          Publicar Agora
        </Button>
        <Button
          type="submit"
          mt="32px"
          bg="transsparent"
          border="1px"
          borderColor={focus}
          color="purple.500"
          _hover={{ borderColor: "purple.700" }}
          onClick={() => router("/")}
        >
          Voltar
        </Button>
      </FormControl>

    </Flex>
  );
}
