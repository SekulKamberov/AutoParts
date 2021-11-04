import React, { useState, useEffect } from 'react'
import { createEndpoint, ENDPIONTS } from "../../api";
import { List, ListItem, ListItemText, Paper, InputBase, IconButton, makeStyles, ListItemSecondaryAction } from '@material-ui/core';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(theme => ({
    searchPaper: {
        marginTop: theme.spacing(3),
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    searchInput: {
        marginLeft: theme.spacing(1.5),
        flex: 1,
    },
    listRoot: {
        marginTop: theme.spacing(1),
        maxHeight: 350,
        overflow: 'auto',
        '& li:hover': {
            cursor: 'pointer',
            backgroundColor: '#E3E3E3'
        },
        '& li:hover .MuiButtonBase-root': {
            display: 'block',
            color: '#000',
        },
        '& .MuiButtonBase-root': {
            display: 'none'
        },
        '& .MuiButtonBase-root:hover': {
            backgroundColor: 'transparent'
        }
    }
}))

export default function SearchItems(props) {

    const { values, setValues } = props;
    let orderedItems = values.orderDetails;

    const [items, setItems] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const classes = useStyles();

    useEffect(() => {
        createEndpoint(ENDPIONTS.AUTOPART).fetchAll()
            .then(res => {
                setItems(res.data);
                setSearchList(res.data);
            })
            .catch(err => console.log(err))

    }, [])

    useEffect(() => {
        let x = [...items];
        x = x.filter(y => {
            return y.autoPartName.toLowerCase().includes(searchKey.toLocaleLowerCase())
                && orderedItems.every(item => item.autoPartId != y.autoPartId)
        });
        setSearchList(x);
    }, [searchKey, orderedItems])

    const addItem = item => {
        let x = {
            orderMasterId: values.orderMasterId,
            orderDetailId: 0,
            autoPartId: item.autoPartId,
            quantity: 1,
            autoPartPrice: item.price,
            autoPartName: item.autoPartName
        }
        setValues({
            ...values,
            orderDetails: [...values.orderDetails, x]
        })
    }

    return (
        <>
            <Paper className={classes.searchPaper}>
                <InputBase
                    className={classes.searchInput}
                    value={searchKey}
                    onChange={e => setSearchKey(e.target.value)}
                    placeholder="Search parts" />
                <IconButton>
                    <SearchTwoToneIcon />
                </IconButton>
            </Paper>
            <List className={classes.listRoot}>
                {
                    searchList.map((item, idx) => (
                        <ListItem
                            key={idx}
                            onClick={e => addItem(item)}>
                            <ListItemText
                                primary={item.autoPartName}
                                secondary={'€' + item.price} />
                            <ListItemSecondaryAction>
                                <IconButton onClick={e => addItem(item)}>
                                    <PlusOneIcon />
                                    <ArrowForwardIosIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))
                }
            </List>
        </>
    )
}
