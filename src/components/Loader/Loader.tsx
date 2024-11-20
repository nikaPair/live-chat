import { Container, Grid } from '@mui/material';
import React from 'react';

const Loader = () => {
    return (
        <Container>
            <Grid container>
                <Grid
                    container
                    sx={{ height: window.innerHeight - 50, justifyContent: 'center', alignItems: 'center' }}
                >
                    <div className='lds-ripple'>
                        <div></div>
                        <div></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;
