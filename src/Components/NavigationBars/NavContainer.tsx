import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PrimaryColor } from "../Reuseables/colors";


export default function NavContainer({ children }: { children: ReactNode }) {
    return (
        <Box>
            <Flex align="center" h={100} bg={PrimaryColor} padding={7}>
                {children}
            </Flex>
        </Box>
    )
}