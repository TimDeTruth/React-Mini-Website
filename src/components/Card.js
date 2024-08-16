import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    // <Box bg="white" maxW="sm" borderWidth="5px" borderRadius="lg">
    //   <Image src={imageSrc} boxSize="sm" color="black"></Image>
    //   <Text color="black" fontSize={"2xl"} as="b">
    //     {title}
    //   </Text>
    //   <Text color="black">{description}</Text>
    //   <Text color="black">
    //     See more.
    //     <FontAwesomeIcon icon={faArrowRight} size="1x" />
    //   </Text>
    // </Box>


    //better implemtnation 
    <VStack alignItems="left" textColor="black" bg="white" borderRadius="15">
      <Image src={imageSrc.substring(1)} alt={title} borderRadius="15" />
      <Heading as="h1" size="sm" paddingLeft="3">
        {title}
      </Heading>
      <Text paddingLeft="3">{description}</Text>
      <HStack paddingLeft="3" paddingBottom="3">
        <Heading as="h2" size="xs">
          See more
        </Heading>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
