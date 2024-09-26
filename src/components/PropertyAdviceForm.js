import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, Grid, Typography, InputAdornment } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import '../styles/PropertyAdviceForm.css'; // Ensure this file exists or adjust styles directly here

const PropertyAdviceForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        city: '',
        mobileNumber: '',
        question: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        if (!formData.firstName || !formData.city || !formData.mobileNumber || !formData.question) {
            setError('Please fill out all fields');
            return false;
        }
        if (!/^\d{10}$/.test(formData.mobileNumber)) {
            setError('Please enter a valid 10-digit mobile number');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!validateForm()) return;

        try {
            const response = await axios.post(
                'http://localhost:8080/api/property-advice',
                formData
            );

            console.log(response); // Log the response for debugging

            if (response.status === 201) {
                setSuccess('Your Form has been submitted successfully! We will contact you soon.');
                setFormData({
                    firstName: '',
                    city: '',
                    mobileNumber: '',
                    question: '',
                });
            } else {
                setError('Submission failed. Please try again later.');
            }
        } catch (error) {
            console.error(error); // Log the error for debugging
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <Box
            className="property-advice-form-container"
            sx={{
                maxWidth: 1200,
                margin: { xs: '20px', sm: '30px auto' },
                padding: { xs: 3, sm: 4 },
                background: 'linear-gradient(135deg, #color1, #color2)', // Replace #color1 and #color2 with the extracted colors
                borderRadius: 3,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                },
            }}
        >
            <Typography variant="h5" className="text-center" sx={{ fontWeight: 'bold', mb: 2, color: '#1e88e5' }}>
                Get Free Advice on Your Property Valuation Requirement
            </Typography>
            <Typography variant="subtitle1" className="text-center" sx={{ mb: 3, color: '#1976d2' }}>
                Send your query now & let us respond within 24 hrs.
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            name="firstName"
                            placeholder="First Name"
                            fullWidth
                            value={formData.firstName}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                backgroundColor: '#fff',
                                '& .MuiInputBase-input': { color: '#000' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#ccc' },
                                    '&:hover fieldset': { borderColor: '#1e88e5' },
                                    '&.Mui-focused fieldset': { borderColor: '#1e88e5' },
                                },
                            }}
                            error={error && !formData.firstName}
                            helperText={error && !formData.firstName && "First Name is required"}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            name="city"
                            placeholder="City"
                            fullWidth
                            value={formData.city}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationOnIcon />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                backgroundColor: '#fff',
                                '& .MuiInputBase-input': { color: '#000' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#ccc' },
                                    '&:hover fieldset': { borderColor: '#1e88e5' },
                                    '&.Mui-focused fieldset': { borderColor: '#1e88e5' },
                                },
                            }}
                            error={error && !formData.city}
                            helperText={error && !formData.city && "City is required"}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            name="mobileNumber"
                            placeholder="Your mobile number"
                            fullWidth
                            value={formData.mobileNumber}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIcon />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                backgroundColor: '#fff',
                                '& .MuiInputBase-input': { color: '#000' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#ccc' },
                                    '&:hover fieldset': { borderColor: '#1e88e5' },
                                    '&.Mui-focused fieldset': { borderColor: '#1e88e5' },
                                },
                            }}
                            error={error && (!formData.mobileNumber || !/^\d{10}$/.test(formData.mobileNumber))}
                            helperText={error && (!formData.mobileNumber || !/^\d{10}$/.test(formData.mobileNumber)) && "Valid mobile number is required"}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            name="question"
                            placeholder="Write your FREE question"
                            fullWidth
                            value={formData.question}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <ChatBubbleOutlineIcon />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                backgroundColor: '#fff',
                                '& .MuiInputBase-input': { color: '#000' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#ccc' },
                                    '&:hover fieldset': { borderColor: '#1e88e5' },
                                    '&.Mui-focused fieldset': { borderColor: '#1e88e5' },
                                },
                            }}
                            error={error && !formData.question}
                            helperText={error && !formData.question && "Question is required"}
                        />
                    </Grid>
                </Grid>
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            background: 'linear-gradient(135deg, #43a047, #66bb6a)',
                            '&:hover': { background: 'linear-gradient(135deg, #388e3c, #4caf50)' },
                            padding: '12px 24px',
                            fontSize: '16px',
                            borderRadius: 4,
                            margin: '15px',
                            color: '#fff',
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </form>
            {error && <Typography className="error-message" sx={{ color: '#d32f2f', mt: 2 }}>{error}</Typography>}
            {success && <Typography className="success-message" sx={{ color: '#388e3c', mt: 2 }}>{success}</Typography>}
        </Box>
    );
};

export default PropertyAdviceForm;
