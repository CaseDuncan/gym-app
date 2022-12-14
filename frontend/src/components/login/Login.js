import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';




function Login() {
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
                <Avatar  sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">
                    Sign In
                </Typography>
                <Box component="form" validate sx={{mt:3}}>
                    <TextField
                    required
                    label="username"
                    name='username'
                    autoComplete='off'
                    placeholder='username'
                    fullWidth
                    autoFocus
                    />
                    <TextField
                    label='Password'
                    name='password'
                    autoComplete='off'
                    placeholder='password'
                    type='password'
                    margin="normal"
                    fullWidth
                    />

                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember Me"
                    />

                    <Button type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}>
                        Login
                    </Button>

                    <Grid item xs>
                    <Link href="#" variant="body2">
                   Forgot password?
                  </Link>
                    </Grid>

                </Box>

            </Box>

        </Container>

    </Grid>
  )
}

export default Login