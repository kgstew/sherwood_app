import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './theme';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Navigation />
                </CssBaseline>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
