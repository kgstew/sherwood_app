import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialLink from '@material-ui/core/Link';
import Toolbar, { useStyles as toolbarStyles } from './Toolbar';
import { Link, Switch, Route } from 'react-router-dom';
import HouseRules from '../pages/HouseRules';
import Home from '../pages/Home';
import { AppBar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appBar: {
        color: theme.palette.common.white
    },
    content: {
        paddingTop: 70
    },
    title: {
        fontSize: 24
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
        justifyContent: 'space-between'
    },
    left: {
        flex: 1
    },
    leftLinkActive: {
        color: theme.palette.common.white
    },
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3)
    },
    linkSecondary: {
        color: theme.palette.secondary.main
    }
}));

const Navigation = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.appBar} elevation={0} position="fixed">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.left} />
                    <MaterialLink
                        variant="h6"
                        underline="none"
                        color="inherit"
                        className={classes.title}
                        to="/"
                        component={Link}
                    >
                        Sherwood
                    </MaterialLink>
                    <div className={classes.right}>
                        <MaterialLink
                            variant="h6"
                            underline="none"
                            color="inherit"
                            className={classes.title}
                            to="/house_rules"
                            component={Link}
                        >
                            House Rules
                        </MaterialLink>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.content}>
                <Switch>
                    <Route path="/house_rules">
                        <HouseRules />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <div className={classes.placeholder} />
            </div>
        </div>
    );
};

export default Navigation;
