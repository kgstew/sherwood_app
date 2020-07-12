import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    },
    error: {
        backgroundColor: theme.palette.error.xLight,
        color: theme.palette.error.dark
    },
    success: {
        backgroundColor: theme.palette.success.xLight,
        color: theme.palette.success.dark
    }
}));

function FormFeedback(props) {
    const classes = useStyles();
    return (
        <div
            className={clsx(
                classes.root,
                {
                    [classes.error]: props.error,
                    [classes.success]: props.success
                },
                props.className
            )}
        >
            <Typography color="inherit">{props.children}</Typography>
        </div>
    );
}

FormFeedback.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    error: PropTypes.bool,
    success: PropTypes.bool
};

export default FormFeedback;
