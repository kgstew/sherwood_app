import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

export const useStyles = makeStyles((theme) => ({
    root: {
        height: 64,
        [theme.breakpoints.up('sm')]: {
            height: 70
        }
    }
}));

const CustomToolbar = (props) => {
    const classes = useStyles();

    return <Toolbar classes={classes} {...props} />;
};

export default CustomToolbar;
