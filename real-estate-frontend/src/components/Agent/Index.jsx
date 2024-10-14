import React, { useState } from "react";
import { Container } from "@mui/system";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  createTheme,
  ThemeProvider,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import "./Index.scss";
import AgentData from "../../data/agent";

const Agent = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0,
        xs: 380,
        sm: 560,
        md: 830,
        lg: 1040,
        xl: 1536,
      },
    },
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);

  const handleOpenDialog = (agent) => {
    setSelectedAgent(agent);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Contact form submitted:", selectedAgent, event.target.elements);
    handleCloseDialog();
  };

  return (
    <div className="agent-page" style={{ margin: "40px 0px" }}>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h5"
          align="center"
          className="heading"
          maxWidth="md"
          sx={{
            margin: "0px auto 40px auto",
            background: "#4774AE",
            borderRadius: "26px",
            padding: "8px 60px",
            borderBottom: "20px solid #434460",
            color: "#E7ECEF",
          }}
        >
          Сотрудники
        </Typography>
        <ThemeProvider theme={theme}>
          <Container maxWidth="xl">
            <Grid spacing={2} container>
              {AgentData &&
                AgentData.map((agent) => {
                  return (
                    <Grid
                      key={agent.id}
                      xxs={12}
                      xs={6}
                      sm={4}
                      md={4} // Increase the size of the card on md screens
                      lg={3} // Increase the size of the card on lg screens
                      xl={2.5} // Increase the size of the card on xl screens
                      item
                    >
                      <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "350px" }}>
                        <CardMedia
                          height="220"
                          component="img"
                          image={agent.image}
                          sx={{ width: "100%" }}
                        />
                        <CardActions sx={{ justifyContent: "center" }}>
                          <Button
                            color="success"
                            className="btn"
                            variant="contained"
                            onClick={() => handleOpenDialog(agent)}
                            sx={{
                              backgroundColor: "#1F2333",
                              textTransform: "none",
                              color: "#E7ECEF",
                            }}
                          >
                            Связаться с
                          </Button>
                        </CardActions>
                        <CardContent>
                          <Typography align="center" variant="h6">
                            {agent.name}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
          </Container>
        </ThemeProvider>

        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Связаться с  {selectedAgent?.name}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Пожалуйста, оставьте свое имя и номер телефона:
            </DialogContentText>
            <form onSubmit={handleSubmit}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Имя"
                type="text"
                fullWidth
              />
              <TextField
                margin="dense"
                id="phone"
                label="Номер телефона"
                type="tel"
                fullWidth
              />
              <DialogActions>
                <Button onClick={handleCloseDialog}>Отмена</Button>
                <Button type="submit" variant="contained">
                  Отправить
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </Container>
    </div>
  );
};

export default Agent;
