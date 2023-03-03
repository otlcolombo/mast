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
import { Contact, Order } from './Props';
import OrderDetails from './OrderDetails';


const defaultOrder = {
  shipper: {
    companyName: '',
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    tel: '',
    email: '',
  },
  receiver: {
    companyName: '',
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    tel: '',
    email: '',
  },
  productDescription: '',
  product: '',
  actualWeight: '',
  noOfPackages: '',
  length: '',
  width: '',
  height: '',
  customsValue: '',
  billShippingCharges: '',
  billDutyTaxes: '',
  serviceLevel: '',
  specialInstructions: '',
  references: ''
};

export default function OrderForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [order, updateOrder] = React.useState(defaultOrder);

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

  const handleSetOrder = (order: Order) => {
    updateOrder(order);
  };

  const handleUpdateSender = (contact: Contact) => {
    updateOrder((prevOrder) => ({ ...prevOrder, shipper: contact }));
  }

  const handleUpdateReceiver = (contact: Contact) => {
    updateOrder((prevOrder) => ({ ...prevOrder, receiver: contact }));
  }

  const steps = [
    {
      label: 'Shipper Contact',
    },
    {
      label: 'Receiver Contact',
    },
    {
      label: 'Package Information',
    },
    {
      label: 'Shipping Information',
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
        {activeStep !== steps.length &&
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  onClick={handleStepClick(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <b>{step.label}</b>
                </StepLabel>
                <StepContent>
                  {activeStep === 0 && <ContactForm handleBack={handleBack} handleNext={handleNext} setContact={handleUpdateSender} contact={order.shipper}></ContactForm>}
                  {activeStep === 1 && <ContactForm handleBack={handleBack} handleNext={handleNext} setContact={handleUpdateReceiver} contact={order.receiver}></ContactForm>}
                  {activeStep === 2 && <PackageForm handleBack={handleBack} handleNext={handleNext} setOrder={handleSetOrder} order={order}></PackageForm>}
                  {activeStep === 3 && <ShippingForm handleBack={handleBack} handleNext={handleNext} setOrder={handleSetOrder} order={order}></ShippingForm>}
                </StepContent>
              </Step>
            ))}
          </Stepper>
        }
        {activeStep === steps.length && (
          <>
            <OrderDetails order={order} />
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>All steps completed - please verify the details - Click finish to submit the order</Typography>
              <Button
                variant="contained"
              >
                Finish
              </Button>
              <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                Back
              </Button>
            </Paper>
          </>
        )}
      </Box>
    </>
  );
}