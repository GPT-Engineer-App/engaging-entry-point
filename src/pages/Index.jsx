import { Box, Button, Container, Flex, Heading, IconButton, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaBars, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex as="nav" w="full" bg="gray.900" color="white" py={2} px={4} align="center" justify="space-between" position="sticky" top={0} zIndex={10}>
      <IconButton icon={<FaBars />} variant="outline" aria-label="Open Menu" />
      <Stack direction="row" spacing={4}>
        <Link href="#hero" p={2} _hover={{ color: "blue.300" }}>
          Home
        </Link>
        <Link href="#features" p={2} _hover={{ color: "blue.300" }}>
          Features
        </Link>
        <Link href="#testimonials" p={2} _hover={{ color: "blue.300" }}>
          Testimonials
        </Link>
        <Link href="#cta" p={2} _hover={{ color: "blue.300" }}>
          Join Us
        </Link>
      </Stack>
    </Flex>
  );
};

const HeroSection = () => {
  return (
    <Flex id="hero" align="center" justify="center" h="100vh" bg="gray.800" color="white" position="relative">
      <Image src="https://images.unsplash.com/photo-1503455637927-730bce8583c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkeW5hbWljJTIwdmlkZW8lMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcxNTI4NjQxOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Dynamic Background" position="absolute" top={0} left={0} w="full" h="full" objectFit="cover" zIndex={-1} />
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" fontWeight="bold">
          Empower Your Workflow
        </Heading>
        <Text fontSize="xl">Revolutionize your daily tasks with cutting-edge technology.</Text>
        <Button colorScheme="blue" size="lg">
          Get Started
        </Button>
      </VStack>
    </Flex>
  );
};

const FeatureSection = () => {
  return (
    <Container id="features" maxW="container.xl" py={10}>
      <Heading as="h2" size="xl" textAlign="center" mb={6}>
        Core Features
      </Heading>
      <Stack direction={{ base: "column", md: "row" }} spacing={8} justify="center">
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl">Feature One</Heading>
          <Text mt={4}>Description of feature one.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl">Feature Two</Heading>
          <Text mt={4}>Description of feature two.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl">Feature Three</Heading>
          <Text mt={4}>Description of feature three.</Text>
        </Box>
      </Stack>
    </Container>
  );
};

const TestimonialCarousel = () => {
  return (
    <Box id="testimonials" bg="gray.100" p={10}>
      <VStack spacing={8}>
        <Text fontStyle="italic">"This product has changed the way we work!" - John Doe</Text>
        <Text fontStyle="italic">"Absolutely essential for our team's success." - Jane Smith</Text>
      </VStack>
    </Box>
  );
};

const CTASection = () => {
  return (
    <Flex id="cta" bg="blue.600" color="white" p={10} align="center" justify="center">
      <VStack spacing={3}>
        <Heading as="h3" size="lg">
          Ready to Start?
        </Heading>
        <Text>Join us today and transform your workflow!</Text>
        <Button colorScheme="green" size="lg">
          Sign Up Now
        </Button>
      </VStack>
    </Flex>
  );
};

const Footer = () => {
  return (
    <Box bg="gray.900" color="gray.200" p={5}>
      <Container maxW="container.xl" d="flex" justifyContent="space-between" alignItems="center">
        <Text>&copy; 2023 Your Company</Text>
        <Stack direction="row" spacing={4}>
          <Link href="https://facebook.com" isExternal>
            <FaFacebook />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <FaInstagram />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <FaLinkedin />
          </Link>
          <Link href="https://youtube.com" isExternal>
            <FaYoutube />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

const Index = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <TestimonialCarousel />
      <CTASection />
      <Footer />
    </Box>
  );
};

export default Index;
