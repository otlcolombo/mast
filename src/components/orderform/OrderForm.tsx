import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import ContactForm from './ContactForm';
import PackageForm from './PackageForm';
import ShippingForm from './ShippingForm';


export default function OrderForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleStepClick = (step: number) => () => {
    setActiveStep(step);
  };

  const steps = [
    {
      label: 'Shipper Contact',
      description: <ContactForm handleBack={handleBack} handleNext={handleNext}></ContactForm>
    },
    {
      label: 'Receiver Contact',
      description: <ContactForm handleBack={handleBack} handleNext={handleNext}></ContactForm>
    },
    {
      label: 'Package Information',
      description: <PackageForm handleBack={handleBack} handleNext={handleNext}></PackageForm>
    },
    {
      label: 'Shipping Information',
      description: <ShippingForm handleBack={handleBack} handleNext={handleNext}></ShippingForm>
    }
  ];

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <h1>New Order</h1>
        </Grid>
      </Grid>
      <Box sx={{ maxWidth: 800 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                onClick={handleStepClick(index)}
                style={{ cursor: 'pointer' }}
              >
                {step.label}
              </StepLabel>
              <StepContent>
                {step.description}
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button>
              Finish
            </Button>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </>
  );
}