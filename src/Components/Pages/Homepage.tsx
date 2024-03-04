import { Box, Button, Heading, Stack, Text, Center, Flex } from "@chakra-ui/react";
import BgImage from "../../assets/cathedral.jpg"
import { Link } from "react-router-dom";
import MassSectionCard from "../Cards/MassSectionCards";


export default function Homepage() {

    const fluidBox = ["auto", "auto", "31.25rem"]

    return (
        <Box>
            {/* Header section for Homepage */}
            <Box width="100%" height="600px" backgroundImage={BgImage} >
                <Stack align="center" justify="center" width="100%" height="100%" bg="rgba(20,0,0,0.74)">
                    <Stack textAlign="center" width={["auto", "auto", "500px"]}>
                        <Heading textTransform="capitalize" mb={5} fontWeight="800" fontSize="40px" color="whitesmoke">Welcome to St Joseph The Worker Catholic church Bauchi </Heading>
                        <Text fontWeight="600" color="white">St Joseph is a place of hope, worship, love, care, meaning and purpose. We are united throuhg the strength of Christ.</Text>
                        <Link to={"/about"}>
                            <Button>Learn more</Button>
                        </Link>
                    </Stack>
                </Stack>
            </Box>
            {/* about section */}
            <Center margin={10}>
                <Stack padding={10} _hover={{ boxShadow: "0px 0px 22px 3px rgba(145,10,103,0.22)" }} align="center" textAlign="center" width={fluidBox}>
                    <Heading>About us</Heading>
                    <Text>
                        St. Joseph the Worker Catholic Church in Bauchi State has been a pillar of the local community for decades. Our mission is to honor God through prayer, service, and love for our neighbors.
                    </Text>
                </Stack>
            </Center>
            {/* worship section */}
            <Box>
                <Heading textAlign="center" padding={5}>Our masses</Heading>
                <Flex wrap="wrap" justify="center" align="center" gap={10}>
                    <MassSectionCard massTitle="Morning Mass" time="6:30am" description="We celebrate the morning (english) mass by 6:30am" />
                    <MassSectionCard massTitle="Children Mass" time="8:30am" description="We celebrate the Children (english) mass by 8:30am" />
                    <MassSectionCard massTitle="Afternoon Mass" time="9:30am" description="We celebrate the Afternoon (Hausa) mass by 9:30am" />
                </Flex>
            </Box>

            {/* Minisries section */}

            {/* Reflection/sermon */}
            <Box padding={10}>
                <Heading>Reflections</Heading>
                <Text width={["auto", "50%"]}><strong>From the book of:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptas, animi ratione dolorum assumenda aspernatur? Saepe, vitae est! Dolores aperiam obcaecati deserunt reprehenderit tempore cupiditate ipsam, odit fuga impedit quia.

                </Text>
            </Box>

            {/* event section */}

            {/* donations */}

            {/* contact us */}

            {/* gallery */}
            <Box mt={100} mb={100}>
                Spacer
            </Box>
        </Box >
    )
}