// src/components/PaymentModal.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { FaCreditCard, FaPaypal } from 'react-icons/fa';
import DocumentsPage from './DocumentsPage'; // Ensure the path is correct for your project

const PaymentModal = ({ open, onClose, onPaymentSuccess }) => {
  const [showDocumentsPage, setShowDocumentsPage] = useState(false);

  const handlePayNowClick = () => {
    // Simulate payment success
    onPaymentSuccess();
    setShowDocumentsPage(true);
  };

  const handleCloseDocumentsPage = () => {
    setShowDocumentsPage(false);
    onClose();
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>Payment Details</DialogTitle>
        <DialogContent>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Choose Payment Method
          </Typography>
          <Box sx={{ marginBottom: 2 }}>
            <Button variant="outlined" startIcon={<FaCreditCard />} fullWidth sx={{ marginBottom: 1 }}>
              Credit/Debit Card
            </Button>
            <Button variant="outlined" startIcon={<FaPaypal />} fullWidth>
              PayPal
            </Button>
          </Box>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Enter Payment Information
          </Typography>
          <TextField
            label="Card Number"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Expiry Date"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="CVV"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handlePayNowClick}>
            Pay Now
          </Button>
        </DialogActions>
      </Dialog>
      {/* Render DocumentsPage if needed */}
      {showDocumentsPage && (
        <DocumentsPage onNext={handleCloseDocumentsPage} />
      )}
    </>
  );
};

export default PaymentModal;
