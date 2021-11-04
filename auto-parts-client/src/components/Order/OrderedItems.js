import React from 'react'
import { 
    List, ListItemText, Paper, ListItem, ListItemSecondaryAction, 
    IconButton, ButtonGroup, Button, makeStyles } from '@material-ui/core';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import { roundTo2DecimalPoint } from "../../utils";

const useStyles = makeStyles(theme => ({
    paperRoot: {
        margin: '15px 0px',
        '&:hover': {
            cursor: 'pointer'
        },
        '&:hover $deleteButton': {
            display: 'block'
        }
    },
    buttonGroup: {
        backgroundColor: '#E3E3E3',
        borderRadius: 8,
        '& .MuiButtonBase-root ': {
            border: 'none',
            minWidth: '25px',
            padding: '1px'
        },
        '& button:nth-child(2)': {
            fontSize: '1.2em',
            color: '#000'
        }
    },
    deleteButton: {
        display: 'none',
        '& .MuiButtonBase-root': {
            color: '#E81719'
        },
    },
    totalPerItem: {
        fontWeight: 'bolder',
        fontSize: '1.2em',
        margin: '0px 10px'
    }
}))

export default function OrderedItems(props) {
    const { values, setValues } = props;
    const classes = useStyles();

    let orderedItems = values.orderDetails;

    const removeItem = (index, id) => {
         let x = { ...values };
        x.orderDetails = x.orderDetails.filter((_, i) => i != index);
        if (id != 0)
            x.deletedOrderItemIds += id + ',';
        setValues({ ...x });
    }

    const updateQuantity = (idx, value) => {
        console.log(value);
        
        let x = { ...values };
        let item = x.orderDetails[idx];
        if (item.quantity + value > 0) {
            item.quantity += value;
            setValues({ ...x });
        }
    }

    return (
        <List>
            {orderedItems.length == 0 ?
                <ListItem>
                    <ListItemText
                        primary="Please select your auto parts"
                        primaryTypographyProps={{
                            style: {
                                textAlign: 'center',
                                fontStyle: 'italic'
                            }
                        }}
                    />
                </ListItem>
                : orderedItems.map((item, idx) => (
                    <Paper key={idx} className={classes.paperRoot}>
                        <ListItem>
                            <ListItemText
                                primary={item.autoPartName}
                                primaryTypographyProps={{
                                    component: 'h1',
                                    style: {
                                        fontWeight: '500',
                                        fontSize: '1.2em'
                                    }
                                }}
                                secondary={
                                    <>
                                        <ButtonGroup
                                            className={classes.buttonGroup}
                                            size="small">
                                            <Button
                                                onClick={e => updateQuantity(idx, -1)}
                                            >-</Button>
                                            <Button
                                                disabled
                                            >{item.quantity}</Button>
                                            <Button
                                                onClick={e => updateQuantity(idx, 1)}
                                            >+</Button>
                                        </ButtonGroup>
                                        <span className={classes.totalPerItem}>
                                            {'€' + roundTo2DecimalPoint(item.quantity * item.autoPartPrice)}
                                        </span>
                                    </>
                                }
                                secondaryTypographyProps={{
                                    component: 'div'
                                }}
                            />
                            <ListItemSecondaryAction
                                className={classes.deleteButton}>
                                <IconButton
                                    disableRipple
                                    onClick={e => removeItem(idx, item.orderDetailId)}
                                >
                                    <DeleteTwoToneIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Paper>
                ))
            }
        </List>
    )
}


