import React from 'react';
import {Box, Container, Divider, Grid, Typography} from "@mui/material";
import logo from "./assets/logo-hojas.png";

const body2Style = {
    fontSize: '1rem',
    color: 'black',
    fontweight: '600'
};
const OrdenCompra = () => {
    return (
        <Container maxWidth="lg" xs={12}>
            <Grid item mb={6}>
                <Typography sx={body2Style}>Importadora y Distribuidora ejemplo123 Ltda.</Typography>
                <Typography variant={"body2"}>Dirección en Santiago de Chile</Typography>
                <Typography variant={"body2"}>Casilla 12345</Typography>
                <Typography variant={"body2"}>Santiago, CHILE</Typography>
                <Typography variant={"body2"}>Phone (56 2) 88333 06 - (56 2) 2947 33 05</Typography>
                <Typography variant={"body2"}>Fax (56 2) 893434 33</Typography>
                <Typography variant={"body2"}>82.205.880-5</Typography>
                <Typography variant={"body2"}>Giro: Muchos Alimentos Ejemplo dit.</Typography>
                <Typography variant={"body2"}>www.ejemplo.cl</Typography>
            </Grid>
            <Grid item container direction="row" justifyContent="space-between">
                <Typography variant={"h6"}>Fecha: 13/10/2023</Typography>
                <Typography variant={"h6"}>Orden de Compra Nº N12345</Typography>
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
                    <Typography variant="body2">Grecia 540, Santiago Chile</Typography>
                </Grid>
            </Grid>
            <Divider sx={{mt: 2, mb: 2}}/>

            {/*SEGUNDA PARTE*/}

            <Grid container justifyContent="flex-start">
                <Grid container columnSpacing={2} spacing={0.5} xs={12} sm={6.5} justifyContent="flex-start">
                    <Grid item xs={12} sm={3}>
                        <Typography variant="body2">Términos de pago:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Typography variant="body2" fontWeight="bold">60 Días</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="body2">Contacto:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Typography variant="body2" fontWeight="bold">nombre Ejemplo</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="body2">Fono Contacto:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Typography variant="body2" fontWeight="bold">2 2526 3452 / +569 6521 7691</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="body2">Mail contacto:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Typography variant="body2" fontWeight="bold">ejemplomail.cl</Typography>
                    </Grid>
                </Grid>

                {/*PARTE TRES*/}
                <Grid container columnSpacing={2} spacing={0.5} xs={12} sm={5.5}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="body2">Ref. Proveedor</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Typography variant="button" fontWeight="bold">mailpejemplo</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="body2">Fecha prometida:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Typography variant="button" fontWeight="bold">29/05/2023</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="body2">Moneda:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Typography variant="body2" fontWeight="bold">CLP</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="body2">Mail contacto:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Typography variant="body2" fontWeight="bold">ejemplo@dominio.cl</Typography>
                    </Grid>
                </Grid>
                <Grid container sx={{mt: 1}}>
                    <Grid item xs={12} sm={1.65}>
                        <Typography variant="body2">Comentarios:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={10.35}>
                        <Typography variant="button">elaboradora de alimentos frutale ltda.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{mt: 1, mb: 1}}/>

            {/*Descripciones en negrita*/}

            <Grid container spacing={0} xs={12}>
                <Grid item xs={1.5}>
                    <Typography variant="body2" fontWeight="bold">
                        Cantidad
                    </Typography>
                </Grid>
                <Grid item xs={6.5}>
                    <Typography variant="body2" fontWeight="bold">
                        Descripción
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="body2" fontWeight="bold">
                        Precio U.
                    </Typography>
                </Grid>
                <Grid item xs={3} sx={{textAlign: 'right'}}>
                    <Typography variant="body2" fontWeight="bold">
                        Total
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{mt: 1, mb: 1}}/>

            {/*valores*/}

            <Grid container spacing={0} xs={12}>
                <Grid item xs={1.5}>
                    <Typography variant="body2">
                        2.600,00 KG
                    </Typography>
                </Grid>
                <Grid item xs={6.5}>
                    <Typography variant="button">
                        C677 Colorante natural chocolate - caramelo (bidon 10 kgs)
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="body2">
                        11.590,00
                    </Typography>
                </Grid>
                <Grid item xs={3} sx={{textAlign: 'right'}}>
                    <Typography variant="body2">
                        29.254.331,00
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{mt: 1, mb: 1}}/>

            {/*Última línea*/}
            <Grid container spacing={0.5} xs={12}>
                <Grid item xs={1.5}>
                    <Typography variant="body2">
                        Contacto:
                    </Typography>
                </Grid>
                <Grid item xs={8.5}>
                    <Typography variant="button">
                        Nombre ejemplo
                    </Typography>
                </Grid>
                <Grid item xs={0.5}>
                    <Typography variant="body2" fontWeight="bold">
                        Neto
                    </Typography>
                </Grid>
                <Grid item xs={1.5} sx={{textAlign: 'right'}}>
                    <Typography variant="body2">
                        29.254.331,00
                    </Typography>
                </Grid>
                <Grid item xs={10}></Grid>
                <Grid item xs={0.5}>
                    <Typography variant="body2" fontWeight="bold">
                        Iva
                    </Typography>
                </Grid>
                <Grid item xs={1.5} sx={{textAlign: 'right'}}>
                    <Typography variant="body2">
                        6.742.883,00
                    </Typography>
                </Grid>
                <Grid item xs={10}></Grid>
                <Grid item xs={0.5}>
                    <Typography variant="body2" fontWeight="bold">
                        Total
                    </Typography>
                </Grid>
                <Grid item xs={1.5} sx={{textAlign: 'right'}}>
                    <Typography variant="body2">
                        46.762.943,00
                    </Typography>
                </Grid>
                <Grid item xs={9}></Grid>
                <Grid item xs={3}>
                    <Divider variant="inset" sx={{mt: 1, mb: 1}}/>
                </Grid>

            </Grid>


        </Container>


    )
        ;
};

export default OrdenCompra;