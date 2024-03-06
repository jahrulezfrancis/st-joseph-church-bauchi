import { Box, Stack, Button, Image, Heading, Text, } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface EventCardProps {
    evenImage: string;
    eventTitle: string;
    eventDescription: string;
    eventDate: string;
    eventLink: string;
}

export default function EventCards(props: EventCardProps) {
    return (
        <Box>
            <Stack gap={4} padding="10px" width="300px">
                <Box position="relative">
                    <Image width='300px' src={props.evenImage} alt="event image" />
                    <Box padding="10px" left={"210px"} top={2} position="absolute" bg="blue">
                        <Text>{props.eventDate}</Text>
                    </Box>
                </Box>
                <Heading fontSize="20px">{props.eventTitle}</Heading>
                <Text textAlign="justify">{props.eventDescription}
                </Text>
                <Link to={props.eventLink}>
                    <Button>Learn more</Button>
                </Link>
            </Stack>
        </Box>
    )
}