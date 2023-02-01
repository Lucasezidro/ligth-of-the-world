import { Box, Button, Flex, Input, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import { Post } from "../../components/Post";
import { SideBar } from "../../components/sidebar";

export function Home() {
    const contentBackground = useColorModeValue("white", "gray.900")
    const focus = useColorModeValue("purple.650", "green.500")

    return (
        <>
            <NavBar />
            <Flex
                position="absolute"
                top="0"
                right="0"
                w="calc(100% - 600px)"
                h="calc(100vh - 100px)"
                bg={contentBackground}
                p="56px"
            >
                    <Input 
                        variant="outline"
                        placeholder="Sobre qual assunto você quer ler hoje ?"
                        zIndex="1"
                        w="400px"
                        _focus={{
                            borderColor: focus
                        }}
                    />

                    <Flex
                        position="absolute"
                        left="170px"
                        display="flex"
                        flexDir="column"
                    >
                        <Post 
                            name="Lucas Ezidro" 
                            src="https://avatars.githubusercontent.com/u/80000943?v=4" 
                            author="Lucas dos Santos Ezidro"
                            date="01.02.2023"
                            title="Um pouco sobre o livro de Gênesis"
                            publishedDate="1d"
                            content="O livro de gênesis é o primeiro livro da Biblia, onde conta a historia dos primordios da Terra, assim como as historias dos patriarcas, como Abraão, Jaco, Isaque, também sobre a arca de Noé, a torre de Babel, entre outros."
                        />

                        <Post 
                              name="Lucas Ezidro" 
                              src="https://avatars.githubusercontent.com/u/80000943?v=4" 
                              author="Lucas dos Santos Ezidro"
                              date="30.01.2023"
                              title="Um pouco sobre o livro de Exodo"
                              publishedDate="2d"
                              content="Lorem ipsum"
                        />
                    </Flex>

                    <SideBar />


            </Flex>
            <Footer />
        </>
    )
}