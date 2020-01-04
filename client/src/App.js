import React from "react";
import "./App.css";
import { NavbarComponent, KanbanComponent } from "./components";
import { CssBaseline, Container } from "@material-ui/core";

const App = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <CssBaseline />
      <NavbarComponent />
      <Container>
        <KanbanComponent />
      </Container>
    </div>
  );
};

export default App;
