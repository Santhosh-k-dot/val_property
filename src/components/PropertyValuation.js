import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Button, Link, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { FaCheckCircle } from 'react-icons/fa';
import CartPage from './CartPage'; // Ensure the path is correct for your project

const PropertyValuation = () => {
    // State to manage the visibility of CartPage and Dialog
    const [showCart, setShowCart] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    // Function to show CartPage
    const handleOpenCart = () => {
        setShowCart(true);
    };

    // Function to open the Terms and Conditions dialog
    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    // Function to close the Terms and Conditions dialog
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <>
            {showCart ? (
                // Render the CartPage component when showCart is true
                <CartPage onNext={() => console.log('Proceed to next step')} />
            ) : (
                // Render the PropertyValuation component when showCart is false
                <Box sx={{ backgroundColor: '#f5f5f5', padding: '40px 20px' }}>
                    <Typography variant="h4" align="center" gutterBottom sx={{ color: '#333' }}>
                        Know the Right Price of Your Property
                    </Typography>
                    <Typography variant="subtitle1" align="center" gutterBottom sx={{ color: '#555' }}>
                        Get the most accurate estimate of properties in any project, society, or locality
                    </Typography>

                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} md={8}>
                            <Paper
                                elevation={3}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    border: '1px solid #00bcd4',
                                    backgroundColor: '#e0f7fa',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', color: '#333' }}>
                                        <FaCheckCircle color="#00bcd4" style={{ marginRight: '8px' }} />
                                        Onsite Verification
                                    </Typography>
                                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', color: '#333' }}>
                                        <FaCheckCircle color="#00bcd4" style={{ marginRight: '8px' }} />
                                        100% unbiased valuation by govt. registered valuation partners
                                    </Typography>
                                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', color: '#333' }}>
                                        <FaCheckCircle color="#00bcd4" style={{ marginRight: '8px' }} />
                                        34 Checks by Expert Valuers
                                    </Typography>
                                    <Typography variant="caption" sx={{ marginTop: '10px', color: '#555' }}>
                                        * For detailed T&Cs <Link href="#" onClick={handleOpenDialog} sx={{ textDecoration: 'none', color: '#00bcd4', fontWeight: 'bold' }}>Click here</Link>
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                                    <Typography variant="body2" color="textSecondary">
                                        Insights derived from over 10 lakh listings
                                    </Typography>
                                    <Typography variant="h5" sx={{ color: '#333', textAlign: 'center' }}>
                                        ₹2399 <span style={{ textDecoration: 'line-through', color: '#999' }}>₹3000</span> <span style={{ color: 'green' }}>(20% Off)</span>
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#e53935',
                                            color: '#fff',
                                            '&:hover': { backgroundColor: '#d32f2f' },
                                            width: '100%',
                                        }}
                                        onClick={handleOpenCart} // Show CartPage on click
                                    >
                                        Buy Now
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>

                    {/* Dialog for Terms and Conditions */}
                    <Dialog open={openDialog} onClose={handleCloseDialog}>
                        <DialogTitle>Terms and Conditions</DialogTitle>
                        <DialogContent>
                            <Typography variant="body2">
                                These terms of use ("Terms") constitute a legally binding agreement between you and Reecocefe Infrastructure Pvt. Ltd. (the "Company/ We/ Reecocefe or Us") regarding the use of the web application/ website www.reecocefe.com (the "Site") or the domain thereof and any service offered or deemed to be offered by the Company including but not limited to delivery of content via the Site, any mobile or internet connected device or otherwise (the "Service").
                                <br /><br />
                                Your use of the Site and services and tools are governed by the following Terms & Conditions which are incorporated herein. By mere use of the Site, you shall be contracting with Reecocefe Infrastructure Pvt. Ltd., the owner of the Platform. These terms and conditions including the policies constitute your binding obligations, with Reecocefe. Therefore, it is imperative that before using the platform you acquaint yourself and understand the applicability and consequential application of these terms & conditions.
                                <br /><br />
                                When You use any of the services provided by Us through the Platform, including but not limited to, (e.g. Product Reviews, Seller Reviews), You will be subject to the rules, guidelines, policies, terms, and conditions applicable to such service, and they shall be deemed to be incorporated into these Terms and shall be considered as part and parcel of these Terms.
                                <br /><br />
                                Reecocefe may amend/modify these terms and conditions at any time, and such modifications shall be effective immediately upon posting of the modified terms and conditions on Reecocefe. You may review the modified terms and conditions periodically to be aware of such modifications and your continued access or use of Reecocefe, shall be deemed conclusive proof of your acceptance of these terms and conditions, as amended/modified from time to time. Reecocefe reserves the right to suspend the operations for support or technical upgradation, maintenance work, in order to update the content or for any other reason without intimating any user in advance.
                            </Typography>

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialog} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            )}
        </>
    );
};

export default PropertyValuation;
