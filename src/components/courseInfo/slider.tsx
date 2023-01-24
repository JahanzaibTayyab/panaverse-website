"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { Box, SimpleGrid, Text, Heading, Flex } from "@chakra-ui/react";
import npm from "@/assets/images/npm.svg";
import mui from "@/assets/images/mui.svg";
import AlanAI from "@/assets/images/AlanAI.svg";
import redux from "@/assets/images/redux.webp";
import react from "@/assets/images/reactjs.webp";
import javascript from "@/assets/images/javascript.webp";
import nodejs from "@/assets/images/node.png";
import reactApp from "@/assets/images/reactApp.svg";
import git from "@/assets/images/git.webp";
import css from "@/assets/images/CSS.webp";
import nextjs from "@/assets/images/next.svg";
import download from "@/assets/images/download.svg";
import chakara from "@/assets/images/chakara.png";

const AutoPlay = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrow: false,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const settings2 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {slider1.map((slide) => (
          <Box
            key={slide.description}
            bg="#161B22"
            px={4}
            py={2}
            borderRadius={"md"}
          >
            <SimpleGrid
              templateColumns={{
                sm: "1fr 4fr",
              }}
              spacing={4}
              alignItems="center"
            >
              <Flex
                bg="transparent"
                justify={"center"}
                alignItems="center"
                backgroundImage={download}
              >
                <Image src={slide.src} width={64} height={64} alt="npm" />
              </Flex>
              <Box>
                <Heading color="white" size="md">
                  {slide.title}
                </Heading>
                <Text color="rgb(150 155 165)">{slide.description}</Text>
              </Box>
            </SimpleGrid>
          </Box>
        ))}
      </Slider>
      <div style={{ marginTop: "-60px" }}>
        <Slider {...settings2}>
          {slider2.map((slide) => (
            <Box
              key={slide.description}
              bg="#161B22"
              px={4}
              py={2}
              borderRadius={"md"}
            >
              <SimpleGrid
                templateColumns={{
                  sm: "1fr 3fr",
                }}
                spacing={4}
                alignItems="center"
              >
                <Flex
                  justify={"center"}
                  alignItems="center"
                  backgroundImage={download}
                >
                  <Image src={slide.src} width={64} height={64} alt="npm" />
                </Flex>
                <Box>
                  <Heading color="white" size="md">
                    {slide.title}
                  </Heading>
                  <Text color="rgb(150 155 165)">{slide.description}</Text>
                </Box>
              </SimpleGrid>
            </Box>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default AutoPlay;

const slider1 = [
  {
    src: npm,
    title: "NPM",
    description: "It’s package manager for the JavaScript language.",
  },
  {
    src: mui,
    title: "Material UI",
    description: "It provides developers with material-based UI components",
  },
  {
    src: redux,
    title: "Redux",
    description: "Redux is a Predictable State Container for JavaScript Apps",
  },
  {
    src: react,
    title: "React",
    description:
      "A JavaScript library that is used for building user interfaces",
  },
  {
    src: javascript,
    title: "JavaScript",
    description: "JavaScript is a programming language that drives the web.",
  },
  {
    src: AlanAI,
    title: "Alan AI",
    description:
      "It lets you embed a contextual voice assistant into your app UI.",
  },
  {
    src: nodejs,
    title: "Node.js",
    description:
      " Node.js is a cross-platform, open-source server environment .",
  },
];

const slider2 = [
  {
    src: git,
    title: "Git & Github",
    description: "Free & Open source distributed version control system",
  },
  {
    src: css,
    title: "CSS",
    description: "Cascading Style Sheets is a style sheet language",
  },
  {
    src: reactApp,
    title: "Create React App",
    description:
      "It’s a comfortable environment for learning & building in React.",
  },
  {
    src: nextjs,
    title: "Next js",
    description:
      "Next.js is an open-source web development framework for React-based applications",
  },
  {
    src: chakara,
    title: "Chakra UI",
    description:
      "Chakra UI is a simple, modular and accessible component library.",
  },
  {
    src: AlanAI,
    title: "Tailwind CSS",
    description: "Tailwind CSS is an open source CSS framework.",
  },
  {
    src: nodejs,
    title: "Node.js",
    description: " Node.js is a cross-platform, open-source server.",
  },
];
