import { Box, Stack, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface OfficialCardProps {
    personPosition: string;
    personImage: string;
    personName: string;
}

export default function ParishOfficialsCard(props: OfficialCardProps) {
    return (
        <Box>
            <Stack padding={5} justify="space-between" align="center" width={["auto", "auto", "320px"]}>
                <Text>{props.personPosition}</Text>
                <Image height={"300px"} objectFit="cover" width={"280px"} src={props.personImage} alt={props.personName} />
                <Text>{props.personName}</Text>
                <Link to="#">
                    <Text>Biography</Text>
                </Link>
            </Stack>
        </Box>
    )
}