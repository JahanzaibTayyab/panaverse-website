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
import AutoPlay from "./slider";
import { courseInfo } from "@/utils/data";

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
                {courseInfo.ProgramOfStudies}
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
                {courseInfo.CoreCourses.quarters.map((quarter) => {
                  return (
                    <Link
                      as={NextLink}
                      href={"/web3/quarter1"}
                      key={quarter.title}
                      textDecoration="none"
                      transition="0.3s ease-in-out"
                      _hover={{
                        transform: "scale(1.05)",
                        textDecoration: "none",
                      }}
                    >
                      <Card
                        boxShadow={"md"}
                        bg={quarter.backgroundColor}
                        padding={"50px 30px"}
                        justify="center"
                        alignItems={"center"}
                        h="100%"
                      >
                        <CardBody padding={0}>
                          <Heading textAlign={"center"} mb={2} color="white">
                            {quarter.title}
                          </Heading>
                          <Text
                            pt={5}
                            textAlign={"center"}
                            color="whiteAlpha.900"
                            fontWeight={"500"}
                          >
                            {quarter.course}
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
              {courseInfo.SpecializedTracks.info}
            </Text>
            <MotionBox variants={fadeIn("up", "tween", 0.2, 1)}>
              <Flex alignItems={"center"} direction="column">
                <Heading size="lg">
                  {courseInfo.SpecializedTracks.blockChainTrack.title}
                </Heading>
                <Text mb={10} mt={3}>
                  {courseInfo.SpecializedTracks.blockChainTrack.description}
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
                {courseInfo.SpecializedTracks.blockChainTrack.quarters.map(
                  (child) => {
                    return (
                      <Link
                        as={NextLink}
                        href={"#"}
                        key={child.title}
                        textDecoration="none"
                        transition="0.3s ease-in-out"
                        _hover={{
                          transform: "scale(1.05)",
                          textDecoration: "none",
                        }}
                      >
                        <Card
                          boxShadow={"md"}
                          bg={child.backgroundColor}
                          padding={"50px 30px"}
                          justify="center"
                          alignItems={"center"}
                          h="full"
                        >
                          <CardBody padding={0}>
                            <Heading textAlign={"center"} mb={2} color="white">
                              {child.title}
                            </Heading>
                            <Text
                              pt={5}
                              textAlign={"center"}
                              color="whiteAlpha.900"
                              fontWeight={"500"}
                            >
                              {child.course}
                            </Text>
                          </CardBody>
                        </Card>
                      </Link>
                    );
                  }
                )}
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
                    {courseInfo.SpecializedTracks.AITrack.title}
                  </Heading>
                  <Text mb={10} mt={3}>
                    {courseInfo.SpecializedTracks.AITrack.description}
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
                  {courseInfo.SpecializedTracks.AITrack.quarters.map(
                    (child) => {
                      return (
                        <Link
                          as={NextLink}
                          href={"#"}
                          key={child.title}
                          textDecoration="none"
                          transition="0.3s ease-in-out"
                          _hover={{
                            transform: "scale(1.05)",
                            textDecoration: "none",
                          }}
                        >
                          <Card
                            boxShadow={"md"}
                            bg={child.backgroundColor}
                            padding={"50px 30px"}
                            justify="center"
                            alignItems={"center"}
                            h="full"
                          >
                            <CardBody padding={0}>
                              <Heading
                                textAlign={"center"}
                                mb={2}
                                color="white"
                              >
                                {child.title}
                              </Heading>
                              <Text
                                pt={5}
                                textAlign={"center"}
                                color="whiteAlpha.800"
                                fontWeight={"500"}
                              >
                                {child.course}
                              </Text>
                            </CardBody>
                          </Card>
                        </Link>
                      );
                    }
                  )}
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
                    {courseInfo.SpecializedTracks.cloudTrack.title}
                  </Heading>
                  <Text mb={10} mt={3}>
                    {courseInfo.SpecializedTracks.cloudTrack.description}
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
                  {courseInfo.SpecializedTracks.cloudTrack.quarters.map(
                    (child) => {
                      return (
                        <Link
                          as={NextLink}
                          href={"#"}
                          key={child.title}
                          textDecoration="none"
                          transition="0.3s ease-in-out"
                          _hover={{
                            transform: "scale(1.05)",
                            textDecoration: "none",
                          }}
                        >
                          <Card
                            boxShadow={"md"}
                            bg={child.backgroundColor}
                            padding={"50px 30px"}
                            justify="center"
                            alignItems={"center"}
                            h="full"
                          >
                            <CardBody padding={0}>
                              <Heading
                                textAlign={"center"}
                                mb={2}
                                color="white"
                              >
                                {child.title}
                              </Heading>
                              <Text
                                pt={5}
                                textAlign={"center"}
                                color="whiteAlpha.900"
                                fontWeight={"500"}
                              >
                                {child.course}
                              </Text>
                            </CardBody>
                          </Card>
                        </Link>
                      );
                    }
                  )}
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
                    {courseInfo.SpecializedTracks.IOTTrack.title}
                  </Heading>
                  <Text mb={10} mt={3}>
                    {courseInfo.SpecializedTracks.IOTTrack.description}
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
                  {courseInfo.SpecializedTracks.IOTTrack.quarters.map(
                    (child) => {
                      return (
                        <Link
                          as={NextLink}
                          href={"#"}
                          key={child.title}
                          textDecoration="none"
                          transition="0.3s ease-in-out"
                          _hover={{
                            transform: "scale(1.05)",
                            textDecoration: "none",
                          }}
                        >
                          <Card
                            boxShadow={"md"}
                            bg={child.backgroundColor}
                            padding={"50px 30px"}
                            justify="center"
                            alignItems={"center"}
                            h="full"
                          >
                            <CardBody padding={0}>
                              <Heading
                                textAlign={"center"}
                                mb={2}
                                color="white"
                              >
                                {child.title}
                              </Heading>
                              <Text
                                pt={5}
                                textAlign={"center"}
                                color="whiteAlpha.900"
                                fontWeight={"500"}
                              >
                                {child.course}
                              </Text>
                            </CardBody>
                          </Card>
                        </Link>
                      );
                    }
                  )}
                </SimpleGrid>
              </MotionBox>
            </MotionBox>
          </Container>
        </MotionBox>
      </Container>
      <ExtraInfo />
      <Container
        maxW={"full"}
        pb={50}
        display={{ sm: "none", md: "block" }}
        padding={0}
      >
        <AutoPlay />
      </Container>
    </Flex>
  );
};
export default CourseInfo;
