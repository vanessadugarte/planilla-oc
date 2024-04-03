import React from 'react';
import {CardMedia, Container, Grid, TextField, Typography} from "@mui/material";
import logo from "./assets/logo-hojas.png";
import './css/main.css';
import Grid2 from "@mui/material/Unstable_Grid2";

const TrueForm = () => {
    return (
        <Container maxWidth="xs">


            <Grid className="titleContainer" xs={12}>
                <Grid>
                    <CardMedia
                        sx={{width: 60}}
                        image={logo}
                        title="leaves logo"
                        component="img"
                    />
                </Grid>
                <Grid xs={12}>
                    <Typography variant="h5" component="h1">El formulario de tus sueños</Typography>
                </Grid>
            </Grid>
            <Grid container xs={12} spacing={2} rowSpacing={2} sx={{mt: "2%"}}>
                <Grid item xs={12} md={6}>
                    <TextField id="outlined-name" label="Nombre" variant="outlined"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField id="outlined-lastName" label="Apellido" variant="outlined"/>
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField id="outlined-phone" label="Teléfono" variant="outlined"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField id="outlined-adress" label="Dirección"
                               variant="outlined"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth id="outlined-phone" label="Dirección"
                               variant="outlined"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth id="outlined-adress" label="Mensaje" multiline
                               rows={4}
                               variant="outlined"/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TrueForm;