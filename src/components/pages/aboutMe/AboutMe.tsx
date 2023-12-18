import React from 'react';
import {
    Typography,
    Container,
    Avatar,
    Paper,
    Box,
    Chip,
    Card,
    CardContent,
    Grid,
    CardMedia,
    Link
} from '@mui/material';

import {
    languages,
    databasesAndFramework,
    hardwareSkills,
    mathematicsSkills,
    certificateDetail,
    Introduction,
    greetingMsg
} from "./data/Contents";
import {TopAppBar} from "../../common/TopAppBar";


const AboutMe: React.FC = () => {
    return (
        <>
            <TopAppBar/>

            <Container maxWidth="md" sx={{marginTop: 8, paddingBottom: 4, padding: 4, borderRadius: '12px'}}>
                <Paper elevation={3} sx={{padding: 4, marginBottom: 4, background: '#fff'}}>
                    <Box display="flex" flexDirection="column" alignItems="center" marginBottom={4}>
                        <Avatar
                            src="/your-avatar.jpg"
                            sx={{width: 120, height: 120, marginBottom: 2}}
                            alt="Nicholas"
                        />
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            {greetingMsg}
                        </Typography>
                    </Box>
                    <Typography variant="subtitle1" color="textSecondary" paragraph>
                        <Introduction/>
                    </Typography>

                    <Typography variant="h6" color="textPrimary" gutterBottom sx={{mt: 4}}>
                        Programming Languages:
                    </Typography>
                    <Box sx={{mt: 2, display: 'flex', flexWrap: 'wrap', gap: 2}}>
                        {languages.map(lang => (
                            <Chip key={lang} label={lang}/>
                        ))}
                    </Box>

                    <Typography variant="h6" color="textPrimary" gutterBottom sx={{mt: 4}}>
                        Framework and DB skills:
                    </Typography>
                    <Box sx={{mt: 2, display: 'flex', flexWrap: 'wrap', gap: 2}}>
                        {databasesAndFramework.map(item => (
                            <Chip key={item} label={item}/>
                        ))}
                    </Box>

                    <Typography variant="h6" color="textPrimary" gutterBottom sx={{mt: 4}}>
                        My knowledge on Mathematics:
                    </Typography>
                    <Box sx={{mt: 2, display: 'flex', flexWrap: 'wrap', gap: 2}}>
                        {mathematicsSkills.map(item => (
                            <Chip key={item} label={item}/>
                        ))}
                    </Box>

                    <Typography variant="h6" color="textPrimary" gutterBottom sx={{mt: 4}}>
                        Hardware:
                    </Typography>
                    <Box sx={{mt: 2, display: 'flex', flexWrap: 'wrap', gap: 2}}>
                        {hardwareSkills.map(item => (
                            <Chip key={item} label={item}/>
                        ))}
                    </Box>
                </Paper>

                <Typography variant="h4" gutterBottom sx=
                    {{
                        mt: 3,
                        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}>
                    Certificate
                </Typography>

                <Grid container spacing={2}>
                    {certificateDetail.map((cert, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} sx={{marginBottom: 2, borderRadius: '12px'}}>
                            <Link href={`/images/Certificates/${cert.category}/${cert.id}.png`} target="_blank" rel="noreferrer"
                                  style={{textDecoration: 'none'}}>
                                <Card sx={{height: '100%'}}>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        width="100"
                                        image={cert.logoUrl}
                                        alt={cert.title}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            {cert.title}
                                        </Typography>
                                        <Typography variant="body2">
                                            Issued by: <a href={`${cert.institutionUrl}`}
                                                          target={"_blank"} rel="noreferrer">{cert.institution}</a>
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

export default AboutMe;
