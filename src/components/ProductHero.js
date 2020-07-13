import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from './Button';
import Typography from './Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage = 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center'
    },
    button: {
        minWidth: 200
    },
    h5: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10)
        }
    },
    more: {
        marginTop: theme.spacing(2)
    }
}));

function ProductHero() {
    const classes = useStyles();

    return (
        <ProductHeroLayout backgroundClassName={classes.background}>
            {/* Increase the network loading priority of the background image. */}
            <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
            <Typography color="inherit" align="center" variant="h2" marked="center">
                Upgrade your Sundays
            </Typography>
            <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                className={classes.button}
                component="a"
                href="/premium-themes/onepirate/sign-up/"
            >
                Register
            </Button>
            <Typography variant="body2" color="inherit" className={classes.more}>
                Discover the experience
            </Typography>
        </ProductHeroLayout>
    );
}

export default ProductHero;
