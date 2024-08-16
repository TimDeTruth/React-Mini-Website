import React from "react";
import { Avatar, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Tim!";
const bio1 = "A frontend developers";
const bio2 = "Learning React and React Native!";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar src="https://i.pravatar.cc/150?img=7 " size="xl"></Avatar>
      <Text>{greeting}</Text>
      <Heading>{bio1}</Heading> <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
