import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Grid } from '@material-ui/core';
import OrderForm from './OrderForm';
import SearchItems from './SearchItems';
import OrderedItems from './OrderedItems';

const generateOrderNumber = () => Math.floor(100000 + Math.random() * 900000).toString();

const getFreshModelObject = () => ({
    orderMasterId: 0,
    orderNumber: generateOrderNumber(),
    customerId: 0,
    pMethod: 'none',
    gTotal: 0,
    deletedOrderItemIds: '',
    orderDetails: []
})

export default function Order() {

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,  
        resetFormControls
    } = useForm(getFreshModelObject); 

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <OrderForm
                        {...{
                            values,
                            setValues,
                            errors,
                            setErrors,
                            handleInputChange,
                            resetFormControls
                        }}
                    />
                </Grid>
            <Grid item xs={6}>
                <SearchItems
                    {...{
                        values,
                        setValues
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <OrderedItems
                    {...{
                        values,
                        setValues
                    }}
                />
            </Grid>
        </Grid>
    )
}
