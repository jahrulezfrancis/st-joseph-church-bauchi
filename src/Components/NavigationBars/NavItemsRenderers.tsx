import { Stack, Heading, } from "@chakra-ui/react"
import { navItems } from "./navItems";
import { NavLink } from "react-router-dom";
import "./nav.css"

export default function NavItemsRenderers({ direction }: { direction: 'row' | 'column' | undefined }) {
    return (
        <Stack direction={direction} gap={5}>
            {navItems.map((item) => (
                <NavLink className={({ isActive }) =>
                    isActive ? "active" : "in-active"
                } key={item.id} to={item.path}>
                    <Heading color="white" fontSize={20}>
                        {item.name}
                    </Heading>
                </NavLink>
            ))}
        </Stack>
    );
}
