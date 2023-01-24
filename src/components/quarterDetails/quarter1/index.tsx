"use client";
import {
  Container,
  Flex,
  FlexProps,
  Box,
  Text,
  Heading,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  SimpleGrid,
  Icon,
  Link,
  List,
  ListItem,
  ListIcon,
  OrderedList,
} from "@chakra-ui/react";
import MotionBox from "@/components/home/sections/motionBox";
import { fadeIn } from "@/utils";
import { FiVideo } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import { AiFillInfoCircle, AiOutlineCheckCircle } from "react-icons/ai";

const QuarterOneInfo = (props: FlexProps) => {
  return (
    <Flex
      as="main"
      role="main"
      direction="column"
      flex="1"
      mt={130}
      pb={100}
      {...props}
    >
      <Container maxW="container.md">
        <MotionBox
          variants={{
            hidden: {},
            show: {},
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <MotionBox variants={fadeIn("up", "tween", 0.2, 1)}>
            <Flex justify="center" alignItems={"center"} direction="column">
              <Heading position={"relative"} textAlign="center">
                Detailed Course Syllabus
              </Heading>
              <Heading size="lg" mt={5} color="blue.500">
                Quarter I (Core)
              </Heading>
              <Heading size="md" mt={5} textAlign="center">
                CS-101: Object-Oriented Programming using TypeScript
              </Heading>
              <Text mt={5}>Duration: 13 Weeks</Text>
            </Flex>
          </MotionBox>
        </MotionBox>
      </Container>
      <Container maxW="container.md">
        <MotionBox
          variants={{
            hidden: {},
            show: {},
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <MotionBox variants={fadeIn("up", "tween", 0.2, 1)}>
            <Heading size="md" mt={5}>
              Course Description
            </Heading>
            <Text mt={5}>
              We will start the program by learning the fundamentals of
              Object-Oriented programming using JavaScript and TypeScript. We
              will also understand the latest Web trends i.e. Web 3.0 and
              Metaverse concepts and try to understand their working from the
              perspective of the users
            </Text>
          </MotionBox>
        </MotionBox>
      </Container>
      <Container mt={10} maxW="container.md">
        <MotionBox
          variants={{
            hidden: {},
            show: {},
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <MotionBox variants={fadeIn("up", "tween", 0.2, 1)}>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem mb={"30px"}>
                <AccordionButton
                  _expanded={{ bg: "blue.500", color: "white" }}
                  bg="#f3f4f8"
                  padding={"15px"}
                >
                  <Heading size="sm" textAlign="left" flex={1}>
                    HTML and CSS (Homework)
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel borderWidth={1} padding={0}>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={FiVideo} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Video:
                      </Heading>
                      <Link
                        isExternal
                        href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6 "
                      >
                        <Text size="sm" lineHeight={1.2} ml={8}>
                          Learn HTML by Hira Khan (Watch Recorded Videos)
                        </Text>
                      </Link>
                    </Flex>
                  </SimpleGrid>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={FiVideo} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Video:
                      </Heading>
                      <Link
                        isExternal
                        href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
                      >
                        <Text size="sm" lineHeight={1.2} ml={8}>
                          Learn CSS Intro by Hira Khan (Watch Recorded Videos)
                        </Text>
                      </Link>
                    </Flex>
                  </SimpleGrid>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem mb={"30px"}>
                <AccordionButton
                  _expanded={{ bg: "blue.500", color: "white" }}
                  bg="#f3f4f8"
                  padding={"15px"}
                >
                  <Heading size="sm" textAlign="left" flex={1}>
                    Web 3.0 and Metaverse Theory
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel borderWidth={1} padding={0}>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={BsBook} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Reading:
                      </Heading>
                      <Link
                        isExternal
                        href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
                      >
                        <Text size="sm" lineHeight={1.2} ml={8}>
                          Introduction to Panaverse DAO
                        </Text>
                      </Link>
                    </Flex>
                  </SimpleGrid>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={BsBook} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Reading:
                      </Heading>
                      <Link
                        isExternal
                        href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"
                      >
                        <Text size="sm" lineHeight={1.2} ml={8}>
                          Web 3.0 User Guide
                        </Text>
                      </Link>
                    </Flex>
                  </SimpleGrid>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={BsBook} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Reading:
                      </Heading>
                      <Link
                        isExternal
                        href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing "
                      >
                        <Text size="sm" lineHeight={1.2} ml={8}>
                          Complete Web 3 Assignments included in the Web 3 User
                          Guide
                        </Text>
                      </Link>
                    </Flex>
                  </SimpleGrid>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem mb={"30px"}>
                <AccordionButton
                  _expanded={{ bg: "blue.500", color: "white" }}
                  bg="#f3f4f8"
                  padding={"15px"}
                >
                  <Heading size="sm" textAlign="left" flex={1}>
                    Fundamentals of JavaScript
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel borderWidth={1} padding={0}>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={FiVideo} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Video:
                      </Heading>
                      <Link
                        isExternal
                        href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
                      >
                        <Text size="sm" lineHeight={1.2} ml={8}>
                          Learn JavaScript by Zeeshan Hanif (Watch Recorded
                          Videos)
                        </Text>
                      </Link>
                    </Flex>
                  </SimpleGrid>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={BsBook} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Reading:
                      </Heading>
                      <Link
                        isExternal
                        href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4 "
                      >
                        <Text size="sm" lineHeight={1.2} ml={8}>
                          Chapters 2-6, 13 of JavaScript from Beginner to
                          Professional: Learn JavaScript quickly by building
                          fun, interactive, and dynamic web apps, games, and
                          pages
                        </Text>
                      </Link>
                    </Flex>
                  </SimpleGrid>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={BsBook} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Reading:
                      </Heading>
                      <Link
                        isExternal
                        href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"
                      >
                        <Text size="sm" lineHeight={1.2} ml={8}>
                          JavaScript Book Code
                        </Text>
                      </Link>
                    </Flex>
                  </SimpleGrid>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={BsBook} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Reading:
                      </Heading>
                      <Link
                        isExternal
                        href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md "
                      >
                        <Text size="sm" lineHeight={1.2} ml={8}>
                          Getting Started Exercises with JavaScript and Node.js
                        </Text>
                      </Link>
                    </Flex>
                  </SimpleGrid>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={AiFillInfoCircle} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Info:
                      </Heading>
                      <Heading size="xs" lineHeight={1.2} ml={8}>
                        Fundamentals of JavaScript and Node.js Quiz
                      </Heading>
                    </Flex>
                  </SimpleGrid>
                  <List spacing={3} ml={{ base: 5, md: 20 }}>
                    <ListItem fontSize={"sm"} color="gray.700">
                      <ListIcon as={AiOutlineCheckCircle} color="green.500" />
                      Background of JavaScript and How to use JavaScript in
                      Browser
                    </ListItem>
                    <ListItem fontSize={"sm"} color="gray.700">
                      <ListIcon as={AiOutlineCheckCircle} color="green.500" />
                      Variables, Primitive data types Analyzing and modifying
                      data types, and Operators (Chapter 2 of JavaScript from
                      Beginner to Professional)
                    </ListItem>
                    <ListItem fontSize={"sm"} color="gray.700">
                      <ListIcon as={AiOutlineCheckCircle} color="green.500" />
                      Intro to Node.js, .mjs files, Modules, NPM, import,
                      export, and using external modules with npm:
                      <Link
                        color="blue.500"
                        isExternal
                        ml={3}
                        href=" https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
                      >
                        NPM
                      </Link>
                    </ListItem>
                    <ListItem fontSize={"sm"} color="gray.700">
                      <ListIcon as={AiOutlineCheckCircle} color="green.500" />
                      How to accept user input in your Node.js JavaScript
                      programs, this will allow us to create interactive Node.js
                      console programs using prompt-sync library. The last
                      example in this presentation shows you how to use
                      prompt-sync library in your Node.js programs:
                      <Link
                        color="blue.500"
                        isExternal
                        ml={3}
                        href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing  
"
                      >
                        Notes
                      </Link>
                      <br />
                      Note: After this point, we will do all our class work and
                      exercises using Node.js in .mjs files. We will also be
                      able to develop interactive Node.js console programs which
                      will greatly help the students to learn.
                    </ListItem>
                    <ListItem fontSize={"sm"} color="gray.700">
                      <ListIcon as={AiOutlineCheckCircle} color="green.500" />
                      Using Arrays and Objects in Node.js Programs (chapter 3 of
                      JavaScript from Beginner to Professional)
                    </ListItem>
                    <ListItem fontSize={"sm"} color="gray.700">
                      <ListIcon as={AiOutlineCheckCircle} color="green.500" />
                      Using if and if else statements, else if statements,
                      Conditional ternary operators, and switch statements in
                      Node.js programs (chapter 4 of JavaScript from Beginner to
                      Professional)
                    </ListItem>
                    <ListItem fontSize={"sm"} color="gray.700">
                      <ListIcon as={AiOutlineCheckCircle} color="green.500" />
                      Using while loop, do while loop, for loop, for in, and for
                      of loop in Node.js (chapter 5 of JavaScript from Beginner
                      to Professional)
                    </ListItem>
                    <ListItem fontSize={"sm"} color="gray.700">
                      <ListIcon as={AiOutlineCheckCircle} color="green.500" />
                      Using Basic functions, Function arguments, Return,
                      Variable scope in functions, Recursive functions, Nested
                      functions, Anonymous functions, and Function callbacks in
                      Node.js (chapter 6 of JavaScript from Beginner to
                      Professional)
                    </ListItem>
                    <ListItem fontSize={"sm"} color="gray.700">
                      <ListIcon as={AiOutlineCheckCircle} color="green.500" />
                      Using Concurrency, Callbacks, Promises, async / await, and
                      Event loop (chapter 13 of JavaScript from Beginner to
                      Professional)
                    </ListItem>
                    <ListItem fontSize={"sm"} color="gray.700">
                      <ListIcon as={AiOutlineCheckCircle} color="green.500" />
                      <Link
                        isExternal
                        color="blue.500"
                        href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript"
                      >
                        JavaScript promises, mastering the asynchronous
                      </Link>
                    </ListItem>
                    <ListItem fontSize={"sm"} color="gray.700">
                      <ListIcon as={AiOutlineCheckCircle} color="green.500" />
                      <Link
                        isExternal
                        color="blue.500"
                        href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg "
                      >
                        New JavaScript Features in ECMAScript 2022 and 2021
                      </Link>
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem mb={"30px"}>
                <AccordionButton
                  _expanded={{ bg: "blue.500", color: "white" }}
                  bg="#f3f4f8"
                  padding={"15px"}
                >
                  <Heading size="sm" textAlign="left" flex={1}>
                    Object-Oriented Programming with TypeScript
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel borderWidth={1} padding={0}>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={BsBook} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Reading:
                      </Heading>
                      <Link
                        isExternal
                        href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6 "
                      >
                        <Text size="sm" lineHeight={1.2} ml={8}>
                          Chapters 1-11 of Learning TypeScript: Enhance Your Web
                          Development Skills Using Type-Safe JavaScript
                        </Text>
                      </Link>
                    </Flex>
                  </SimpleGrid>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={BsBook} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Reading:
                      </Heading>
                      <Link
                        isExternal
                        href="https://www.learningtypescript.com/ "
                      >
                        <Text size="sm" lineHeight={1.2} ml={8}>
                          In Class Companion projects and articles for Learning
                          TypeScript
                        </Text>
                      </Link>
                    </Flex>
                  </SimpleGrid>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={AiFillInfoCircle} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Info:
                      </Heading>
                      <Link
                        isExternal
                        href="https://github.com/panaverse/typescript-node-projects"
                      >
                        <Text size="sm" lineHeight={1.2} ml={8}>
                          Homework Project
                        </Text>
                      </Link>
                    </Flex>
                  </SimpleGrid>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={AiFillInfoCircle} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Info:
                      </Heading>
                      <Heading size="sm" lineHeight={1.2} ml={8}>
                        Fundamentals of TypeScript Quiz
                      </Heading>
                    </Flex>
                  </SimpleGrid>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={AiFillInfoCircle} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Info:
                      </Heading>
                      <Heading size="sm" lineHeight={1.2} ml={8}>
                        TypeScript Professional Proficiency Quiz
                      </Heading>
                    </Flex>
                  </SimpleGrid>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem mb={"30px"}>
                <AccordionButton
                  _expanded={{ bg: "blue.500", color: "white" }}
                  bg="#f3f4f8"
                  padding={"15px"}
                >
                  <Heading size="sm" textAlign="left" flex={1}>
                    TypeScript for React
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel borderWidth={1} padding={0}>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={AiFillInfoCircle} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Info:
                      </Heading>
                      <Text fontSize={"sm"} ml={8}>
                        Minimal TypeScript Crash Course For React
                      </Text>
                    </Flex>
                  </SimpleGrid>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </MotionBox>
        </MotionBox>
      </Container>
      <Container maxW="container.md">
        <MotionBox
          variants={{
            hidden: {},
            show: {},
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <MotionBox variants={fadeIn("up", "tween", 0.2, 1)}>
            <Heading size="md" mt={5}>
              Quarter Break Assignments and Quizzes
            </Heading>
            <Text mt={5} mb={5}>
              During the Quarter Break, we do the following Assignments:
            </Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={AiOutlineCheckCircle} color="green.500" />
                <Link
                  href="https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge"
                  color={"blue.500"}
                >
                  Cloud to Edge
                </Link>
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheckCircle} color="green.500" />
                <Link
                  href="https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app"
                  color={"blue.500"}
                >
                  Todo App
                </Link>
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheckCircle} color="green.500" />
                <Link
                  href=" https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui "
                  color={"blue.500"}
                >
                  Pricing Ui
                </Link>
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheckCircle} color="green.500" />
                Build a Panaverse DAO Syllabus Website using Next.js 13 given
                the content from the following document:
                <Link
                  href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing"
                  color={"blue.500"}
                  ml={2}
                >
                  Document
                </Link>
                <br />
                The best-developed Website will be hosted on
                <Link color="blue.500" href="www.panaverse.co" ml={2}>
                  www.panaverse.co{"  "}
                </Link>
                domain.
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheckCircle} color="green.500" />
                Build a new PIAIC Website using Next.js 13 given the content
                from the current PIAIC Website and from the following document:
                <Link
                  href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing"
                  color={"blue.500"}
                  ml={2}
                >
                  Document
                </Link>
                <br />
                The best-developed Website will be hosted on
                <Link color="blue.500" href=" www.piaic.org" ml={2}>
                  www.piaic.org{"  "}
                </Link>
                domain.
              </ListItem>
            </List>
            <Text py={10}>
              After completing the above Five Assignments everyone will appear
              in the following two Quizzes covering Github and TypeScript:
            </Text>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem mb={"30px"}>
                <AccordionButton
                  _expanded={{ bg: "blue.500", color: "white" }}
                  bg="#f3f4f8"
                  padding={"15px"}
                >
                  <Heading size="sm" textAlign="left" flex={1}>
                    Fundamentals of Version Control with Git Quiz
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel borderWidth={1} padding={0}>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={FiVideo} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Video:
                      </Heading>
                      <Link
                        isExternal
                        href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF"
                      >
                        <Text size="sm" lineHeight={1.2} ml={8}>
                          Version Control using Git and GitHub By Sir Zeeshan
                          Hanif (Watch Recorded Videos)
                        </Text>
                      </Link>
                    </Flex>
                  </SimpleGrid>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={BsBook} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Reading:
                      </Heading>

                      <Text size="sm" lineHeight={1.2} ml={8}>
                        Chapters 1, 2, 3, and 4 Learn Version Control with Git:
                        A step-by-step course for the complete beginner by
                        Tobias Günther
                      </Text>
                    </Flex>
                  </SimpleGrid>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem mb={"30px"}>
                <AccordionButton
                  _expanded={{ bg: "blue.500", color: "white" }}
                  bg="#f3f4f8"
                  padding={"15px"}
                >
                  <Heading size="sm" textAlign="left" flex={1}>
                    TypeScript Proficiency Quiz
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel borderWidth={1} padding={0}>
                  <SimpleGrid
                    templateColumns={{ sm: "1fr" }}
                    spacing={8}
                    padding={"14px 30px"}
                    borderBottom="1px solid #edeef2"
                  >
                    <Flex justifyItems={"center"}>
                      <Icon as={BsBook} color="#6d6e75" />
                      <Heading size="xs" ml={3} color="#0e1133">
                        Reading:
                      </Heading>
                      <Link
                        isExternal
                        href="https://github.com/panaverse/learn-typescript"
                      >
                        <Text size="sm" lineHeight={1.2} ml={8}>
                          Study Material:
                        </Text>
                      </Link>
                    </Flex>
                  </SimpleGrid>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </MotionBox>
        </MotionBox>
      </Container>
    </Flex>
  );
};

export default QuarterOneInfo;
