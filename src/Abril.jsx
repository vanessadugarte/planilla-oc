import React, {useState} from 'react';
import {
    Box,
    Button,
    CardMedia,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Input,
    MenuItem,
    TextField,
    Typography
} from "@mui/material";
import logo from "./assets/logo-hojas.png";
import UploadButton from "./components/UploadButton";

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
    const [label, setLabel] = useState(''); // Estado inicial para label es una cadena vacía
    const [value, setValue] = useState('');

    const onChange = () => {

    };

    const handleSubmit = () => {

    };

    return (
        <Container maxWidth="md">
            <Grid container direction="column" alignItems="center">
                <CardMedia
                    sx={{width: 60}}
                    image={logo}
                    title="leaves logo"
                    component="img"
                />
                <Typography variant="h4" component="h1" mt={2} align="center">Título de formulario</Typography>
            </Grid>

            <Grid container mt={4} spacing={2}>
                <Grid item xs={12} sm={4} container justifyContent="center">
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
                <Grid item xs={12} sm={4} container justifyContent="center">
                    <TextField id="nombre-proveedor" label="Nombre" variant="outlined" fullWidth required/>
                </Grid>
                <Grid item xs={12} sm={4} container justifyContent="center">
                    <TextField id="nombre-proveedor" label="Nombre2" variant="outlined" fullWidth required/>
                </Grid>
                <Grid item xs={12} sm={6} container justifyContent="center">
                    <TextField id="nombre-proveedor" label="Número" variant="outlined" fullWidth required  sx={{ marginRight: '1'}}/>
                </Grid>
                <Grid item xs={10} sm={5} spacing={0} container justifyContent="center">
                    <TextField
                        sx={{marginRight: -1}}
                        label={label}
                        value={value}
                        onChange={onChange}
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <Typography variant="body1" sx={{whiteSpace: 'nowrap',  color: '#767676' }}>
                                    Subir archivo
                                </Typography>
                            )
                        }}
                    />
                    {/*<UploadButton />*/}
                </Grid>
                <Grid item xs={2} sm={1} spacing={-2} container justifyContent="center">
                    <Button variant="contained" container justifyContent="flex-end" component="label" fullWidth
                            sx={{bgcolor: 'primary', color: '#FFF', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)'}}>
                        Subir
                        <input type="file" style={{display: "none"}}/>
                    </Button>
                </Grid>
                <Grid item xs={6} sm={4} container justifyContent="flex-start" sx={{color: '#767676' }}>
                    <FormControlLabel control={<Checkbox/>} label="Factura"/>
                </Grid>
                <Grid item xs={6} sm={4} container justifyContent="flex-start" sx={{color: '#767676' }}>
                    <FormControlLabel control={<Checkbox/>} label="Guía de despacho"/>
                </Grid>
                <Grid item xs={12} sm={4} container justifyContent="flex-start" sx={{color: '#767676' }}>
                    <FormControlLabel control={<Checkbox/>} label="Subir otro archivo"/>
                </Grid>
                <Grid item xs={6} container justifyContent="center">
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth id="outlined-message" label="Mensaje" multiline
                               rows={4}
                               variant="outlined"/>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth >
                        Enviar
                    </Button>
                </Grid>
            </Grid>
        </Container>

    );
};

export default Practice;
