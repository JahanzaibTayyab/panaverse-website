/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import NextLink from "next/link";
import {
  Container,
  Flex,
  FlexProps,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import Banner from "./sections/banner";
import Footer from "./sections/footer";
import { fadeIn } from "@/utils";
import CourseStatics from "./sections/courseStatics";
import ShortInfo from "./sections/shortDescripation";
import EventAndFeedback from "./sections/eventAndFeedback";
import { TitleText } from "../customText";
import MotionBox from "./sections/motionBox";
import ProgramStudy from "./sections/programStudy";
import ZoomClass from "./sections/zoomClass";

const Home = (props: FlexProps) => {
  return (
    <>
      <Flex
        as="main"
        role="main"
        direction="column"
        flex="1"
        {...props}
        mt={90}
      >
        <Banner />
        <CourseStatics />
        <ShortInfo />
        <Container pt={30} maxW="4xl" overflow={"hidden"}>
          <TitleText
            title={
              <Heading size="2xl" textAlign={"center"} letterSpacing={1.0}>
                The Program in a Nutshell
                <Heading size="lg" mt={5} color="red.300">
                  Earn While You Learn
                </Heading>
              </Heading>
            }
          />
          <MotionBox
            pt={5}
            pb={50}
            variants={{
              hidden: {},
              show: {},
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <MotionBox variants={fadeIn("up", "tween", 0.2, 1)}>
              <Text fontSize={"lg"} textAlign="center" color="#53545b">
                In this brand-new type of curriculum, students will learn how to
                make money and boost exports in the classroom and will begin
                doing so within six months of the program's beginning. It
                resembles a cross between a corporate venture and an educational
                project.
              </Text>
            </MotionBox>
          </MotionBox>
        </Container>
        <ProgramStudy />
        <ZoomClass />
        <EventAndFeedback />
      </Flex>
      <Footer />
    </>
  );
};

export default Home;
