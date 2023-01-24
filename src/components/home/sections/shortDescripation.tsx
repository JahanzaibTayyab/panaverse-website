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
  Flex,
} from "@chakra-ui/react";
import MotionBox from "./motionBox";
import { fadeIn, planetVariants } from "@/utils";
import imageBackground from "@/assets/images/education-shape-05.png";
import imageBackground2 from "@/assets/images/education-shape-03.png";
import web from "@/assets/images/get-started.png";
import { web3Intro } from "@/utils/data";

const shortInfo = () => (
  <Container
    pt={90}
    position={"relative"}
    pb={10}
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
        top="12%"
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
        <MotionBox
          variants={planetVariants("left")}
          overflow="hidden"
          position={"relative"}
          mt={-10}
        >
          <Flex objectFit="cover" justify={"center"} alignItems="center">
            <Image src={web} alt="web3" width={500} />
          </Flex>
        </MotionBox>
        <MotionBox variants={fadeIn("left", "tween", 0.2, 1)}>
          <Stack alignItems={"start"}>
            <Heading size="xl">
              What is Web <span style={{ color: "#145CEB" }}> 3.0 </span>
            </Heading>
            <Text color="#575757" lineHeight={"26px"} pt={5}>
              {web3Intro.whatIsWeb3.description}
            </Text>
            <MotionBox
              pt={5}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
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
            </MotionBox>
          </Stack>
        </MotionBox>
      </SimpleGrid>
    </MotionBox>
  </Container>
);

export default shortInfo;
