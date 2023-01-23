"use client";
import NextLink from "next/link";
import Image from "next/image";
import {
  Container,
  Flex,
  FlexProps,
  Heading,
  Box,
  Text,
  SimpleGrid,
  Card,
  useBreakpointValue,
  CardBody,
  Link,
} from "@chakra-ui/react";
import heroCircle from "@/assets/images/hero-1-circle-2.png";
import heroDot from "@/assets/images/hero-1-dot-2.png";
import shape3 from "@/assets/images/shape-03.png";
import heroDots from "@/assets/images/hero-1-dot.png";
import MotionBox from "../home/sections/motionBox";
import { fadeIn } from "@/utils";
import ExtraInfo from "./extraInfo";

const CourseInfo = (props: FlexProps) => {
  return (
    <Flex as="main" role="main" direction="column" flex="1" {...props} mt={90}>
      <Container flex="1" maxW={"full"} padding={0}>
        <Box bg={"#EDEEF3"} position="relative" zIndex={-1}>
          <Box
            position={"absolute"}
            left={0}
            top="40%"
            display={{ base: "none", lg: "block" }}
          >
            <Image src={shape3} alt="shape" />
          </Box>
          <Box position={"absolute"} left={0} top="20%" zIndex={-1}>
            <Image src={heroCircle} alt="shape" />
          </Box>
          <Box position={"absolute"} right={0} top="30%">
            <Image src={heroDot} alt="shape" />
          </Box>
          <Box
            position={"absolute"}
            zIndex={1}
            bottom="100px"
            left="10%"
            display={{ base: "none", md: "block" }}
          >
            <Image src={heroDots} alt="dots" />
          </Box>
          <Container maxW={"container.lg"} pb={100}>
            <Flex
              direction={"column"}
              justify="center"
              alignItems={"center"}
              pt={20}
            >
              <Heading
                as={"h3"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "20%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Web 3.0
              </Heading>
              <Text color="#575757" fontSize={"sm"} pt={3} textAlign="center">
                Certified Web 3.0 and Metaverse Developer. A One and Quarter
                Years Panaverse DAO Earn as you Learn Program Getting Ready for
                the Next Generation of the Internet.
              </Text>
              <Text fontSize={"md"} pt={5} lineHeight="30px" textAlign="center">
                This curriculum is intended for beginners who want to learn
                software development from the ground up. The first two quarters
                are shared by all specialties and are dedicated to studying
                Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
                development. It is going to be a fifteen-month-long hybrid
                program that includes both onsite and online classes and is
                divided into five quarters of 13 weeks each. The emphasis will
                be on hands-on learning by educating students to produce
                projects.
              </Text>
            </Flex>
          </Container>
        </Box>
        <MotionBox
          variants={{
            hidden: {},
            show: {},
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <Flex
            justify={"center"}
            pt={70}
            direction="column"
            alignItems={"center"}
          >
            <Heading
              fontSize={"5xl"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "20%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Program Structure
            </Heading>

            <Text textAlign={"center"} mt={10} maxW="container.lg" mb={30}>
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, and Ambient Computing/IoT Technologies{" "}
            </Text>
          </Flex>
        </MotionBox>
        <MotionBox
          variants={{
            hidden: {},
            show: {},
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <Container maxW="7xl">
            <Heading size="lg">
              Core Courses (Common in All Specializations)
            </Heading>
            <Text mb={10} mt={3}>
              Every participant of the program will start by completing the
              following three core courses:
            </Text>
            <MotionBox variants={fadeIn("up", "tween", 0.2, 1)}>
              <SimpleGrid
                templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr " }}
                spacing={8}
                mb={50}
              >
                {cardInfo.map((child, index) => {
                  return (
                    <Link
                      as={NextLink}
                      href={"#"}
                      key={child.quarter}
                      textDecoration="none"
                      transition="0.3s ease-in-out"
                      _hover={{
                        transform: "scale(1.05)",
                        textDecoration: "none",
                      }}
                    >
                      <Card
                        key={child.label + index}
                        boxShadow={"md"}
                        bg={child.backgroundColor}
                        padding={"50px 30px"}
                        justify="center"
                        alignItems={"center"}
                        h="100%"
                      >
                        <CardBody padding={0}>
                          <Heading textAlign={"center"} mb={2} color="white">
                            {child.quarter}
                          </Heading>
                          <Text
                            pt={5}
                            textAlign={"center"}
                            color="whiteAlpha.800"
                            fontWeight={"500"}
                          >
                            {child.label}
                          </Text>
                        </CardBody>
                      </Card>
                    </Link>
                  );
                })}
              </SimpleGrid>
            </MotionBox>
          </Container>
        </MotionBox>
        <MotionBox
          variants={{
            hidden: {},
            show: {},
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <Container maxW="7xl">
            <Heading size="lg">Specialized Tracks</Heading>
            <Text mb={10} mt={3}>
              After completing the first two quarters the participants will
              select one or more specializations consisting of two courses each:
            </Text>
            <MotionBox variants={fadeIn("up", "tween", 0.2, 1)}>
              <Flex alignItems={"center"} direction="column">
                <Heading size="lg">
                  Web 3.0 (Blockchain) and Metaverse Specialization
                </Heading>
                <Text mb={10} mt={3}>
                  This Web 3.0 and Metaverse specialization focuses on
                  developing full-stack Web 3.0 and Metaverse experiences for
                  the next generation of the internet by specializing in
                  building worlds that merge the best of cutting-edge
                  decentralized distributed blockchains with 3D metaverse client
                  experiences.
                </Text>
              </Flex>
              <SimpleGrid
                templateColumns={{
                  sm: "1fr",
                  md: "1fr 1fr",
                }}
                spacing={8}
                mb={50}
              >
                {blockChainCardInfo.map((child, index) => {
                  return (
                    <Link
                      as={NextLink}
                      href={"#"}
                      key={child.quarter}
                      textDecoration="none"
                      transition="0.3s ease-in-out"
                      _hover={{
                        transform: "scale(1.05)",
                        textDecoration: "none",
                      }}
                    >
                      <Card
                        key={child.label + index}
                        boxShadow={"md"}
                        bg={child.backgroundColor}
                        padding={"50px 30px"}
                        justify="center"
                        alignItems={"center"}
                        h="full"
                      >
                        <CardBody padding={0}>
                          <Heading textAlign={"center"} mb={2} color="white">
                            {child.quarter}
                          </Heading>
                          <Text
                            pt={5}
                            textAlign={"center"}
                            color="whiteAlpha.800"
                            fontWeight={"500"}
                          >
                            {child.label}
                          </Text>
                        </CardBody>
                      </Card>
                    </Link>
                  );
                })}
              </SimpleGrid>
            </MotionBox>
            <MotionBox
              variants={{
                hidden: {},
                show: {},
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <MotionBox variants={fadeIn("up", "tween", 0.8, 1)}>
                <Flex alignItems={"center"} direction="column">
                  <Heading size="lg">
                    Artificial Intelligence (AI) and Deep Learning
                    Specialization
                  </Heading>
                  <Text mb={10} mt={3}>
                    The AI and Deep Learning specialization focuses on building
                    and deploying intelligent APIs using OpenAI models and
                    building custom Deep Learning Tensorflow models.
                  </Text>
                </Flex>
                <SimpleGrid
                  templateColumns={{
                    sm: "1fr",
                    md: "1fr 1fr",
                  }}
                  spacing={8}
                  mb={50}
                >
                  {aiCardInfo.map((child, index) => {
                    return (
                      <Link
                        as={NextLink}
                        href={"#"}
                        key={child.quarter}
                        textDecoration="none"
                        transition="0.3s ease-in-out"
                        _hover={{
                          transform: "scale(1.05)",
                          textDecoration: "none",
                        }}
                      >
                        <Card
                          key={child.label + index}
                          boxShadow={"md"}
                          bg={child.backgroundColor}
                          padding={"50px 30px"}
                          justify="center"
                          alignItems={"center"}
                          h="full"
                        >
                          <CardBody padding={0}>
                            <Heading textAlign={"center"} mb={2} color="white">
                              {child.quarter}
                            </Heading>
                            <Text
                              pt={5}
                              textAlign={"center"}
                              color="whiteAlpha.800"
                              fontWeight={"500"}
                            >
                              {child.label}
                            </Text>
                          </CardBody>
                        </Card>
                      </Link>
                    );
                  })}
                </SimpleGrid>
              </MotionBox>
            </MotionBox>
            <MotionBox
              variants={{
                hidden: {},
                show: {},
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <MotionBox variants={fadeIn("up", "tween", 0.2, 1)}>
                <Flex alignItems={"center"} direction="column">
                  <Heading size="lg">
                    Ambient Computing and IoT Specialization
                  </Heading>
                  <Text mb={10} mt={3}>
                    The Ambient Computing and IoT Specialization focuses on
                    building Smart Homes, Offices, Factories, and Cities using
                    Voice computing, Matter, and Embedded Devices.
                  </Text>
                </Flex>
                <SimpleGrid
                  templateColumns={{
                    sm: "1fr",
                    md: "1fr 1fr",
                  }}
                  spacing={8}
                  mb={50}
                >
                  {iotCardInfo.map((child, index) => {
                    return (
                      <Link
                        as={NextLink}
                        href={"#"}
                        key={child.quarter}
                        textDecoration="none"
                        transition="0.3s ease-in-out"
                        _hover={{
                          transform: "scale(1.05)",
                          textDecoration: "none",
                        }}
                      >
                        <Card
                          key={child.label + index}
                          boxShadow={"md"}
                          bg={child.backgroundColor}
                          padding={"50px 30px"}
                          justify="center"
                          alignItems={"center"}
                          h="full"
                        >
                          <CardBody padding={0}>
                            <Heading textAlign={"center"} mb={2} color="white">
                              {child.quarter}
                            </Heading>
                            <Text
                              pt={5}
                              textAlign={"center"}
                              color="whiteAlpha.800"
                              fontWeight={"500"}
                            >
                              {child.label}
                            </Text>
                          </CardBody>
                        </Card>
                      </Link>
                    );
                  })}
                </SimpleGrid>
              </MotionBox>
            </MotionBox>
          </Container>
        </MotionBox>
      </Container>
      <ExtraInfo />
    </Flex>
  );
};
export default CourseInfo;

const cardInfo = [
  {
    quarter: "Quarter I",
    label: "CS-101: Object-Oriented Programming using TypeScript",
    backgroundColor: "#2d69f0",
  },
  {
    quarter: "Quarter II",
    label:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    backgroundColor: "#dd246e",
  },
  {
    quarter: "Quarter III",
    label:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    backgroundColor: "#8007e6",
  },
];

const blockChainCardInfo = [
  {
    quarter: "Quarter IV",
    label: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
    backgroundColor: "#1727AE",
  },
  {
    quarter: "Quarter V",
    label:
      "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
    backgroundColor: "#445BC0",
  },
];
const aiCardInfo = [
  {
    quarter: "Quarter IV",
    label:
      "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
    backgroundColor: "#074F56",
  },
  {
    quarter: "Quarter V",
    label: "AI-361: Deep Learning and MLOps",
    backgroundColor: "#2A3039",
  },
];
const iotCardInfo = [
  {
    quarter: "Quarter IV",
    label: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
    backgroundColor: "#BB5536",
  },
  {
    quarter: "Quarter V",
    label: "AC-361: Embedded Programming using C and Rust",
    backgroundColor: "#A43821",
  },
];
