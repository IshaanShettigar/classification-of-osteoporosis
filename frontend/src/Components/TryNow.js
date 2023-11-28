import React from "react";
import { Typography, Container, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const TryNow = () => {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            // Handle the selected file, e.g., display its information or upload it.
            console.log('Selected file:', selectedFile);
        }
    };

    return (
        <Container maxWidth="xl" sx={{ textAlign: "center" }}>
            <Typography variant="h4" gutterBottom sx={{ marginY: "1em", color: "#141414" }}>
                <strong>Try Now</strong>
            </Typography>
            <Typography variant="h6" sx={{ marginX: "auto", maxWidth: "80%", color: "#1c1c1c" }}>
                Upload an X-ray
            </Typography>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{ marginY: "2em" }}>
                Upload file
                <VisuallyHiddenInput type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
            </Button>

        </Container>
    )
}

export { TryNow }
