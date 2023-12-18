import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {TextField, Button, Container, Typography, Box} from '@mui/material';
import {TopAppBar} from "../../common/TopAppBar";

const ContactSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required'),
});

const ContactPage: React.FC = () => {
    return (
        <>
            <TopAppBar/>
            <Container maxWidth="md" sx={{mt: 4, mb: 4}}>
                <Typography variant="h4" gutterBottom>Contact Me</Typography>
                <Box mb={4}>
                    {/* Your contact information */}
                    <Typography variant="body1">Email: nicholasriven717@gmail.com</Typography>
                    {/* Add more contact details as needed */}
                </Box>

                {/* Formik Form */}
                <Formik
                    initialValues={{name: '', email: '', message: ''}}
                    validationSchema={ContactSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        // Handle form submission
                        console.log(values);
                        setSubmitting(false);
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <Typography variant="h6" sx={{mt: 5, mb: -1}}>Name</Typography>
                            <Field name="name" as={TextField} label="Name" fullWidth margin="normal"/>
                            <ErrorMessage name="name">
                                {(msg) => <div style={{color: 'red'}}>{msg}</div>
                                }
                            </ErrorMessage>

                            <Typography variant="h6" sx={{mt: 5, mb: -1}}>Email Address</Typography>
                            <Field name="email" as={TextField} label="Email" type="email" fullWidth margin="normal"/>
                            <ErrorMessage name="email">
                                {(msg) => <div style={{color: 'red'}}>{msg}</div>
                                }
                            </ErrorMessage>
                            <Typography variant="h6" sx={{mt: 5, mb: -1}}>Message</Typography>
                            <Field name="message" as={TextField} label="Message" fullWidth multiline rows={4}
                                   margin="normal"/>
                            <ErrorMessage name="message">
                                {(msg) => <div style={{color: 'red'}}>{msg}</div>
                                }
                            </ErrorMessage>

                            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}
                                    sx={{mt: 2}}>
                                Send
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Container>
        </>
    );
};

export default ContactPage;
