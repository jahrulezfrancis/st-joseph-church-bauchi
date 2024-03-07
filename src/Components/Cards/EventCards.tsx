import { Box, Stack, Button, Image, Heading, Text, } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface EventCardProps {
    eventImage: string;
    eventTitle: string;
    eventDescription: string;
    eventDate: string;
    eventLink: string;
}

export default function EventCards(props: EventCardProps) {
    return (
        <Box borderRadius={5} boxShadow="0px 0px 39px 3px rgba(202,201,203,0.75)"        >
            <Stack height="100%" justify="space-evenly" gap={4} padding="15px" width="300px">
                <Box position="relative">
                    <Image width='300px' src={props.eventImage} alt="event image" />
                    <Box width="80px" padding="10px" left={"190px"} top={2} position="absolute" bg="blue">
                        <Text>{props.eventDate}</Text>
                    </Box>
                </Box>
                <Heading fontSize="20px">{props.eventTitle}</Heading>
                <Text textAlign="start">{props.eventDescription}
                </Text>
                <Link to={props.eventLink}>
                    <Button>Learn more</Button>
                </Link>
            </Stack>
        </Box>
    )
}