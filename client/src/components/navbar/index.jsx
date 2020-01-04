import React from "react";
import { Box, Toolbar, Container, Grid } from "@material-ui/core";

const navbarComponent = () => {
  return (
    <div>
      <Box component="navbar">
        <Toolbar
          variant="dense"
          style={{
            background: "rgb(244,46,132);",
            background:
              "linear-gradient(90deg, rgba(244,46,132,1) 0%, rgba(0,97,210,0.5844712885154062) 100%)",
            boxShadow: "2px 3px grey"
          }}
        >
          <Container maxWidth="lg">
            <Grid
              justify="center"
              style={{ textAlign: "center", color: "white" }}
            >
              <h1>KANBAN</h1>
            </Grid>
          </Container>
        </Toolbar>
      </Box>
    </div>
  );
};

export default navbarComponent;
