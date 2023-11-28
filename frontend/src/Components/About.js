import React from "react"
import { Typography, Container } from "@mui/material";
import StandardImageList from "./StandardImageList";


const About = () => {
    return (
        <Container maxWidth="xl" sx={{ textAlign: "center" }}>
            <Typography variant="h4" gutterBottom sx={{ marginY: "1em", color: "#141414" }}>
                About
            </Typography>
            <Typography variant="body1" sx={{ marginX: "auto", maxWidth: "80%", color: "#1c1c1c" }}>
                In this project, we're focusing on finding early signs of <strong>osteoporosis</strong> and <strong>osteoarthritis</strong> in the knee area
                using X-ray images and information about the patients. The data we're using is carefully gathered at the
                Mandya Institute of Medical Sciences and annotated by their Head of Department.
            </Typography>
            <StandardImageList />
            <Typography variant="body1" align="left" sx={{ marginX: "auto", maxWidth: "80%", color: "#1c1c1c", marginY: "3em" }}>
                Our main goal is to use a smart combination of different learning techniques to make our diagnosis more accurate and reliable.
                We're not just looking for problems; we want to understand what's causing them. For example, we're trying to connect certain
                <strong> patterns in the bone structure</strong> with the presence of osteoporosis. At the same time, we're keeping an eye out
                for signs like the <strong>narrowing of joint spaces</strong> and the <strong>formation of bone spurs</strong>, which can indicate
                osteoarthritis. This thorough analysis gives us a complete picture of the knee's health.
                <br />
                <br />
                But that's not all, we're also exploring the potential of <strong>quantum</strong> computing to see if it can help us make diagnoses faster and more
                efficiently than traditional computers. It's like upgrading our tools to see if we can revolutionize how we approach healthcare
                diagnoses. And, we're making sure our model's decisions are understandable to everyone involved by prioritizing transparency in how it works.
            </Typography>
        </Container>
    )
}

export { About };