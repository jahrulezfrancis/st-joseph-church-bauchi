import { Box, Button, Heading, Stack, Text, Center, Flex, Divider, Tooltip, Image } from "@chakra-ui/react";
import BgImage from "../../assets/cathedral.jpg"
import { Link } from "react-router-dom";
import MassSectionCard from "../Cards/MassSectionCards";
import ParishOfficialsCard from "../Cards/OfficialsCard";
import EventCards from "../Cards/EventCards";
import Catechist from "../../assets/catechist.jpg";
import ParishDayCelebration from "../../assets/celebratin-congregation.jpg"
import SeedSowingImage from "../../assets/seed-sowing.jpeg"
import CatechistImage from "../../assets/catechist_b.jpg";
import RevFrImage from "../../assets/reveren_father2.jpg";
import RevFrImage2 from "../../assets/Reveren_Father.jpg";
import { BiSolidDonateHeart } from "react-icons/bi";
import { GiClothes } from "react-icons/gi";
import { galleryData } from "../DummyData";




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
                    <ParishOfficialsCard personName="Fr Claytus" personImage={RevFrImage} personPosition="Parish Priest" />
                    <ParishOfficialsCard personName="Fr Kameze" personImage={RevFrImage2} personPosition="Asst Parish Priest" />
                    <ParishOfficialsCard personName="Cath Peter Tsakani" personImage={CatechistImage} personPosition="Catechist" />
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
            <Box mt={50}>
                <Heading textAlign="center">Spiritual Readings</Heading>
                <Flex justify="center" align="center" gap="10px" wrap="wrap" padding={10}>
                    <Box width={["auto", "auto", "700px"]} pl={5} borderLeft={"10px solid #483534"}>
                        <Heading>Reflections</Heading>
                        <Text width="100%"><strong>From the book of:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptas, animi ratione dolorum assumenda aspernatur? Saepe, vitae est! Dolores aperiam obcaecati deserunt reprehenderit tempore cupiditate ipsam, odit fuga impedit quia.
                        </Text>
                    </Box>

                    {/* Daily reflections section */}
                    <Box width={["auto", "auto", "700px"]} pl={5} borderLeft={"10px solid #483534"}>
                        <Heading>Daily Readings</Heading>
                        <Text width="100%"><strong>From the book of:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptas, animi ratione dolorum assumenda aspernatur? Saepe, vitae est! Dolores aperiam obcaecati deserunt reprehenderit tempore cupiditate ipsam, odit fuga impedit quia.
                        </Text>
                    </Box>
                </Flex>
            </Box>

            {/* event section */}
            <Box mt={100}>
                <Heading textAlign="center">Ongoing/Upcoming event</Heading>
                <Flex justify="center" pt={10} gap={10} wrap="wrap">
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
                <Flex mt="50px" justify="center" wrap="wrap" gap={12}>
                    <Stack borderRadius={8} _hover={{ boxShadow: "0px 0px 39px 3px rgba(202,201,203,0.75)" }} padding={5} borderBottomRadius={8} align="center" justify="space-between" height="auto" textAlign="center" width={fluidBox}>
                        <Heading>Cash Donations</Heading>
                        <Text>Consider supporting our cause with a cash donation. Your financial contribution will allow us to continue providing essential services and support to the parish and to those in need. With your generosity, we can make a significant impact and help improve the lives of individuals in our community. Any amount donated makes a difference, and we are grateful for your support.</Text>
                        <Button _hover={{ bgColor: "#B35897" }} leftIcon={<BiSolidDonateHeart />} color="white" bg="#910A67">Donate now</Button>
                    </Stack>
                    <Stack borderRadius={8} _hover={{ boxShadow: "0px 0px 39px 3px rgba(202,201,203,0.75)" }} padding={5} borderBottomRadius={8} align="center" justify="space-between" height="auto" textAlign="center" width={fluidBox}>
                        <Heading>Clothes donation</Heading>
                        <Text>Help us make a difference by donating clothes to those in need. Your contribution of gently used clothing can provide warmth and comfort to individuals facing challenging circumstances. By donating clothes, you are directly impacting the lives of others and making a positive difference in our community. Your support is truly appreciated.</Text>
                        <Button _hover={{ bgColor: "#B35897" }} leftIcon={<GiClothes />} color="white" bg="#910A67">Donate now</Button>
                    </Stack>
                </Flex>
            </Box>

            {/* gallery */}
            <Box>
                <Stack align="center" mt="100px">
                    <Heading>Saint Joseph's Gallery</Heading>
                    <Text>
                        View photos and videos of our church events, services, community projects, and cultural celebrations that reflect the vibrant spirit of St. Joseph the Worker Catholic Church.
                    </Text>
                    <Box>
                        <Flex gap={5} wrap={"wrap"}>
                            {galleryData.map((item) => {
                                return (
                                    <Box key={item.id}>
                                        <Tooltip label={item.event}>
                                            <Image width="300px" src={item.imgUrl} alt={item.event + "'s image"} />
                                        </Tooltip>
                                    </Box>
                                )
                            })}
                        </Flex>
                    </Box>
                </Stack>
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