import React from "react";
import { AppBar, Toolbar, Box, Container, Typography, Button, Tooltip } from '@mui/material';
import mims from '../MIMS-logo.jpg';
import pesu from '../pesu-logo-horizontal2.png'
const Header = () => {
    const pages = ["Paper", "Authors"]
    return (
        <AppBar position="static" sx={{ backgroundColor: "white", marginBottom: "50px" }}>
            <Container maxWidth="xl">
                <Toolbar sx={{ backgroundColor: "white", paddingY: "10px" }}>
                    <img src={mims} style={{ width: "3em" }} />
                    <img src={pesu} style={{ width: "8em" }} />

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {pages.map((page) => (
                            <Button key={page} variant="outlined" sx={{ marginX: "10px" }}>
                                <strong>{page}</strong>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export { Header };