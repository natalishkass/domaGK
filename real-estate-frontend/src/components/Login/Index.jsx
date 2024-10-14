import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("пароль"),
    });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" fontWeight="600" fontSize="45px" color="#222B59">
          Времена года
        </Typography>
        <Typography component="h1" variant="h5" color="#222B59">
          Войти
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <form action="/" method="get">
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    type="email"
                    id="email"
                    label="Почта"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="пароль"
                    label="пароль"
                    type="пароль"
                    id="пароль"
                    autoComplete="текущий-пароль"
                />
                <FormControlLabel
                    control={<Checkbox value="запомнить" color="primary" />}
                    label="запомнить меня"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 , background:"#222B59", "&hover": {background: "#262f5d"} }}
                >
                    Войти
                </Button>
            </form>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" sx={{ color:"#222B59"}} underline="hover">
                Забыли пароль?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signUp" variant="body2"  sx={{ color:"#222B59"}} underline="hover">
                {"Еще нет аккаунта? Зарегистрироваться"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}