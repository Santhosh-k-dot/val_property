import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, Modal, IconButton } from '@mui/material';
import { FaCheckCircle } from 'react-icons/fa';
import CloseIcon from '@mui/icons-material/Close';
import PopupForm from './PopupForm'; // Import your PopupForm component

// Styles for the Modal
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxWidth: 800,
    outline: 'none',
};

const PropertyValhome = () => {
    const [openForm, setOpenForm] = useState(false);
    const [openVideo, setOpenVideo] = useState(false);

    const handleOpenForm = () => setOpenForm(true);
    const handleCloseForm = () => setOpenForm(false);
    const handleOpenVideo = () => setOpenVideo(true);
    const handleCloseVideo = () => setOpenVideo(false);

    const handleFormSubmit = () => {
        // Start PDF download after form submission
        const link = document.createElement('a');
        link.href = 'Property_Valuation_Comprehensive_Report.pdf'; // Update with your actual PDF path
        link.download = 'SampleReport.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box
            sx={{
                padding: { xs: 2, md: 4 },
                maxWidth: 1200,
                margin: 'auto',
                backgroundColor: 'white',
                backgroundImage: 'url("https://www.transparenttextures.com/patterns/clean-gray-paper.png")',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            }}
        >
            {/* Breadcrumb */}

            {/* Main Layout */}
            <Box
                className="row"
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                {/* Left Content */}
                <Box className="col-md-8" sx={{ flexBasis: '70%' }}>
                    <Box sx={{ textAlign: 'left', paddingLeft: { xs: 0, md: 2 } }}>
                        <Typography
                            variant="h3"
                            component="h1"
                            gutterBottom
                            sx={{
                                backgroundImage:
                                    'linear-gradient(to right, #ff7e5f, #feb47b)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                fontWeight: 'bold',
                            }}
                        >
                            Property Valuation
                        </Typography>

                        <Typography
                            variant="h6"
                            component="h2"
                            sx={{
                                color: '#555',
                                marginBottom: 2,
                                fontStyle: 'italic',
                            }}
                        >
                            Discover the real value of your property
                        </Typography>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            sx={{ marginBottom: 4 }}
                        >
                            Get Expert to evaluate it before you{' '}
                            <span
                                style={{
                                    color: '#ff7e5f',
                                    fontWeight: 'bold',
                                }}
                            >
                                Buy
                            </span>{' '}
                            or{' '}
                            <span
                                style={{
                                    color: '#ff7e5f',
                                    fontWeight: 'bold',
                                }}
                            >
                                Sell
                            </span>
                        </Typography>

                        {/* Action Buttons */}
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundImage:
                                        'linear-gradient(to right, #00c6ff, #0072ff)',
                                    paddingX: 4,
                                    paddingY: 1,
                                    borderRadius: 20,
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                                    '&:hover': {
                                        backgroundImage:
                                            'linear-gradient(to right, #0072ff, #00c6ff)',
                                    },
                                }}
                            >
                                Request a Valuation{' '}
                                <span
                                    style={{
                                        fontSize: '0.8rem',
                                        marginLeft: 8,
                                    }}
                                >
                                    Free
                                </span>
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                sx={{
                                    borderRadius: 20,
                                    paddingX: 4,
                                    paddingY: 1,
                                    border: '2px solid #0072ff',
                                    '&:hover': {
                                        border: '2px solid #00c6ff',
                                    },
                                }}
                                onClick={handleOpenForm}
                            >
                                Download Sample Report
                            </Button>
                        </Box>

                        {/* Benefits Section */}
                        <Box className="row" sx={{ marginTop: 4 }}>
                            <Box
                                className="col-md-6"
                                sx={{
                                    padding: { xs: 1, md: 2 },
                                }}
                            >
                                <Card
                                    variant="outlined"
                                    sx={{
                                        padding: 2,
                                        backgroundImage:
                                            'url("https://www.transparenttextures.com/patterns/arches.png")',
                                        backgroundColor: '#f9f9f9',
                                        borderRadius: '8px',
                                        boxShadow:
                                            '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 'bold',
                                                backgroundColor: '#f0f0f0',
                                                padding: '8px',
                                                borderRadius: '4px',
                                            }}
                                        >
                                            Benefits for Buyers
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 2,
                                                marginTop: 2,
                                            }}
                                        >
                                            <Typography variant="body1">
                                                <FaCheckCircle color="#00c6ff" />{' '}
                                                Know the real going price for the
                                                property you want to buy
                                            </Typography>
                                            <Typography variant="body1">
                                                <FaCheckCircle color="#00c6ff" />{' '}
                                                Learn the amount of Pre-Approved
                                                Home Loan you can avail
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>

                            <Box
                                className="col-md-6"
                                sx={{
                                    padding: { xs: 1, md: 2 },
                                }}
                            >
                                <Card
                                    variant="outlined"
                                    sx={{
                                        padding: 2,
                                        backgroundImage:
                                            'url("https://www.transparenttextures.com/patterns/arches.png")',
                                        backgroundColor: '#f9f9f9',
                                        borderRadius: '8px',
                                        boxShadow:
                                            '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 'bold',
                                                backgroundColor: '#f0f0f0',
                                                padding: '8px',
                                                borderRadius: '4px',
                                            }}
                                        >
                                            Benefits for Sellers
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 2,
                                                marginTop: 2,
                                            }}
                                        >
                                            <Typography variant="body1">
                                                <FaCheckCircle color="#00c6ff" />{' '}
                                                Sell your Property at Maximum
                                                Price
                                            </Typography>
                                            <Typography variant="body1">
                                                <FaCheckCircle color="#00c6ff" />{' '}
                                                Valuation Certificate to
                                                negotiate with buyers
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Right Image Section */}
                <Box
                    className="col-md-4"
                    sx={{
                        flexBasis: '30%',
                        textAlign: 'center',
                        paddingTop: { xs: 3, md: 5 },
                    }}
                >
                    <Box
                        component="img"
                        src="https://www.geeklymedia.com/hs-fs/hubfs/Hand%20press%20play%20button%20sign%20to%20start%20or%20initate%20projetcts%20as%20con.jpg?width=1200&height=1200&name=Hand%20press%20play%20button%20sign%20to%20start%20or%20initate%20projetcts%20as%20con.jpg"
                        alt="Expert Advice on Property Valuation"
                        sx={{
                            borderRadius: 2,
                            width: '100%',
                            maxWidth: '400px',
                            cursor: 'pointer',
                            boxShadow:
                                '0 4px 10px rgba(0, 0, 0, 0.1)',
                        }}
                        onClick={handleOpenVideo}
                    />
                </Box>
            </Box>

            {/* Popup Form */}
            <PopupForm 
                open={openForm} 
                handleClose={handleCloseForm} 
                onFormSubmit={handleFormSubmit} 
            />

            {/* Modal for YouTube Video */}
            <Modal
                open={openVideo}
                onClose={handleCloseVideo}
                aria-labelledby="youtube-video-modal"
                aria-describedby="modal-to-display-youtube-video"
            >
                <Box sx={modalStyle}>
                    <IconButton
                        aria-label="close"
                        onClick={handleCloseVideo}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/_KyyQMRD3lU?si=yZ94LRfwAzDQFohG"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </Box>
            </Modal>
        </Box>
    );
};

export default PropertyValhome;
