import React from "react";
import { Container } from "@mui/system";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom"; // Импортируем Link
import Houses from "../../../data/house";

function House() {
  return (
    <Container maxWidth="xl" sx={{ margin: "20px 0px 0px 0px" }}>
      <Grid maxWidth="xl" spacing={7} container>
        {Houses &&
          Houses.map((item, index) => {
            // Создаем уникальный путь для каждой квартиры
            const housePath = `/dom${index + 1}`; 
            return (
              <Grid
                key={item.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2.4}
                item
                WidthFull
              >
                <Card WidthFull>
                  <CardMedia
                    component="img"
                    alt=""
                    height={160}
                    image={item.image}
                  />
                  <CardContent>
                    <Typography variant="h6" align="center">
                      Премиум класс
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ display: "flex" }} WidthFull>
                    <Link to={housePath} style={{ textDecoration: 'none', width: '100%' }}>
                      <Button
                        sx={{
                          textAlign: "bottom",
                          paddingBottom: "0px",
                          position: "relative",
                          left: "0px",
                          marginBottom: "0px",
                        }}
                        fullWidth
                      >
                        Подробнее...
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}

export default House;

