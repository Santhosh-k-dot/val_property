import React, { useState } from 'react';
import { Box, Typography, Button, Input, TextField, Paper, Grid, Snackbar, Alert } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

const DocumentsPage = ({ onNext }) => {
  const [files, setFiles] = useState({
    indexCopy: null,
    landRecord: null,
    titleDeed: null,
    propertyTaxReceipts: null,
    saleDeed: null,
    occupancyCertificate: null,
    anyOtherProof: null,
  });

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    city: '',
  });

  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [type]: file,
      }));
      setError(''); // Clear any previous error
    } else {
      setError('Please upload a PDF file.');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateFormData = () => {
    const { name, phoneNumber, city } = formData;
    const phoneRegex = /^\d{10}$/;

    if (!name || !phoneNumber || !city) {
      return 'All fields are required.';
    }
    if (!phoneRegex.test(phoneNumber)) {
      return 'Phone number must be a valid 10-digit number.';
    }
    return null;
  };

  const handleUpload = async () => {
    const formError = validateFormData();
    if (formError) {
      setError(formError);
      return;
    }

    if (Object.values(files).every((file) => file !== null)) {
      setUploading(true);
      const formDataObj = new FormData();
      Object.entries(files).forEach(([key, file]) => {
        formDataObj.append(key, file);
      });

      // Adding text inputs to formData
      formDataObj.append('name', formData.name);
      formDataObj.append('phoneNumber', formData.phoneNumber);
      formDataObj.append('city', formData.city);

      try {
        const response = await fetch('http://localhost:8080/api/files/upload', {
          method: 'POST',
          body: formDataObj,
        });

        if (response.ok) {
          setSuccess('Files uploaded successfully!');
          onNext(); // Proceed to the next step or close the dialog
        } else {
          setError('Upload failed. Please try again.');
        }
      } catch (error) {
        setError('Upload failed. Please check your network connection.');
      } finally {
        setUploading(false);
      }
    } else {
      setError('Please upload all required documents.');
    }
  };

  return (
    <Box
      sx={{
        padding: 2,
        background: 'linear-gradient(135deg, #ffffff, #e0f7fa)',
        height: '85vh', // Reduced height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2, color: '#0288d1' }}>
        Upload Property Valuation Documents
      </Typography>
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          background: 'linear-gradient(135deg, #ffffff, #b3e5fc)',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '70vh', // Set max height for the Paper component
          overflowY: 'auto', // Enable scrolling if content overflows
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Grid container spacing={3}>
          {[{
            label: 'Index Copy',
            key: 'indexCopy',
          }, {
            label: 'Land Record',
            key: 'landRecord',
          }, {
            label: 'Title Deed',
            key: 'titleDeed',
          }, {
            label: 'Property Tax Receipts',
            key: 'propertyTaxReceipts',
          }, {
            label: 'Sale Deed',
            key: 'saleDeed',
          }, {
            label: 'Occupancy Certificate',
            key: 'occupancyCertificate',
          }, {
            label: 'Any Other Proof',
            key: 'anyOtherProof',
          }].map(({ label, key }) => (
            <Grid item xs={12} sm={6} key={key}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#0288d1' }}>
                {label}
              </Typography>
              <Input
                type="file"
                accept=".pdf"
                onChange={(event) => handleFileChange(event, key)}
                sx={{ marginTop: 1, width: '100%' }}
                inputProps={{ 'aria-label': label }}
              />
            </Grid>
          ))}

          {/* Text Inputs for Name, Phone Number, and City */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2 }}
              inputProps={{ sx: { fontSize: '0.875rem', height: '1.5rem' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2 }}
              inputProps={{ sx: { fontSize: '0.875rem', height: '1.5rem' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2 }}
              inputProps={{ sx: { fontSize: '0.875rem', height: '1.5rem' } }}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            disabled={uploading}
            startIcon={<CloudUpload />}
          >
            {uploading ? 'Uploading...' : 'Upload Documents'}
          </Button>
        </Box>
      </Paper>

      {/* Snackbar for error and success messages */}
      <Snackbar open={Boolean(error)} autoHideDuration={6000} onClose={() => setError('')}>
        <Alert onClose={() => setError('')} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>

      <Snackbar open={Boolean(success)} autoHideDuration={6000} onClose={() => setSuccess('')}>
        <Alert onClose={() => setSuccess('')} severity="success" sx={{ width: '100%' }}>
          {success}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default DocumentsPage;
