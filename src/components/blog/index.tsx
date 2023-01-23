"use client";

import {
  Container,
  Flex,
  FlexProps,
  Box,
  SimpleGrid,
  VStack,
  Text,
  Heading,
} from "@chakra-ui/react";
import ArticleList from "./chakraBlog";
import MotionBox from "../home/sections/motionBox";

const Blogs = (props: FlexProps) => {
  return (
    <Flex
      as="main"
      role="main"
      direction="column"
      flex="1"
      {...props}
      mt={150}
      pb={100}
    >
      <Container flex="1" maxW={"full"}>
        <MotionBox>
          <Container maxWidth={"container.lg"}>
            <SimpleGrid
              spacing={4}
              templateColumns={{ sm: "1fr", md: "1fr 1fr" }}
            >
              <ArticleList />
              <ArticleList />
              <ArticleList />
            </SimpleGrid>
          </Container>
        </MotionBox>
        <MotionBox>
          <Container maxWidth={"container.lg"}>
            <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
              <Heading as="h2">What we write about</Heading>
              <Text as="p" fontSize="lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
                pretium condimentum dignissim. Vestibulum ultrices vitae nisi
                sed imperdiet. Mauris quis erat consequat, commodo massa quis,
                feugiat sapien. Suspendisse placerat vulputate posuere.
                Curabitur neque tortor, mattis nec lacus non, placerat congue
                elit.
              </Text>
              <Text as="p" fontSize="lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
                pretium condimentum dignissim. Vestibulum ultrices vitae nisi
                sed imperdiet. Mauris quis erat consequat, commodo massa quis,
                feugiat sapien. Suspendisse placerat vulputate posuere.
                Curabitur neque tortor, mattis nec lacus non, placerat congue
                elit.
              </Text>
              <Text as="p" fontSize="lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
                pretium condimentum dignissim. Vestibulum ultrices vitae nisi
                sed imperdiet. Mauris quis erat consequat, commodo massa quis,
                feugiat sapien. Suspendisse placerat vulputate posuere.
                Curabitur neque tortor, mattis nec lacus non, placerat congue
                elit.
              </Text>
            </VStack>
          </Container>
        </MotionBox>
      </Container>
    </Flex>
  );
};
export default Blogs;
