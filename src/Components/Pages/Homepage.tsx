import { Box, Button, Heading, Stack, Text, Center, Flex, Divider } from "@chakra-ui/react";
import BgImage from "../../assets/cathedral.jpg"
import { Link } from "react-router-dom";
import MassSectionCard from "../Cards/MassSectionCards";
import ParishOfficialsCard from "../Cards/OfficialsCard";
import Catechist from "../../assets/catechist.jpg";
import ParishDayCelebration from "../../assets/celebratin-congregation.jpg"
import SeedSowingImage from "../../assets/seed-sowing.jpeg"
import EventCards from "../Cards/EventCards";


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


            {/* parish officials section  */}
            <Box>
                <Heading textAlign="center">Our Parish Officials</Heading>
                <Flex justify="center" wrap="wrap" gap={10}>
                    <ParishOfficialsCard personName="Fr Claytus" personImage="" personPosition="Parish Priest" />
                    <ParishOfficialsCard personName="Fr Kameze" personImage="" personPosition="Asst Parish Priest" />
                    <ParishOfficialsCard personName="Cath Peter Tsakani" personImage="" personPosition="" />
                </Flex>
            </Box>

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
            <Box>
                <Flex gap={10} wrap="wrap">
                    <EventCards eventTitle="Parish Day" eventDescription="Description for parish day comes here" eventDate="20th March" eventImage={ParishDayCelebration} eventLink="" />
                    <EventCards eventTitle="Catechist Day" eventDescription="Description for Catechist day goes here" eventDate="20th March" eventImage={Catechist} eventLink="" />
                    <EventCards eventTitle="Family seed sowing" eventDescription="Family seed sowing is currently ongoing" eventDate="20th March" eventImage={SeedSowingImage} eventLink="" />
                </Flex>
            </Box>

            {/* donations */}
            <Box mt="100px">
                <Stack textAlign="center">
                    <Heading>Help spread the word of God through Donations</Heading>
                    <Text> Support the ministries and outreach of St. Joseph the Worker Catholic Church through your generous donations. Your contributions help us continue our mission of service and love.</Text>
                </Stack>
                <Flex mt="50px" justify="center" wrap="wrap" gap={10}>
                    <Stack align="center" justify="space-between" height="auto" textAlign="center" width={fluidBox}>
                        <Heading>Cash Donations</Heading>
                        <Text>Consider supporting our cause with a cash donation. Your financial contribution will allow us to continue providing essential services and support to the parish and to those in need. With your generosity, we can make a significant impact and help improve the lives of individuals in our community. Any amount donated makes a difference, and we are grateful for your support.</Text>
                        <Button>Donate now</Button>
                    </Stack>
                    <Stack align="center" justify="space-between" height="auto" textAlign="center" width={fluidBox}>
                        <Heading>Clothes donation</Heading>
                        <Text>Help us make a difference by donating clothes to those in need. Your contribution of gently used clothing can provide warmth and comfort to individuals facing challenging circumstances. By donating clothes, you are directly impacting the lives of others and making a positive difference in our community. Your support is truly appreciated.</Text>
                        <Button>Donate now</Button>
                    </Stack>
                </Flex>
            </Box>

            {/* gallery */}
            <Box>
                <Heading>Saint Joseph's Gallery</Heading>
                <Text>
                    View photos and videos of our church events, services, community projects, and cultural celebrations that reflect the vibrant spirit of St. Joseph the Worker Catholic Church.
                </Text>
            </Box>

            <footer>
                <Box mt={10}>
                    <Stack>
                        <Divider />
                        <Text padding={"20px 0px"} align="center">Copyright © 2024 | 7thWeb Technologies</Text>
                    </Stack>
                </Box>
            </footer>
        </Box >
    )
}