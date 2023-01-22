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
import web3 from "@/assets/images/web3.png";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const eventAndFeedback = () => (
  <Box bg={"#EDEEF3"} minH="container.sm" position="relative" overflow="hidden">
    <Container pt={100} pb={90} maxW="container.xl">
      <ChakraBox
        variants={{
          hidden: {},
          show: {},
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <SimpleGrid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} spacing={12}>
          <ChakraBox variants={planetVariants("left")} overflow="hidden">
            <Heading size="xl">Upcoming Events</Heading>
          </ChakraBox>
          <ChakraBox variants={fadeIn("left", "tween", 0.2, 1)}>
            <Stack alignItems={"start"}>
              <Heading size="xl">Student's Feedback</Heading>
            </Stack>
          </ChakraBox>
        </SimpleGrid>
      </ChakraBox>
    </Container>
  </Box>
);

export default eventAndFeedback;
