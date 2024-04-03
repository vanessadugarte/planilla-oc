import React from 'react';
import {Box, CardMedia, Container, Grid, MenuItem, TextField, Typography} from "@mui/material";
import logo from "./assets/logo-hojas.png";

const empresas = [
    {
        value: 'Empresa',
        label: 'HBO',
    },
    {
        value: 'Empresa2',
        label: 'Makro',
    },
    {
        value: 'Empresa3',
        label: 'Flores',
    },
    {
        value: 'Empresa4',
        label: 'Paris',
    },
];

const Practice = () => {
    return (
        <Container maxWidth="md">
            <Grid container direction="column" alignItems="center">
                <CardMedia
                    sx={{width: 60}}
                    image={logo}
                    title="leaves logo"
                    component="img"
                />
                <Typography variant="h4" component="h1" mt={2} align="center">Titulo de formulario</Typography>
            </Grid>

            <Grid container mt={4} spacing={2}>
                <Grid item xs={6} container justifyContent="center">
                    <TextField fullWidth
                               mt={2}
                               id="outlined-select-company"
                               select
                               label="Select"
                               defaultValue="Paris"
                               helperText="Selecciona la empresa"
                    >
                        {empresas.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={6} container justifyContent="center">
                    <TextField id="nombre-proveedor" label="Nombre" variant="outlined" fullWidth/>
                </Grid>
            </Grid>
        </Container>

    );
};

export default Practice;
