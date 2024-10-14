import {
  Container,
  FormControl,
  Input,
  createTheme,
  ThemeProvider,
  Button,
  FormLabel,
  Typography,
  Box,}
   from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import "./Index.scss";
import { pink } from "@mui/material/colors";
import { useState } from "react";

export default function Footer() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5a48a7",
      },
      secondary: pink,
    },
  });

  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь реализуйте логику отправки сообщения (например, отправку на сервер)
    // После отправки установите isMessageSent в true
    setIsMessageSent(true);
    setTimeout(() => {
      setIsMessageSent(false);
    }, 2000); // Сбросить состояние через 2 секунды
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        width={"100vw"}
        padding={"0px"}
        sx={{
          position: "relative",
          bottom: "0px",
          left: "0px",
          background: "#241758",
          color: "#FCD6C5",
          margin: "0px 0px 0px 0px",
        }}
      >
        <Container>
          <form
            onSubmit={handleSubmit} // Обработчик отправки формы
            action=""
            method="post"
            className="form"
            maxWidth="100%"
          >
            <FormLabel>
              <Typography
                variant="h6"
                component="h1"
                color="primary"
                sx={{
                  fontSize: "25px",
                }}
              >
                Дополнительные возможности
              </Typography>
            </FormLabel>
            <FormControl
              color="primary"
              variant="standard"
              sx={{
                margin: "6px 0px",
                padding: "2px 4px",
              }}
              focused
            >
              <Input
                sx={{
                  margin: "10px 0px",
                  width: "50%",
                  color: "#FCD6C5",
                  padding: "2px 5px",
                }}
                type="email"
                startAdornment={
                  <EmailIcon
                    sx={{
                      color: "#FCD6C5",
                      paddingRight: "8px",
                    }}
                    />
                  }
                  placeholder="Email"
                  required
                />
              </FormControl>
              <FormControl
                color="primary"
                variant="standard"
                sx={{
                  width: "50%",
                  margin: "10px 0px",
                  padding: "2px 4px",
                }}
                focused
              >
                <Input
                  sx={{
                    padding: "2px 5px",
                    color: "#FCD6C5",
                  }}
                  type="text"
                  startAdornment={
                    <MessageIcon
                      sx={{
                        color: "#FCD6C5",
                        paddingRight: "8px",
                      }}
                    />
                  }
                  placeholder="Отправьте сообщение"
                  required
                />
              </FormControl>
              <FormControl>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  sx={{
                    width: "110px",
                  }}
                >
                  {isMessageSent ? "Отправлено" : "Отправить"} &nbsp;{
                    <SendIcon />
                  }
                </Button>
              </FormControl>
            </form>
          </Container>
          <Container
            sx={{
              height: "60px",
              backgroundColor: "#110835",
              margin: "0px",
              padding: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            maxWidth="100%"
          >
            <Typography align="center">
              Сделано с ❤️ Любовью
            </Typography>
          </Container>
        </Box>
      </ThemeProvider>
    );
  }
  