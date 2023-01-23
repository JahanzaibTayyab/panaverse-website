/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import {
  Container,
  Flex,
  SimpleGrid,
  Heading,
  Text,
  Card,
  CardBody,
} from "@chakra-ui/react";
import MotionBox from "./motionBox";
import { TitleText } from "../../customText";
import { fadeIn } from "@/utils";
import studentIcon from "@/assets/images/studentIcon.png";
import classesIcon from "@/assets/images/classes.png";
import teacherIcon from "@/assets/images/teacher.png";

const courseStatics = () => {
  return (
    <Container pt={120} pb={30} maxW="container.xl" overflow={"hidden"}>
      <MotionBox
        variants={{
          hidden: {},
          show: {},
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TitleText
          title={
            <Heading size="2xl" textAlign={"center"}>
              We Are <span style={{ color: "#145CEB" }}> Proud </span>
            </Heading>
          }
        />
        <Text textAlign={"center"} py={5} color="#53545b">
          You don't have to struggle alone, you've got our assistance and help.
        </Text>

        <MotionBox variants={fadeIn("up", "tween", 0.2, 1)}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
            spacing={8}
          >
            {cardInfo.map((child, index) => {
              return (
                <Card
                  key={child.label + index}
                  boxShadow={"none"}
                  bg={child.backgroundColor}
                  padding={"50px 30px"}
                  justify="center"
                  alignItems={"center"}
                >
                  <CardBody padding={0}>
                    <Flex justify={"center"} mb={2}>
                      <Image
                        src={child.url}
                        alt={child.label}
                        width={60}
                        height={60}
                      />
                    </Flex>
                    <Heading textAlign={"center"} mb={1} color="white">
                      {child.number}
                    </Heading>
                    <Text
                      textAlign={"center"}
                      color="whiteAlpha.800"
                      fontWeight={"500"}
                    >
                      {child.label}
                    </Text>
                  </CardBody>
                </Card>
              );
            })}
          </SimpleGrid>
        </MotionBox>
      </MotionBox>
    </Container>
  );
};
const cardInfo = [
  {
    number: "5,000",
    label: "Students Enrolled",
    url: studentIcon,
    backgroundColor: "#2d69f0",
  },
  {
    number: "1,000",
    label: "Class Completed",
    url: classesIcon,
    backgroundColor: "#dd246e",
  },
  {
    number: "100+",
    label: "Skilled Instructors",
    url: teacherIcon,
    backgroundColor: "#8007e6",
  },
  {
    number: "1,000",
    label: "Students Enrolled",
    url: studentIcon,
    backgroundColor: "#0cae74",
  },
];
export default courseStatics;
