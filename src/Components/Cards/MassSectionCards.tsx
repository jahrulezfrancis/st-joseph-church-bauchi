import { Heading, Stack, Text } from "@chakra-ui/react";


interface ServicesCardProps {
    time: string;
    massTitle: string;
    description: string;
}

export default function MassSectionCard(props: ServicesCardProps) {
    const fluidBox = ["auto", "auto", "31.25rem"]
    return (
        <Stack width={fluidBox} gap={2} color="white" padding={8} bg="#910A67">
            <Heading>{props.massTitle}</Heading>
            <Text>Time: {props.time}</Text>
            <Text>{props.description}</Text>
        </Stack>
    )
}