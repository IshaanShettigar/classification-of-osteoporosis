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

    const handleFileChange = async (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            // Create a FormData object to append the file
            const formData = new FormData();
            formData.append('file', selectedFile);

            // Use fetch to send the file to the backend
            try {
                const response = await fetch('http://127.0.0.1:8000/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('File uploaded successfully:', data);
                } else {
                    console.error('File upload failed.');
                }
            } catch (error) {
                console.error('Error uploading file:', error);
            }
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
