import React from 'react';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './theme';

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Home />
                </CssBaseline>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
