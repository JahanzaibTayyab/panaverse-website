"use client";
import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Container,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  Flex,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineFieldTime } from "react-icons/ai";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="solid"
            color="#0fa0dd"
            bg={"rgba(15,160,221,.1)"}
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <SimpleGrid spacing={4} templateColumns={{ sm: "1fr 1fr" }} marginTop="2">
      <Flex alignItems={"center"}>
        <Image
          borderRadius="full"
          boxSize="40px"
          src="https://100k-faces.glitch.me/random-image"
          alt={`Avatar of ${props.name}`}
          objectFit="contain"
          overflow={"hidden"}
        />
        <Text fontWeight="medium" ml={5} color="#53545b" fontSize="sm">
          {props.name}
        </Text>
      </Flex>
      <Flex alignItems={"center"} justify="end">
        <Icon as={AiOutlineFieldTime} />
        <Text color="#53545b" fontWeight={500} fontSize="sm" ml={5}>
          {props.date.toLocaleDateString()}
        </Text>
      </Flex>
    </SimpleGrid>
  );
};

const ArticleList = () => {
  return (
    <Container maxW={"7xl"} boxShadow={"md"} py={5}>
      <Wrap marginTop="5">
        <WrapItem width={{ base: "100%" }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={["Engineering", "Product"]} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link
                textDecoration="none"
                _hover={{ textDecoration: "none", color: "blue.500" }}
              >
                Some blog title
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <BlogAuthor
              name="John Doe"
              date={new Date("2021-04-06T19:01:27Z")}
            />
          </Box>
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export default ArticleList;
