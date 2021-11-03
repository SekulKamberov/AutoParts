import { useState, useEffect } from 'react';
import { Grid, makeStyles, InputAdornment } from '@material-ui/core';
import Form from "../../layouts/Form";
import { Input, Select } from "../../controls";
import { createEndpoint, ENDPIONTS } from "../../api";

const useStyles = makeStyles(theme => ({ 
    adornmentText: {
        '& .MuiTypography-root': {
            color: '#f3b33d',
            fontWeight: 'bolder',
            fontSize: '1.5em'
        }
    },
    submitButtonGroup: {
        backgroundColor: '#f3b33d',
        color: '#000',
        margin: theme.spacing(1),
        '& .MuiButton-label': {
            textTransform: 'none'
        },
        '&:hover': {
            backgroundColor: '#f3b33d',
        }
    }
}))

 export default function OrderForm(props) {
    const { values, setValues, errors, setErrors,
        handleInputChange, resetFormControls } = props;


        const classes = useStyles();
        const [customerList, setCustomerList] = useState([]);  
        
        useEffect(() => {
            createEndpoint(ENDPIONTS.CUSTOMER)
                .fetchAll()
                    .then(res => {
                        let customerList = res.data.map(item => ({
                            id: item.customerID,
                            title: item.customerName
                        }));
                        customerList = [{id: 0, title: 'Select'}].concat(customerList);
                        setCustomerList(customerList);
                    })
                    .catch(err => console.log(err))
        }, [])

        return (
            <>
                <Form>
                    <Grid container>
                        <Input 
                            disabled
                            label="Order Number"
                            name="orderNumber"
                            value={values.orderNumber}
                            InputProps={{
                                startAdornment: <InputAdornment       
                                    className={classes.adornmentText}    
                                    position="start">#</InputAdornment>    
                            }}
                        />
                        <Select                         
                            label="Customer"
                            name="customerId"
                            value={values.customerId}
                            onChange={handleInputChange}
                            options={customerList}     
                            error={errors.customerId}
                        />
                    </Grid>
                
                </Form>
            </>
        )
 }
