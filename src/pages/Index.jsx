import React, { useState } from "react";
import { Box, VStack, HStack, Text, Heading, Button, Input, Select, Divider, Image } from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Index = () => {
  const [numTickets, setNumTickets] = useState(1);
  const [ticketType, setTicketType] = useState("general");

  const handleIncrement = () => {
    setNumTickets(numTickets + 1);
  };

  const handleDecrement = () => {
    if (numTickets > 1) {
      setNumTickets(numTickets - 1);
    }
  };

  const handleTicketTypeChange = (event) => {
    setTicketType(event.target.value);
  };

  return (
    <Box maxWidth="400px" margin="auto" padding={4}>
      <VStack spacing={6} align="stretch">
        <Heading size="xl" textAlign="center">
          Ticket Purchase
        </Heading>
        <Image src="https://images.unsplash.com/photo-1515139372923-c923c9e9a18c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwdGlja2V0c3xlbnwwfHx8fDE3MTI2NTIyNDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Ticket" />
        <HStack justify="space-between">
          <Text fontSize="lg">Number of Tickets:</Text>
          <HStack>
            <Button onClick={handleDecrement}>
              <FaMinus />
            </Button>
            <Input type="number" value={numTickets} width="60px" textAlign="center" readOnly />
            <Button onClick={handleIncrement}>
              <FaPlus />
            </Button>
          </HStack>
        </HStack>
        <Select value={ticketType} onChange={handleTicketTypeChange}>
          <option value="general">General Admission</option>
          <option value="vip">VIP</option>
          <option value="backstage">Backstage Pass</option>
        </Select>
        <Divider />
        <Text fontSize="lg">Total Price: ${numTickets * (ticketType === "general" ? 50 : ticketType === "vip" ? 100 : 200)}</Text>
        <Button colorScheme="blue" size="lg">
          Purchase Tickets
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
