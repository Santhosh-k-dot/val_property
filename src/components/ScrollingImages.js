import React from 'react';
import { Box, Typography } from '@mui/material';
import '../styles/ScrollingImages.css';
import reecoLogo1 from '../assets/scroll1.jpg';
import reecoLogo2 from '../assets/scroll2.jpg';
import reecoLogo3 from '../assets/scroll3.jpg';
import reecoLogo4 from '../assets/scroll4.jpg';

const images = [
    { src: reecoLogo1, },
    { src: reecoLogo2, },
    { src: reecoLogo1, },
    { src: reecoLogo4, },
    { src: reecoLogo2, },
    { src: reecoLogo1, },
    { src: reecoLogo2, },
];

const ScrollingImages = () => {
    return (
        <Box className="scrolling-images-container">
            <Typography variant="h4" sx={{ color: '#ffffff', mb: 2 }}>
                <span style={{ color: 'aqua' }}>
                    Here are our customers who can't live without us, and soon, you'll see why
                </span>
            </Typography>
            <Typography variant="body1" sx={{ color: '#ffffff', mb: 3 }}>
                <span style={{ color: 'Yellow' }}>  Unlock the True Value of Your Property</span>
            </Typography>
            <Box className="scrolling-images">
                {images.map((image, index) => (
                    <Box key={index} className="scrolling-image-item">
                        <Typography variant="h6" sx={{ color: '#ffffff', mb: 1 }}>

                        </Typography>
                        <img src={image.src} alt={`Slide ${index + 1}`} className="scrolling-image" />
                        <Typography variant="body2" sx={{ color: '#ffffff', mt: 1 }}>

                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ScrollingImages;
