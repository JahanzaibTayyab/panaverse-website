/* eslint-disable react/no-unescaped-entities */
"use client";
import { Container, Flex, FlexProps, Heading, Text } from "@chakra-ui/react";
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
import { web3Intro } from "@/utils/data";

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
                {web3Intro.programInfo.heading}
                <Heading size="lg" mt={5} color="red.300">
                  {web3Intro.programInfo.subHeading}
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
            <MotionBox>
              <Text fontSize={"lg"} textAlign="center" color="#53545b">
                {web3Intro.programInfo.description}
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
