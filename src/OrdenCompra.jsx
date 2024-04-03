import React from 'react';
import {CardMedia, Container, Divider, Grid, ListItem, ListItemText, Typography} from "@mui/material";
import logo from "./assets/logo-hojas.png";

const body2Style = {
    fontSize: '1rem',
    color: 'black',
    fontweight: '600'
};
const OrdenCompra = () => {
    return (
        <Container maxWidth="lg" xs={12} sm={8}>
            <Grid container direction="column" alignItems="left">
                <Grid item mb={6}>
                    <Typography sx={body2Style}>Importadora y Distdkjdokjribuidora hola Ltda.</Typography>
                    <Typography variant={"body2"}>Exposicisdsdsd Santiago de Chile</Typography>
                    <Typography variant={"body2"}>Casilla 23246</Typography>
                    <Typography variant={"body2"}>Santiago, CHILE</Typography>
                    <Typography variant={"body2"}>Phone (56 2) 53333 06 - (56 2) 2947 33 05</Typography>
                    <Typography variant={"body2"}>Fax (56 2) 293434 33</Typography>
                    <Typography variant={"body2"}>82.205.100-5</Typography>
                    <Typography variant={"body2"}>Giro: Muchos alimentos de Alimentos</Typography>
                    <Typography variant={"body2"}>www.ejemplo.cl</Typography>
                </Grid>
                <Grid item container direction="row" justifyContent="space-between">
                    <Typography variant={"h6"}>Fecha: 13/10/2023</Typography>
                    <Typography variant={"h6"}>Orden de Compra Nº N54592</Typography>
                </Grid>
                <Divider/>
                <Grid container columnSpacing={12} spacing={0.5} justifyContent="flex-start">
                    <Grid item xs={12} sm={1}>
                        <Typography variant="body2">Proveedor:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <Typography variant="button">Comercial de ejemplo LTDA.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <Typography variant="body2">Rut:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <Typography variant="body2">23.552.993-8</Typography>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <Typography variant="body2">Dirección</Typography>
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <Typography variant="body2">Irarrazal 540, Santiago Chile</Typography>
                    </Grid>
                </Grid>
                <Divider sx={{mt: 2, mb: 2}}/>

                {/*SEGUNDA PARTE*/}

                <Grid container justifyContent="flex-start">
                    <Grid container columnSpacing={2} spacing={0.5} xs={12} sm={5} justifyContent="flex-start">
                        <Grid item xs={12} sm={3}>
                            <Typography variant="body2">Términos de pago:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="body2">60 Días</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography variant="body2">Contacto:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="button">Alan Ejemplo</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography variant="body2">Fono Contacto:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="body2">2 2526 3452 / +569 6521 7691</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography variant="body2">Mail contacto:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="body2">ejemplo.cl</Typography>
                        </Grid>
                    </Grid>

                    {/*PARTE TRES*/}
                    <Grid container columnSpacing={2} spacing={0.5} xs={12} sm={7} justifyContent="flex-start">
                        <Grid item xs={12} sm={3}>
                            <Typography variant="body2">Ref. Proveedor</Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="button">mailpmatos</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography variant="body2">Fecha prometida:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="button">29/05/2023</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography variant="body2">Moneda:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="body2">CLP</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography variant="body2">Mail contacto:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="body2">ejemplo@dominio.cl</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider sx={{mt: 2, mb: 2}}/>

            </Grid>

        </Container>

    );
};

export default OrdenCompra;