import * as React from 'react';
import { Container } from '@mui/material';
import osteophyte1 from '../images/osteophyte1.jpg';
import jsn1 from '../images/jsn1.png';
import osteophyte4 from '../images/osteophyte4.jpg';
import roi1 from '../images/roi1.jpg';

const itemData = [
    {
        img: jsn1,
        title: 'JSN',
    },
    {
        img: osteophyte1,
        title: 'Osteophytes',
    },

    {
        img: roi1,
        title: 'ROI1',
    },
    {
        img: osteophyte4,
        title: 'JSN2',
    }
];

export default function StandardImageList() {
    return (
        <Container sx={{ display: "flex", flexDirection: "row", alignItems: "center", marginY: "4em", justifyContent: "space-around" }}>
            {itemData.map((item) => (
                <img key={itemData.title} src={item.img} style={{ width: "20%", height: "20%" }} />
            ))}
        </Container>
    );
}

