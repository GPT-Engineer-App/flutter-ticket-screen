import React, { useState } from "react";
import { Box, VStack, Text, Heading, Button, Input, Select, Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const TicketScreen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted ticket:", { title, description, priority });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Box maxWidth="400px" margin="auto" padding={4}>
        <VStack spacing={6} align="stretch">
          <Heading size="xl" textAlign="center">
            Ticket Submitted
          </Heading>
          <Text>Your ticket has been successfully submitted.</Text>
          <Button as={Link} to="/" colorScheme="blue" size="lg">
            Back to Main Page
          </Button>
        </VStack>
      </Box>
    );
  }

  return (
    <Box maxWidth="400px" margin="auto" padding={4}>
      <VStack spacing={6} align="stretch">
        <Heading size="xl" textAlign="center">
          Submit a Ticket
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <Textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Select>
            <Button type="submit" colorScheme="blue" size="lg">
              Submit Ticket
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default TicketScreen;
