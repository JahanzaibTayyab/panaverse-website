/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import NextLink from "next/link";
import {
  Container,
  chakra,
  Box,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Button,
  Link,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { fadeIn, planetVariants } from "@/utils";
import imageBackground from "@/assets/images/education-shape-05.png";
import imageBackground2 from "@/assets/images/education-shape-03.png";
import web3 from "@/assets/images/web3.png";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const shortInfo = () => (
  <Container
    pt={90}
    position={"relative"}
    pb={50}
    overflow="hidden"
    maxW="container.xl"
  >
    <ChakraBox
      variants={{
        hidden: {},
        show: {},
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Box
        position={"absolute"}
        left={0}
        top="-2%"
        display={{ base: "none", md: "block" }}
      >
        <Image src={imageBackground} alt="shape" />
      </Box>
      <Box
        position={"absolute"}
        right={0}
        top="2%"
        display={{ base: "none", md: "block" }}
      >
        <Image src={imageBackground2} alt="shape" />
      </Box>
      <SimpleGrid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} spacing={12}>
        <ChakraBox
          variants={planetVariants("left")}
          borderRadius={"40px 4px 40px 4px"}
          objectFit={"cover"}
          overflow="hidden"
        >
          <Image src={web3} alt="web3" />
        </ChakraBox>
        <ChakraBox variants={fadeIn("left", "tween", 0.2, 1)}>
          <Stack alignItems={"start"}>
            <Heading size="2xl">What is Web 3.0? </Heading>
            <Text color="#575757" lineHeight={"26px"}>
              Web 3.0 has the potential to change the internet as we know it
              forever. You're still early in catching the trend and building
              your first blockchain application, acquiring the skills to get a
              high- paying job, or creating your own web 3.0 projects that can
              make you money. In Web 2.0 all the data is controlled by the Big
              Tech companies, such as Google, Apple, etc. In the decentralized
              web, no single person/ company owns any data or information about
              anyone, and everything is visible to the public. Web3, also known
              as the decentralized web, is the third and latest" phase” of the
              internet. Web3 is built on peer-to-peer networks of computers that
              talk to each other without middlemen.
            </Text>
            <Box pt={5}>
              <Link
                as={NextLink}
                href={"/web3"}
                _hover={{
                  outline: "none",
                  boxShadow: "md",
                }}
              >
                <Button
                  colorScheme="blue"
                  padding="0px 40px"
                  height={50}
                  _hover={{
                    bg: "red.500",
                  }}
                >
                  Read more
                </Button>
              </Link>
            </Box>
          </Stack>
        </ChakraBox>
      </SimpleGrid>
    </ChakraBox>
  </Container>
);

export default shortInfo;
