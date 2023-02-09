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
  VStack,
  Flex,
  Text,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import MotionBox from "./motionBox";
import { fadeIn, planetVariants } from "@/utils";
import { AiOutlineFieldTime, AiOutlineArrowRight } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import Feedback from "./feedback";

const eventAndFeedback = () => (
  <Box bg={"#EDEEF3"} position="relative" overflow="hidden">
    <Container pt={20} pb={90} maxW="container.xl">
      <MotionBox>
        <SimpleGrid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} spacing={12}>
          <Stack>
            <MotionBox overflow="hidden" mb={45}>
              <Heading size="xl">Upcoming Events</Heading>
            </MotionBox>
            <VStack spacing={4} align="stretch">
              {eventArray.map((event, index) => (
                <MotionBox key={event.eventName + index}>
                  <SimpleGrid spacing={2} templateColumns={{ sm: "1fr 4fr" }}>
                    <Box width={100}>
                      <Flex
                        bg="blue.500"
                        justify="center"
                        alignItems={"center"}
                      >
                        <Heading
                          fontWeight={700}
                          lineHeight={"60px"}
                          color="white"
                        >
                          {event.date}
                        </Heading>
                      </Flex>
                      <Flex bg="white" justify="center" alignItems={"center"}>
                        <Text lineHeight={"40px"}>{event.monthAndYear}</Text>
                      </Flex>
                    </Box>
                    <SimpleGrid
                      bg="white"
                      templateColumns={{ sm: "4fr 1fr" }}
                      padding={"15px 20px"}
                      spacing={6}
                    >
                      <Flex flex={1} direction="column">
                        <Heading size="sm" lineHeight={1}>
                          {event.eventName}
                        </Heading>
                        <Flex mt={5} alignItems="center">
                          <Icon
                            as={AiOutlineFieldTime}
                            w={4}
                            h={4}
                            color="#575757"
                          />

                          <Text color="#575757" ml={1} fontSize={"small"}>
                            {event.time}
                          </Text>
                          <Icon
                            as={CiLocationOn}
                            w={4}
                            h={4}
                            color="#575757"
                            ml={10}
                          />
                          <Text color="#575757" ml={1} fontSize={"small"}>
                            {event.location}
                          </Text>
                        </Flex>
                      </Flex>
                      <Flex alignItems={"center"} justify="end">
                        <IconButton
                          variant="outline"
                          colorScheme={"blue"}
                          aria-label="Arrow click"
                          icon={<AiOutlineArrowRight />}
                        />
                      </Flex>
                    </SimpleGrid>
                  </SimpleGrid>
                </MotionBox>
              ))}
            </VStack>
          </Stack>
          <Stack alignItems={"start"}>
            <MotionBox>
              <Heading size="xl" mb={45}>
                Student's Feedback
              </Heading>
            </MotionBox>
            <Feedback />
          </Stack>
        </SimpleGrid>
      </MotionBox>
    </Container>
  </Box>
);

const eventArray = [
  {
    date: 29,
    monthAndYear: "Jan 23",
    eventName: "Web 3 Seminar",
    time: "9:30 AM",
    location: "Lahore",
  },
  {
    date: 9,
    monthAndYear: "Mar 23",
    eventName: "Web 3 Seminar",
    time: "11:30 AM",
    location: "Karachi",
  },
  {
    date: 16,
    monthAndYear: "Jun 23",
    eventName: "Web 3 Seminar",
    time: "2:30 PM",
    location: "Lahore",
  },
];

export default eventAndFeedback;
