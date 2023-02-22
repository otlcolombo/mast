import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button, FormControl, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';
import { StepProps } from './Props';

export default function PackageForm(props: StepProps) {


    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="productDescription"
                        name="productDescription"
                        label="Description of goods"
                        multiline
                        rows={2}
                        maxRows={4}
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography gutterBottom>Product</Typography>
                    <FormControl component="fieldset">
                        <RadioGroup
                            aria-label="product"
                            name="product"
                            row
                        >
                            <FormControlLabel
                                value="document"
                                control={<Radio />}
                                label="Document"
                            />
                            <FormControlLabel
                                value="non-document"
                                control={<Radio />}
                                label="Non-Document"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="actualWeight"
                        name="actualWeight"
                        label="Actual Weight"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="noOfPackages"
                        name="noOfPackages"
                        label="No. of Packages"
                        fullWidth
                        autoComplete="1"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField
                                id="length"
                                name="length"
                                label="Length"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="width"
                                name="width"
                                label="Width"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="height"
                                name="height"
                                label="Height"
                                variant="standard"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="customsValue"
                        name="customsValue"
                        label="Customs Value"
                        fullWidth
                        autoComplete="0"
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

        </React.Fragment >
    );
}
