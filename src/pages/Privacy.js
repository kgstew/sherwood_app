// --- Post bootstrap -----
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '../components/Typography';
import AppAppBar from '../components/AppAppBar';
import AppFooter from '../components/AppFooter';

function Privacy() {
    return (
        <React.Fragment>
            <AppAppBar />
            <Container>
                <Box mt={7} mb={12}>
                    <Typography variant="h3" gutterBottom marked="center" align="center">
                        Privacy
                    </Typography>
                </Box>
            </Container>
            <AppFooter />
        </React.Fragment>
    );
}

export default Privacy;
