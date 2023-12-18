import React from 'react';
import {
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import projectsData from './data/ProjectData';
import {TopAppBar} from "../../common/TopAppBar";

const ProjectsPage: React.FC = () => {
    return (
        <>
            <TopAppBar />

            <Container maxWidth="lg" sx={{ paddingBottom: 4, borderRadius: '12px' }}>
                <Box textAlign="center" mb={4} />
                <Grid container spacing={4}>
                    {projectsData.map((project) => (
                        <Grid item key={project.id} xs={12} sm={6} md={4}>
                            <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
                                <Card raised sx={{ maxWidth: 345, mx: 'auto' }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={project.imageUrl}
                                        alt={project.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {project.simpleDescription}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default ProjectsPage;
