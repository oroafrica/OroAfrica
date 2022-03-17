import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import  Paper  from '@mui/material/Paper';


export default function Service() {

  return (
    <>
      <Box >
      <Typography sx={{ textAlign:'left',marginLeft:8}}  variant="h6" gutterBottom>
        Service
      </Typography>
       
      <Grid container spacing={3} sx={{ width:600 ,margin:5}} >
        <Grid item xs={12} >
          <TextField
            required
            id="description,"
            name="description,"
            label="Description,"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="date"
            name="date"
            label="Date"
            fullWidth
            autoComplete=""
            variant="standard"
          />
        </Grid>
    
   
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fingerSize"
            name="fingerSize"
            label="Finger Size"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
           required
            id="EstimatedCaratage"
            name="EstimatedCaratage"
            label="Estimated Caratage"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
           required
            id="image"
            name="image"
            label="Image"
            fullWidth
            type="file"
            variant="standard"
          />
        </Grid>
       
  
      
        <FormLabel sx={{ margin:3 }} component="legend">Service Type</FormLabel>
       <Paper sx={{ display:"flex" }} >
           
        <Grid item xs={12} m={6} >
       <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Service1"
          />
        </Grid>
        <Grid item xs={12} m={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Service2"
          />
        </Grid> <Grid item xs={12} m={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Service3 "
          />
        </Grid>
        </Paper> 
       
      </Grid></Box>
    </>
  );
}
