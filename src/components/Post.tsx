import { Avatar, Box, Button, filter, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc"

export type PostProps = {
    name: string;
    src: string;
    author: string;
    date: any;
    title: string;
    content: string;
    publishedDate: any;
}

// const apiKey = import.meta.env.API_KEY

export function Post ({ name, src, author, date, title, content, publishedDate }: PostProps) {
    const border = useColorModeValue("gray.700", "gray.500")
    const text = useColorModeValue("gray.700", "gray.300")
    const bgButton = useColorModeValue("white", "gray.900")
    const borderButton = useColorModeValue("purple.650", "green.500")
    const hoverButton = useColorModeValue("gray.200", "gray.800")
    const hoverBorderButton = useColorModeValue("purple.600", "green.300")

    const [like, setLike] = useState<boolean>(false)

    // const [post, setPost] = useState()

    // const getPost = async (url: string) => {
    //     const res = await fetch(url)
    //     const data = await res.json()

    //     setPost(data)
    // }

    // useEffect(() => {
    //     const adviveURL = "https://api.goperigon.com/v1/all?apiKey=2d4f755b-1bad-4e7d-b7fd-4ed28310ad48"

    //     getPost(adviveURL)
    // }, [])

    // console.log(post)

    return (
        <Flex
            mt="100px"
            display="flex"
            flexDir="column"
            overflow="hidden"
        >
            <Box display="flex" gap="12px" alignItems="center">
                <Avatar name={name} src={src} border="1px" borderColor={borderButton} />

                <Text>{author}</Text>
                <Text>|</Text>
                <Text>{date}</Text>
                <Text>|</Text>
                <Text>Publicado há {publishedDate}</Text>
            </Box>

            <Box borderTop="1px" borderColor={border} mt="16px">
                <Heading as="h2" size="lg" mt="16px">{title}</Heading> 
            </Box>

            <Box mt="16px">
                <Text color={text} maxW="550px">
                    {content}
                </Text>
            </Box>

            <Box mt="24px" display="flex" justifyContent="space-between">
                <Button
                    bg={bgButton}
                    border="1px"
                    borderColor={borderButton}
                    onClick={() => {}}
                    transition="all 0.5s"
                    _hover={{
                        bg: hoverButton,
                        borderColor: hoverBorderButton
                    }}
                >
                    Continuar lendo
                </Button>

                <Button 
                    bg={bgButton}
                    border="1px"
                    borderColor={borderButton}
                    onClick={() => setLike(true)}
                    _hover={{
                        bg: hoverButton,
                        borderColor: hoverBorderButton
                    }}
                >
                    {like ? <FcLike /> : <FcLikePlaceholder />}
                </Button>
            </Box>
        </Flex>
    )
}