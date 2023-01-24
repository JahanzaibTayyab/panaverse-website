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
import { courseInfo } from "@/utils/data";

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
              {courseInfo.ProgramOfStudies}
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
