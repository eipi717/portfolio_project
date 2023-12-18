import React from 'react';
import {AppBar, Typography, IconButton, Avatar, Stack, Grid} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';

export const TopAppBar: React.FC = () => {
    return (
        <AppBar position="static" color="default" sx={{background: '#f5f5f5', color: 'black', py: 1}}>
            <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} md={4}>
                <Stack direction="row" alignItems="center" spacing={2} sx={{flexGrow: 1}}>
                    <Avatar src="/path-to-your-avatar.jpg" alt="Nicholas" style={{marginLeft: 8}}/>
                    <Typography variant="h6" color="inherit">Nicholas</Typography>
                    <Stack direction="row" spacing={1} sx={{ml: 2}}>
                        {/* GitHub Profile*/}
                        <IconButton color="inherit" sx={{color: 'black'}} href="https://github.com/eipi717"
                                    target="_blank">
                            <GitHubIcon/>
                        </IconButton>
                        {/* GitHub Profile*/}

                        {/* LinkedIn Profile*/}
                        <IconButton color="inherit" sx={{color: 'blue'}} href="https://www.linkedin.com/in/chun-him-ho-954053216/"
                                    target="_blank">
                            <LinkedInIcon/>
                        </IconButton>
                        {/* LinkedIn Profile*/}
                    </Stack>
                </Stack>
                </Grid>

                {/* Top Right Nav Bar*/}
                <Grid item xs={12} md={8}>
                <Stack direction="row" alignItems="center" spacing={1} justifyContent={"flex-end"}>

                    <IconButton color="inherit" href="/portfolio_project#about">
                        <EmojiPeopleIcon sx={{mr: 0.5}}/>
                        <Typography variant={'subtitle1'}>About</Typography>
                    </IconButton>

                    <IconButton color="inherit" href="/portfolio_project#experiences">
                        <WorkHistoryIcon sx={{mr: 0.5}}/>
                        <Typography variant={'subtitle1'}>Past Exp</Typography>
                    </IconButton>

                    <IconButton color="inherit" href="/portfolio_project#projects">
                        <WorkIcon sx={{mr: 0.5}}/>
                        <Typography variant={'subtitle1'}>Projects</Typography>
                    </IconButton>

                    <IconButton color="inherit" href="/portfolio_project#contact">
                        <EmailIcon sx={{mr: 0.5}}/>
                        <Typography variant={'subtitle1'}>Contact</Typography>
                    </IconButton>
                </Stack>
                </Grid>
                {/* Top Right Nav Bar*/}
            </Grid>
        </AppBar>
    );
};