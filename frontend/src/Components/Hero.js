import React from "react";
import { Typography, Container, Button } from "@mui/material";
const Hero = () => {

    return (
        <Container maxWidth="xl" sx={{ textAlign: "center" }}>
            <Typography variant="h3" gutterBottom sx={{ marginY: "160px" }}>
                Detection of Osteoporosis and <br />Osteoarthritis from Knee X-ray
            </Typography>
            <Button variant="contained" size="large" sx={{ marginBottom: "20%" }} >
                <strong> Get Started </strong>
            </Button>
        </Container>
    )
}

export { Hero };