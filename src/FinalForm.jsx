import React from 'react';
import {CardMedia, Container, Grid, TextField, Typography} from "@mui/material";
import logo from "./assets/logo-hojas.png";
import "./css/main.css";

const FinalForm = () => {
    return (
        <Container maxWidth="xs">
            <Grid container rowSpacing={2} xs={12} spacing={2} textAlign="center">
                <Grid item xs={12} className="center">
                    <CardMedia
                        sx={{width: 60}}
                        image={logo}
                        title="leaves logo"
                        component="img"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" component="h1">El formulario de tus sueños</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth id="outlined-name" label="Nombre" variant="outlined"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth id="outlined-lastName" label="Apellido"
                               variant="outlined"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth id="outlined-phone" label="Telefono"
                               variant="outlined"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth id="outlined-email" label="Email" variant="outlined"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth id="outlined-adress" label="Dirección"
                               variant="outlined"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth id="outlined-message" label="Mensaje" multiline
                               rows={4}
                               variant="outlined"/>
                </Grid>

            </Grid>
        </Container>
    );
};

export default FinalForm;