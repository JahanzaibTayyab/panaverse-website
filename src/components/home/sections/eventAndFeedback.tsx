/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import NextLink from "next/link";
import { Container, Box, SimpleGrid, Stack, Heading } from "@chakra-ui/react";
import MotionBox from "./motionBox";
import { fadeIn, planetVariants } from "@/utils";

const eventAndFeedback = () => (
  <Box bg={"#EDEEF3"} minH="container.sm" position="relative" overflow="hidden">
    <Container pt={100} pb={90} maxW="container.xl">
      <MotionBox
        variants={{
          hidden: {},
          show: {},
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <SimpleGrid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} spacing={12}>
          <MotionBox variants={planetVariants("left")} overflow="hidden">
            <Heading size="xl">Upcoming Events</Heading>
          </MotionBox>
          <MotionBox variants={fadeIn("left", "tween", 0.2, 1)}>
            <Stack alignItems={"start"}>
              <Heading size="xl">Student's Feedback</Heading>
            </Stack>
          </MotionBox>
        </SimpleGrid>
      </MotionBox>
    </Container>
  </Box>
);

export default eventAndFeedback;
