import React from 'react'
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import { CssBaseline } from '@mui/material'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

function CreateCustomer() {
  return (
    <Grid container>
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonAddAltOutlinedIcon />
      </Avatar>

      <Typography component="h1" variant='h5' mt={3}>
        New Customer

      </Typography>

      <Box component='form' noValidate sx={{mt:3}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
            name="firstname"
            label='Firstname'
            required
            autoFocus
            autoComplete='off'
            placeholder='firstname'
            fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
          <TextField
            label='Lastname'
            name='lastname'
            required
            autoComplete='off'
            autoFocus
            placeholder='lastname'
            fullWidth
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="off"
            fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="off"
              fullWidth
              />
            </Grid>

            <Grid item xs={12}>
            <FormControl variant="filled" fullWidth>
            <InputLabel>Service</InputLabel>
            <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
          //  value={age}
          //  onChange={handleChange}
          fullWidth
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="">Ten</MenuItem>
          <MenuItem value="">Twenty</MenuItem>
          <MenuItem value="">Thirty</MenuItem>
          </Select>
          </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl variant="filled" fullWidth>
            <InputLabel>Plan</InputLabel>
            <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
          //  value={age}
          //  onChange={handleChange}
          fullWidth
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="">Daily</MenuItem>
          <MenuItem value="">Weekly</MenuItem>
          <MenuItem value="">Monthly</MenuItem>
          </Select>
          </FormControl>
          </Grid>

        </Grid>
        <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        >
        Create
        </Button>

      </Box>
      </Box>

    </Container>
    </Grid>
  )
}

export default CreateCustomer