import React from 'react'
import { useForm } from '../../hooks/useForm';
import { Grid } from '@material-ui/core';

const getFreshModelObject = () => ({
    orderMasterId: 0,
    orderNumber: 0,
    customerId: 0,
    pMethod: 0,
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
        <Grid>
            <Grid>
                
            </Grid>
        </Grid>

    )
}
