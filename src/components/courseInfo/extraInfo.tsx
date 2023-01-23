"use client";
import { Container, Heading, Box, Text, Link, VStack } from "@chakra-ui/react";
const extraInfo = () => {
  return (
    <Container maxWidth={"container.lg"} pb={50}>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading size="lg">The Outcome for Participants of the Program</Heading>
        <Text as="p" fontSize="md" pb={10}>
          The graduates of this program will own products (Full-Stack App
          Templates, AR and VR Experiences, and APIs) that are marketed globally
          by the Panaverse DAO and, if they like, will also be able to start off
          by offering services at a rate of $50 per hour ($96,000 per year).
          This would give Pakistani professionals and students a fantastic
          opportunity to better their financial situation while also giving the
          economy a much-needed boost by expanding software exports.
        </Text>
        <Link
          isExternal
          color={"blue.500"}
          href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms "
        >
          Top 5 Metaverse jobs that will rule the future of tech industry
        </Link>
        <Link
          isExternal
          color={"blue.500"}
          href="https://web3.career/web3-salaries/blockchain-developer"
        >
          Blockchain Developer Salary - Jun 2022
        </Link>
        <Link
          isExternal
          color={"blue.500"}
          href="https://thedefiant.io/web3-soaring-salaries/"
        >
          Web3 Salaries Soar to $750,000 for Rank-and-File Devs
        </Link>
        <Link
          isExternal
          color={"blue.500"}
          href="https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022"
        >
          The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s
          Uncharted Waters
        </Link>
        <Link
          isExternal
          color={"blue.500"}
          href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/"
        >
          How To Become Metaverse Developer: Scope, Skills, and Salary
        </Link>
      </VStack>
    </Container>
  );
};
export default extraInfo;
