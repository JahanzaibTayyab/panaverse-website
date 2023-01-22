/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import NextLink from "next/link";
import {
  Container,
  Flex,
  chakra,
  FlexProps,
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
import Footer from "./footer";
import { fadeIn } from "@/utils";
import heroCircle from "@/assets/images/hero-1-circle-2.png";
import heroDot from "@/assets/images/hero-1-dot-2.png";
import shape3 from "@/assets/images/shape-03.png";
import heroDots from "@/assets/images/hero-1-dot.png";
import imageCode from "@/assets/images/imageCode.png";
import CourseStatics from "./courseStatics";
import ShortInfo from "./shortDescripation";
import EventAndFeedback from "./eventAndFeedback";
import { TitleText } from "../customText";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Home = (props: FlexProps) => {
  return (
    <>
      <Flex as="main" role="main" direction="column" flex="1" {...props}>
        <Container flex="1" maxW={"full"} padding={0}>
          <Box bg={"#EDEEF3"} minH="container.sm" position="relative">
            <Box
              position={"absolute"}
              left={0}
              top="40%"
              display={{ base: "none", lg: "block" }}
            >
              <Image src={shape3} alt="shape" />
            </Box>
            <Box position={"absolute"} left={0} top="20%">
              <Image src={heroCircle} alt="shape" />
            </Box>
            <Box position={"absolute"} right={0} top="30%">
              <Image src={heroDot} alt="shape" />
            </Box>
            <SimpleGrid
              spacing={8}
              templateColumns={{ sm: "1fr", md: "1fr 1fr" }}
            >
              <Container maxW={"lg"} zIndex="2">
                <Stack pt={95}>
                  <Heading mb={30} color="blue.500" size="sm">
                    Discover your journey
                  </Heading>
                  <Heading size="2xl">
                    Launch Your Dev Career With Web 3 and Metaverse
                  </Heading>
                  <Text color="#575757" fontSize={"sm"} pt={3}>
                    Certified Web 3.0 and Metaverse Developer. A One and Quarter
                    Years Panaverse DAO Earn as you Learn Program Getting Ready
                    for the Next Generation of the Internet.
                  </Text>
                </Stack>
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
                      Explore Course
                    </Button>
                  </Link>
                </Box>
              </Container>
              <Stack zIndex="1" position={"relative"}>
                <Container maxW={"lg"} pt={95}>
                  <ChakraBox
                    padding={"15px 25px 20px"}
                    bg="white"
                    boxShadow="0 30px 60px 0 rgb(1 11 60 / 14%)"
                    borderRadius={4}
                    position="absolute"
                    right="35%"
                    bottom={"20px"}
                    display={{ base: "none", md: "block" }}
                    // @ts-ignore no problem in operation, although type error appears.
                    transition={{
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeOut",
                        repeatType: "loop",
                      },
                    }}
                    animate={{
                      y: ["2rem", "4rem", "6rem"],
                    }}
                  >
                    <Text fontSize={"sm"} color="#474956">
                      Tomorrow is our
                    </Text>
                    <Heading size="sm">“When I Grow Up” Spirit Day!</Heading>
                  </ChakraBox>
                  <ChakraBox
                    position={"absolute"}
                    zIndex={-1}
                    bottom="100px"
                    left="10%"
                    display={{ base: "none", md: "block" }}
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 270, 270, 0],
                      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    // @ts-ignore no problem in operation, although type error appears.
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    <Image src={heroDots} alt="dots" />
                  </ChakraBox>
                  <ChakraBox
                    variants={{
                      hidden: {},
                      show: {},
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                  >
                    <ChakraBox
                      variants={fadeIn("right", "tween", 0.2, 1)}
                      borderRadius={"40px 4px 40px 4px"}
                      objectFit={"cover"}
                      overflow="hidden"
                    >
                      <Image src={imageCode} alt="get-started" />
                    </ChakraBox>
                  </ChakraBox>
                </Container>
              </Stack>
            </SimpleGrid>
          </Box>
        </Container>
        <CourseStatics />
        <ShortInfo />
        <Container pt={30} maxW="4xl" overflow={"hidden"}>
          <TitleText
            title={
              <Heading
                size="2xl"
                textAlign={"center"}
                letterSpacing={1.0}
                lineHeight={"55px"}
              >
                The Program in a Nutshell <br /> Earn While You Learn
              </Heading>
            }
          />
          <ChakraBox
            pt={10}
            pb={50}
            variants={{
              hidden: {},
              show: {},
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <ChakraBox variants={fadeIn("up", "tween", 0.2, 1)}>
              <Text fontSize={"lg"} textAlign="center" color="#53545b">
                In this brand-new type of curriculum, students will learn how to
                make money and boost exports in the classroom and will begin
                doing so within six months of the program's beginning. It
                resembles a cross between a corporate venture and an educational
                project.
              </Text>
            </ChakraBox>
          </ChakraBox>
        </Container>
        <EventAndFeedback />
      </Flex>
      <Footer />
    </>
  );
};

export default Home;
