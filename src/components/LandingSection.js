import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import owanbe from "../images/owanbe.jpeg"

const greeting = "Hello, I am Meek Dee!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} >
      <VStack>
        <img src={owanbe} height="2000px" width="200px" alt="A picture of me" />
        <Heading as="h4" size="md" >{greeting}</Heading>
      </VStack>
      <VStack>
        <Heading as="h1" size="2xl">{bio1}</Heading>
        <Heading as="h1" size="2xl">{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
