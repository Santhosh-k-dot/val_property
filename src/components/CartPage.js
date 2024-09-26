import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Button, TextField, Divider, Dialog, IconButton } from '@mui/material';
import { MdRemoveShoppingCart, MdInfo } from 'react-icons/md';
import CartNavSteps from './CartNavSteps'; // Ensure the path is correct for your project
import PaymentModal from './PaymentModal'; // Ensure the path is correct for your project
import DocumentsPage from './DocumentsPage'; // Ensure the path is correct for your project

const CartPage = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [openPaymentModal, setOpenPaymentModal] = useState(false);
    const [openDocumentsDialog, setOpenDocumentsDialog] = useState(false);
    const [openTermsDialog, setOpenTermsDialog] = useState(false);

    const handlePlaceOrderClick = () => {
        setOpenPaymentModal(true);
    };

    const handleClosePaymentModal = () => {
        setOpenPaymentModal(false);
    };

    const handlePaymentSuccess = () => {
        handleClosePaymentModal();
        setOpenDocumentsDialog(true);
    };

    const handleCloseDocumentsDialog = () => {
        setOpenDocumentsDialog(false);
    };

    const handleOpenTermsDialog = () => {
        setOpenTermsDialog(true);
    };

    const handleCloseTermsDialog = () => {
        setOpenTermsDialog(false);
    };

    return (
        <Box sx={{ padding: 4, background: 'linear-gradient(135deg, #ffffff, #e0f7fa)', minHeight: '100vh' }}>
            <CartNavSteps currentStep={currentStep} setStep={setCurrentStep} />

            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2, color: '#0288d1' }}>
                Your Cart - 1 Package
            </Typography>

            {currentStep === 0 && (
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2, background: 'linear-gradient(135deg, #ffffff, #b3e5fc)' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <img
                                        src="https://img.freepik.com/free-vector/character-illustration-people-selling-house_53876-64663.jpg"
                                        alt="Basic Property Valuation"
                                        style={{ width: '100%', borderRadius: '8px' }}
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0277bd' }}>
                                        Basic Property Valuation
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ textDecoration: 'line-through', color: '#9e9e9e' }}>
                                        ₹3000
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: '#0288d1', display: 'inline', marginLeft: 1 }}>
                                        20% off
                                    </Typography>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#01579b' }}>
                                        ₹2399
                                    </Typography>
                                    <Typography variant="body2" sx={{ marginTop: 1, color: '#01579b' }}>
                                        100% unbiased valuation by govt. registered valuation partners
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#01579b' }}>
                                        34 point checklist to ascertain the correct property value
                                    </Typography>

                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ padding: 2, background: 'linear-gradient(135deg, #ffffff, #b3e5fc)' }}>
                            <Typography variant="subtitle1" sx={{ color: '#0288d1' }}>Sub-Total: ₹3000</Typography>
                            <Typography variant="subtitle1" sx={{ color: '#0277bd' }}>
                                Discount: - ₹601
                            </Typography>
                            <Typography variant="subtitle1" sx={{ color: '#01579b' }}>GST (Incl.): ₹366</Typography>
                            <Divider sx={{ marginY: 1, borderColor: '#81d4fa' }} />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0288d1' }}>
                                Total Amount: ₹2399
                            </Typography>
                            <TextField
                                variant="outlined"
                                label="Apply coupon code"
                                fullWidth
                                sx={{ marginTop: 2, marginBottom: 1 }}
                            />
                            <Button variant="contained" sx={{ backgroundColor: '#0288d1', color: '#fff' }} fullWidth>
                                Apply
                            </Button>
                            <Typography variant="body2" sx={{ marginTop: 2, textAlign: 'center', color: '#0277bd' }}>
                                We support 100% secure payments
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            )}

            {currentStep === 0 && (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0288d1' }}>
                        Total Amount: ₹2399
                    </Typography>
                    <Button variant="contained" sx={{ backgroundColor: '#0288d1', color: '#fff' }} size="large" onClick={handlePlaceOrderClick}>
                        Make Payment
                    </Button>
                </Box>
            )}

            <PaymentModal open={openPaymentModal} onClose={handleClosePaymentModal} onPaymentSuccess={handlePaymentSuccess} />

            <Dialog open={openDocumentsDialog} onClose={handleCloseDocumentsDialog} maxWidth="sm" fullWidth>
                <DocumentsPage onNext={handleCloseDocumentsDialog} />
            </Dialog>

            {/* Terms and Conditions Dialog */}
            <Dialog open={openTermsDialog} onClose={handleCloseTermsDialog} maxWidth="md" fullWidth>
                <Box sx={{ padding: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2, color: '#0288d1' }}>
                        Terms and Conditions
                    </Typography>
                    <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                        These terms of use ("Terms") constitute a legally binding agreement between you and Reecocefe Realty Services Limited (the "Company/ We/ Reecocefe or Us") regarding the use of the web application/ website www.Reecocefe.com (the "Site") or the domain thereof and any service offered or deemed to be offered by the Company including but not limited to delivery of content via the Site, any mobile or internet connected device or otherwise (the "the Service").

                        Your use of the Site and services and tools are governed by the following Terms & Conditions which are incorporated herein. By mere use of the Site, you shall be contracting with Reecocefe Realty Services Limited, the owner of the Platform. These terms and conditions including the policies constitute your binding obligations, with Magicbricks. Therefore, it is imperative that before using the platform you acquaint yourself and understand the applicability and consequential application of these terms & conditions.

                        When You use any of the services provided by Us through the Platform, including but not limited to, (e.g. Product Reviews, Seller Reviews), You will be subject to the rules, guidelines, policies, terms, and conditions applicable to such service, and they shall be deemed to be incorporated into these Terms and shall be considered as part and parcel of these Terms.

                        Reecocefe may amend/modify these terms and conditions at any time, and such modifications shall be effective immediately upon posting of the modified terms and conditions on Reecocefe. You may review the modified terms and conditions periodically to be aware of such modifications and your continued access or use of Reecocefe, shall be deemed conclusive proof of your acceptance of these terms and conditions, as amended/modified from time to time. Reecocefe reserves the right to suspend the operations for support or technical upgradation, maintenance work, in order to update the content or for any other reason without intimating any user in advance.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                        <Button onClick={handleCloseTermsDialog} variant="contained" color="primary">
                            Close
                        </Button>
                    </Box>
                </Box>
            </Dialog>

            {/* Terms and Conditions Button */}
            <Box sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                <IconButton color="primary" onClick={handleOpenTermsDialog}>
                    <MdInfo size={24} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default CartPage;
