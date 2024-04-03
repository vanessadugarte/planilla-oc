import Grid2 from "@mui/material/Unstable_Grid2";
import {CardMedia, StyledEngineProvider, TextField, Typography} from "@mui/material";
import logo from './assets/logo-hojas.png';
import './css/main.css';


function App() {
    return (
        <StyledEngineProvider injectFirst>
            <Grid2 container
                   className="test"
                   rowSpacing={3}
                   sx={{mt: 2}}
            >
                <Grid2 container
                       className="test">
                    <CardMedia
                        sx={{width: 60}}
                        image={logo}
                        title="leaves logo"
                        component="img"
                    />
                    <Typography variant="h5" component="h1">El formulario de tus sueños</Typography>
                </Grid2>
                <Grid2 container
                       sx={{width: "25%"}}
                       className="rowFields"
                       spacing={2}>
                    <Grid2 item>
                        <TextField xs={4} id="outlined-name" label="Nombre" variant="outlined"/>
                    </Grid2>
                    <Grid2 item>
                        <TextField xs={4} id="outlined-lastName" label="Apellido"
                                   variant="outlined"/>
                    </Grid2>
                </Grid2>
                <Grid2 container
                       sx={{width: "25%"}}
                       className="rowFields"
                       spacing={2}>
                    <Grid2 item>
                        <TextField xs={4} id="outlined-phone" label="Teléfono" variant="outlined"/>
                    </Grid2>
                    <Grid2 item>
                        <TextField xs={4} id="outlined-adress" label="Dirección"
                                   variant="outlined"/>
                    </Grid2>
                </Grid2>
                <Grid2 container sx={{width: "22%", mr: 5}}>
                    <TextField fullWidth sx={{mb: 2}} id="outlined-phone" label="Dirección"
                               variant="outlined"/>
                    <TextField fullWidth id="outlined-adress" label="Mensaje" multiline
                               rows={4}
                               variant="outlined"/>
                </Grid2>
            </Grid2>
        </StyledEngineProvider>
    );
}

export default App;
