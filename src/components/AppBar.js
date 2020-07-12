import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.common.white
    }
}));

function AppBar(props) {
    const classes = useStyles();
    return <MuiAppBar className={classes.root} elevation={0} position="static" {...props} />;
}

AppBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default AppBar;
