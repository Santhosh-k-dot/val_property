// src/components/NavSteps.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const CartNavSteps = ({ currentStep, setStep }) => {
  const steps = ['CART', 'PAYMENT', 'Document'];

  const handleClick = (index) => {
    setStep(index);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 2 }}>
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <Typography
            variant="h6"
            onClick={() => handleClick(index)}
            sx={{
              cursor: 'pointer',
              color: currentStep === index ? 'green' : 'gray',
              fontWeight: currentStep === index ? 'bold' : 'normal',
            }}
          >
            {step}
          </Typography>
          {index < steps.length - 1 && (
            <Box sx={{ width: '50px', height: '1px', backgroundColor: 'gray', marginX: 1 }} />
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default CartNavSteps;
