import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Contact, Order } from './Props';

interface OrderDetailsProps {
    order: Order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>
                    Shipper Contact
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {order.shipper.companyName}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {order.shipper.firstName} {order.shipper.lastName}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {order.shipper.address1}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {order.shipper.address2}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {order.shipper.city}, {order.shipper.state} {order.shipper.zip}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {order.shipper.country}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {order.shipper.tel}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {order.shipper.email}
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>
                    Receiver Contact
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {order.receiver.companyName}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {order.receiver.firstName} {order.receiver.lastName}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {order.receiver.address1}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {order.receiver.address2}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {order.receiver.city}, {order.receiver.state} {order.receiver.zip}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {order.receiver.country}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {order.receiver.tel}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {order.receiver.email}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                    Product Details
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Product Description: {order.productDescription}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Product: {order.product}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Actual Weight (kg): {order.actualWeight}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Number of Packages: {order.noOfPackages}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Dimentions (cm): {order.length} x {order.width} x {order.height}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Customs Value: {order.customsValue}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                    Shipping Details
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Bill Shipping Charges: {order.billShippingCharges}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Bill Duty & Taxes: {order.billDutyTaxes}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Service Level: {order.serviceLevel}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Special Instructions: {order.specialInstructions}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    References: {order.references}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default OrderDetails;
