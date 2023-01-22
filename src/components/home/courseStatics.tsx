"use client";
import Image from "next/image";
import {
  Container,
  chakra,
  Flex,
  Box,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Button,
  Card,
  CardBody,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { fadeIn } from "@/utils";
import studentIcon from "@/assets/images/studentIcon.png";
import classesIcon from "@/assets/images/classes.png";
import teacherIcon from "@/assets/images/teacher.png";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const courseStatics = () => {
  return (
    <ChakraBox
      variants={{
        hidden: {},
        show: {},
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Container pt={120} pb={30} maxW="container.xl">
        <ChakraBox variants={fadeIn("up", "tween", 0.2, 1)}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
            spacing={8}
          >
            {cardInfo.map((child, index) => {
              return (
                <Card
                  key={child.label + index}
                  boxShadow={"none"}
                  bg="#f6f8fb"
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
                    <Heading textAlign={"center"} mb={1}>
                      {child.number}
                    </Heading>
                    <Text
                      textAlign={"center"}
                      color="#575757"
                      fontWeight={"500"}
                    >
                      {child.label}
                    </Text>
                  </CardBody>
                </Card>
              );
            })}
          </SimpleGrid>
        </ChakraBox>
      </Container>
    </ChakraBox>
  );
};
const cardInfo = [
  {
    number: "5,000",
    label: "Students Enrolled",
    url: studentIcon,
  },
  {
    number: "1,000",
    label: "Class Completed",
    url: classesIcon,
  },
  {
    number: "100+",
    label: "Skilled Instructors",
    url: teacherIcon,
  },
  {
    number: "1,000",
    label: "Students Enrolled",
    url: studentIcon,
  },
];
export default courseStatics;
