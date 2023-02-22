import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button, FormControl, FormLabel, Radio, RadioGroup } from '@mui/material';
import { StepProps } from './Props';

export default function ShippingForm(props: StepProps) {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel id="demo-radio-buttons-group-label">Bill Shipping Charges</FormLabel>
            <RadioGroup
              aria-label="Bill Shipping Charges"
              name="billShippingCharges"
              row
            >
              <FormControlLabel
                value="Shipper"
                control={<Radio />}
                label="Shipper"
              />
              <FormControlLabel
                value="Receiver"
                control={<Radio />}
                label="Receiver"
              />
              <FormControlLabel
                value="Third Party"
                control={<Radio />}
                label="Third Party"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel id="demo-radio-buttons-group-label">Bill Duty & Taxes</FormLabel>
            <RadioGroup
              aria-label="Bill Duty & Taxes<"
              name="billDutyTaxes"
              row
            >
              <FormControlLabel
                value="shipper"
                control={<Radio />}
                label="Shipper"
              />
              <FormControlLabel
                value="receiver"
                control={<Radio />}
                label="Receiver"
              />
              <FormControlLabel
                value="third_party"
                control={<Radio />}
                label="Third Party"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel id="demo-radio-buttons-group-label">Service Level</FormLabel>
            <RadioGroup
              aria-label="Service Level"
              name="billDutyTaxes"
              row
            >
              <FormControlLabel
                value="premier"
                control={<Radio />}
                label="Premier Service"
              />
              <FormControlLabel
                value="economy"
                control={<Radio />}
                label="Economy Service"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="specialInstructions"
            name="specialInstructions"
            label="Special Instructions"
            multiline
            rows={2}
            maxRows={4}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="references"
            name="references"
            label="References"
            multiline
            rows={2}
            maxRows={4}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ mb: 2 }}>
            <div>
              <Button
                variant="contained"
                onClick={props.handleNext}
                sx={{ mt: 1, mr: 1 }}
              >
                Continue
              </Button>
              <Button
                onClick={props.handleBack}
                sx={{ mt: 1, mr: 1 }}
              >
                Back
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
