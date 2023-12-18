import React from 'react';
import {
    Typography,
    Container,
    Box,
    Button,
    Grid,
} from '@mui/material';
import {TopAppBar} from "../../common/TopAppBar";

const HomePage: React.FC = () => {
    return (
        <>
            <TopAppBar />

            <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
                <Box textAlign="center" mb={4}>
                    <Typography variant="h2" component="h1" gutterBottom>
                        Welcome to My Portfolio
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" paragraph>
                        Discover my projects, learn about my skills, and get in touch!
                    </Typography>
                    <Button variant="contained" color="primary" href="/projects">
                        View My Work
                    </Button>
                </Box>
                {/* Additional content can be added here, such as a brief intro or a featured project */}
                <Grid container spacing={4}>
                    {/* Here you can map through some featured projects or any other content you wish to highlight on your home page */}
                </Grid>
            </Container>
        </>
    );
};

export default HomePage;
