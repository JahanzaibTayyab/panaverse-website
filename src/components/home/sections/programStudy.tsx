/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import NextLink from "next/link";
import {
  Container,
  Box,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import MotionBox from "./motionBox";
import { fadeIn, planetVariants } from "@/utils";
import imageBackground from "@/assets/images/education-shape-05.png";
import imageBackground2 from "@/assets/images/education-shape-03.png";
import programStudyImage from "@/assets/images/programStudy.jpeg";

const programStudy = () => (
  <Container
    pt={{ base: 10, md: 90 }}
    position={"relative"}
    pb={50}
    overflow="hidden"
    maxW="container.xl"
  >
    <MotionBox
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
        top="0%"
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
        <MotionBox variants={fadeIn("left", "tween", 0.2, 1)}>
          <Stack>
            <Heading size="xl" textAlign={{ base: "center", md: "left" }}>
              Achieve Your <span style={{ color: "#145CEB" }}> Goals</span>
            </Heading>
            <Text color="#575757" pt={5}>
              This curriculum is intended for beginners who want to learn
              software development from the ground up. The first two quarters
              are shared by all specialties and are dedicated to studying
              Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
              development. It is going to be a fifteen-month-long hybrid program
              that includes both onsite and online classes and is divided into
              five quarters of 13 weeks each. The emphasis will be on hands-on
              learning by educating students to produce projects. To accommodate
              everyone, courses will be held primarily on weekends or after 6:00
              p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching
              format, with core onsite classes complemented by online Zoom
              laboratories and recorded videos.
            </Text>
            <MotionBox pt={5}>
              <Link
                as={NextLink}
                isExternal
                href={"https://portal.piaic.org/signup"}
                _hover={{
                  outline: "none",
                  boxShadow: "lg",
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
                  Apply Now
                </Button>
              </Link>
            </MotionBox>
          </Stack>
        </MotionBox>
        <MotionBox
          variants={planetVariants("right")}
          borderRadius={"40px 4px 40px 4px"}
          objectFit={"cover"}
          overflow="hidden"
        >
          <Image src={programStudyImage} alt="web3" />
        </MotionBox>
      </SimpleGrid>
    </MotionBox>
  </Container>
);

export default programStudy;
