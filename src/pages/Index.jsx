import React from "react";
import { Box, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box maxWidth="400px" margin="auto" padding={4}>
      <VStack spacing={6} align="stretch">
        <Heading size="xl" textAlign="center">
          Welcome to the Client Portal
        </Heading>
        <Button as={Link} to="/tickets" colorScheme="blue" size="lg">
          Purchase Tickets
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
