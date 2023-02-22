import React, { useState } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { css } from '@emotion/react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Button,
    Grid
} from '@mui/material';

const tableStyles = css`
  min-width: 650px;
`;

function Orders() {
    const [orders, setOrders] = useState([
        { id: 1, customer: 'John Doe', total: 100 },
        { id: 2, customer: 'Jane Smith', total: 50 },
        { id: 3, customer: 'Bob Johnson', total: 75 }
    ]);

    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        const filteredOrders = orders.filter(order =>
            order.customer.toLowerCase().includes(searchText.toLowerCase()) ||
            order.id.toString().toLowerCase().includes(searchText.toLowerCase())
        );
        setOrders(filteredOrders);
    };

    const handleKeyDown = (e: { keyCode: number; }) => {
        if (e.keyCode === 13) {
            handleSearch();
        }
    };

    const LinkBehavior = React.forwardRef((props, ref) => (
        <RouterLink to="/orders/new" {...props} role={undefined} />
    ));


    return (
        <div>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={6}>
                    <h1>Orders</h1>
                </Grid>
                <Grid item xs={6} textAlign="right">
                    <Button variant="contained" color="primary" component={LinkBehavior}>
                        New Order
                    </Button>
                </Grid>
            </Grid>
            <TextField
                label="Search by Customer Name or Order ID"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>
                Search
            </Button>
            <TableContainer component={Paper}>
                <Table aria-label="order table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Order ID</TableCell>
                            <TableCell>Customer Name</TableCell>
                            <TableCell>Total Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell component="th" scope="row">
                                    {order.id}
                                </TableCell>
                                <TableCell>{order.customer}</TableCell>
                                <TableCell>${order.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Orders;