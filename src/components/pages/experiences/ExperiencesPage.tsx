import React from 'react';
import {Container, Typography, Paper, Box, Chip, Grid, Stack, Fade} from '@mui/material';
import {experiences} from "./data/ExperienceData";
import {TopAppBar} from "../../common/TopAppBar";
import {Link} from "react-router-dom";

const ExperiencePage: React.FC = () => {
    return (
        <>
            <TopAppBar/>
            <Container maxWidth="md" sx={{mt: 4, mb: 4}}>
                <Grid container direction="column" spacing={2}>
                    {experiences.map((exp) => (
                        <Grid item key={exp.id} xs={12}>
                            <Fade in={true} timeout={exp.id * 3000} >
                                <Paper elevation={3} sx={{p: 3, my: 2}}>
                                    <Grid container>

                                        {/* Working Period */}
                                        <Grid item sm={3}>
                                            <Typography variant="body1" color="grey" gutterBottom>
                                                {exp.period}
                                            </Typography>
                                        </Grid>
                                        {/* Working Period */}

                                        <Grid item xs={12} sm={9}>
                                            {/* Work Title */}
                                            <Typography variant="h5">
                                                {exp.title}
                                            </Typography>
                                            {/* Work Title */}

                                            {/* Company Name */}
                                            <Link to={exp.companyUrl} style={{textDecoration: 'none'}}>
                                                <Typography variant="body1" color={'primary'} sx={{mb: 2}} gutterBottom>
                                                    {exp.company}
                                                </Typography>
                                            </Link>
                                            {/* Company Name */}

                                            {/* Job duties */}
                                            {exp.details.map((detail) => (
                                                <Stack direction="row" gap={1}>
                                                    <Typography variant="body2" color="black">
                                                        &bull;
                                                    </Typography>
                                                    <Typography variant="body1" gutterBottom>
                                                        {detail}
                                                    </Typography>
                                                </Stack>
                                            ))}
                                            {/* Job duties */}

                                            {/* Skill acquired */}
                                            <Box sx={{mt: 2, display: 'flex', flexWrap: 'wrap', gap: 2}}>
                                                {exp.skills.map((skill) => (
                                                    <Chip key={skill} label={skill}
                                                          sx={{backgroundColor: '#e0e0e0', color: 'black'}}/>
                                                ))}
                                            </Box>
                                            {/* Skill acquired */}
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Fade>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default ExperiencePage;
