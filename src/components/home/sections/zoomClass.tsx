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
  Flex,
  Button,
  Link,
} from "@chakra-ui/react";
import MotionBox from "./motionBox";
import { fadeIn } from "@/utils";
import imageBackground from "@/assets/images/education-shape-05.png";
import zoom from "@/assets/images/Zoom.png";
import zoom1 from "@/assets/images/zoom-shape-2.png";

const zoomClass = () => (
  <Container
    pt={{ base: 20, md: 90 }}
    position={"relative"}
    pb={50}
    overflow="hidden"
    maxW="container.lg"
  >
    <MotionBox>
      <Box position={"absolute"} left={0} top="0%" zIndex={-1}>
        <Image src={imageBackground} alt="shape" />
      </Box>
      <SimpleGrid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} spacing={12}>
        <Flex
          objectFit={"cover"}
          overflow="hidden"
          alignItems={"center"}
          justify="center"
          position={"relative"}
        >
          <Box position={"absolute"} left={0} top="0%" zIndex={2}>
            <Image src={zoom1} alt="shape" />
          </Box>
          <Image src={zoom} alt="web3" />
        </Flex>
        <MotionBox>
          <Stack alignItems={"start"}>
            <Heading size="xl">
              Live Class From <br /> Anywhere Via{" "}
              <span style={{ color: "#145CEB" }}>Zoom</span>
            </Heading>
            <Text color="#575757" lineHeight={"26px"} pt={10}>
              Helping employees gain skills and providing career development
              often take a back seat to business priorities but workplace. It
              employs a hybrid teaching format, with core onsite classes
              complemented by online Zoom laboratories and recorded videos.
            </Text>
          </Stack>
          <Box pt={10}>
            <Link
              as={NextLink}
              isExternal
              href={"https://zoom.us/"}
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
                Learn more
              </Button>
            </Link>
          </Box>
        </MotionBox>
      </SimpleGrid>
    </MotionBox>
  </Container>
);

export default zoomClass;
