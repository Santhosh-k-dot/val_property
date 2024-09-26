import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Dialog, DialogTitle, DialogContent, TextField, Button, IconButton, MenuItem, Link, Snackbar, CircularProgress } from '@mui/material';
import { MdClose } from 'react-icons/md';
import { Alert } from '@mui/lab'; // For Snackbar with alerts

const cities = ['Pune', 'Mumbai', 'Bangalore']; // Replace with actual city names

const PopupForm = ({ open, handleClose, onFormSubmit }) => {
    const [state, setState] = useState({
        formData: {
            name: '',
            city: '',
            email: '',
            mobile: '',
        },
        errors: {
            name: '',
            city: '',
            email: '',
            mobile: '',
        },
    });

    const [helpOpen, setHelpOpen] = useState(false); // Help dialog state
    const [loading, setLoading] = useState(false);   // Loading state for button
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' }); // Snackbar for success/failure

    // Reusable validation patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;

    const handleChange = useCallback((e) => {
        setState((prevState) => ({
            ...prevState,
            formData: { ...prevState.formData, [e.target.name]: e.target.value },
        }));
    }, []);

    const validate = useCallback(() => {
        const { name, city, email, mobile } = state.formData;
        let isValid = true;
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        if (!city) {
            newErrors.city = 'City is required';
            isValid = false;
        }
        if (!emailRegex.test(email)) {
            newErrors.email = 'Invalid email address';
            isValid = false;
        }
        if (!mobileRegex.test(mobile)) {
            newErrors.mobile = 'Mobile number must be 10 digits';
            isValid = false;
        }

        setState((prevState) => ({ ...prevState, errors: newErrors }));
        return isValid;
    }, [state.formData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true);  // Start loading state
            try {
                const response = await axios.post('http://localhost:8080/api/download-guide/register', state.formData);
                console.log(response.data); // Handle the response
                onFormSubmit();  // Perform any action on form submission
                handleClose();   // Close the form
                setSnackbar({ open: true, message: 'Form submitted successfully!', severity: 'success' });
            } catch (error) {
                console.error('Error submitting the form', error);
                setSnackbar({ open: true, message: 'Failed to submit the form. Please try again.', severity: 'error' });
            } finally {
                setLoading(false);  // Stop loading state
            }
        }
    };

    const handleDialogToggle = useCallback(() => setHelpOpen((prev) => !prev), []); // Toggles Help dialog
    const handleSnackbarClose = useCallback(() => setSnackbar((prev) => ({ ...prev, open: false })), []); // Close Snackbar

    const { formData, errors } = state;

    return (
        <>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
                <DialogTitle>
                    Download Property Valuation Guide
                    <IconButton aria-label="close" onClick={handleClose} style={{ position: 'absolute', right: 8, top: 8 }}>
                        <MdClose />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <TextField
                            name="name"
                            label="Your name"
                            variant="outlined"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={!!errors.name}
                            helperText={errors.name}
                        />

                        <TextField
                            name="city"
                            label="City"
                            variant="outlined"
                            value={formData.city}
                            onChange={handleChange}
                            select
                            fullWidth
                            required
                            error={!!errors.city}
                            helperText={errors.city}
                        >
                            {cities.map((city, index) => (
                                <MenuItem key={index} value={city}>
                                    {city}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            name="email"
                            label="Your email address"
                            variant="outlined"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={!!errors.email}
                            helperText={errors.email}
                        />

                        <TextField
                            name="mobile"
                            label="Your mobile number"
                            variant="outlined"
                            value={formData.mobile}
                            onChange={handleChange}
                            fullWidth
                            required
                            inputProps={{ maxLength: 10 }} // Limits input to 10 digits
                            error={!!errors.mobile}
                            helperText={errors.mobile}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ backgroundColor: '#d32f2f' }}
                            disabled={loading}
                            startIcon={loading ? <CircularProgress size={20} /> : null}  // Show spinner when loading
                        >
                            {loading ? 'Submitting...' : 'Download Guide'}
                        </Button>

                        <p style={{ fontSize: '12px', textAlign: 'center' }}>
                            By continuing, I agree to Reecocefe T&C, Privacy Policy & Cookie Policy
                        </p>

                        {/* Help Link */}
                        <Link href="#" onClick={handleDialogToggle} style={{ textAlign: 'center', display: 'block' }}>
                            Need help? Click here
                        </Link>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Help Dialog */}
            <Dialog open={helpOpen} onClose={handleDialogToggle} fullWidth maxWidth="sm">
                <DialogTitle>
                    How the Form Works
                    <IconButton aria-label="close" onClick={handleDialogToggle} style={{ position: 'absolute', right: 8, top: 8 }}>
                        <MdClose />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <p>This form allows you to download a property valuation guide. Here's how it works:</p>
                    <ul>
                        <li>Fill in your name, city, email, and mobile number.</li>
                        <li>Your mobile number must be exactly 10 digits long.</li>
                        <li>Make sure to provide a valid email address.</li>
                        <li>Click on the "Download Guide" button to submit the form.</li>
                        <li>Upon successful submission, you will be able to download the guide.</li>
                    </ul>
                    <p>If you have any issues, feel free to contact us for support. support@gmail.com</p>
                </DialogContent>
            </Dialog>

            {/* Snackbar for success/failure messages */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default PopupForm;
