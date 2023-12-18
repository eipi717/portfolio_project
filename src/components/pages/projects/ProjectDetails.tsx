import React from 'react';
import {useParams} from 'react-router-dom';
import {Container, Typography, Box, Paper, Button, ListItem} from '@mui/material';
import projectsData from './data/ProjectData';
import {TopAppBar} from "../../common/TopAppBar";
import {Project} from "./model/Project";

const ProjectDetail: React.FC = () => {
    let {projectId} = useParams();
    const project: Project | undefined = projectsData.find(p => p.id.toString() === projectId);

    if (!project) {
        return (
            <>
                <TopAppBar/>
                <Container>
                    <Typography variant="h5">Project not found</Typography>
                </Container>
            </>
        );
    }

    return (
        <>
            <TopAppBar/>
            <Container maxWidth="md" sx={{marginTop: 5, paddingBottom: 4, borderRadius: '12px'}}>
                <Paper elevation={3} sx={{padding: 4, marginBottom: 4, background: '#fff'}}>

                    {/* Project Title */}
                    <Typography variant="h3" component="h1" gutterBottom>
                        {project.title}
                    </Typography>
                    {/* Project Title */}

                    {/* Project Image */}
                    {project.imageUrl.length !== 0 ? (
                    <Box>
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            style={{maxWidth: '100%', height: 'auto'}}
                        />
                    </Box>
                        ) : (
                        <Box />
                    )}
                    {/* Project Image */}

                    <Typography variant="h5" component="h2" sx={{mt: 2}}>
                        About the project
                    </Typography>

                    {/* Project Description */}
                    <Typography variant="body1" paragraph>
                        {project.detailedDescription.map((item) => (
                            <ListItem key={item} sx={{mt: 2}} style={{display: 'list-item'}}>
                                {item}
                            </ListItem>
                        ))}
                    </Typography>
                    {/* Project Description */}

                    {/* Project Demo */}
                    <Button variant="contained" color="primary" disabled={!project.isLiveAvailable} href={project.liveUrl} sx={{marginRight: 1}}>
                        View Live
                    </Button>
                    {/* Project Demo */}

                    {/* Project Code */}
                    <Button variant="outlined" color="primary" disabled={!project.isCodeAvailable} href={project.repoUrl}>
                        View Code
                    </Button>
                    {/* Project Code */}
                </Paper>

                <Box textAlign={'center'} sx={{mt: 5}}>
                    <Button variant="contained" color="primary" href={'/projects'} sx={{marginRight: 1}}>
                        Back
                    </Button>
                </Box>
            </Container>

        </>
    );
};

export default ProjectDetail;
