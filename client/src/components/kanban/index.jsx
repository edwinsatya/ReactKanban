import React, { Component } from "react";
import { CardComponent } from "../../components";
import { Grid, Container } from "@material-ui/core";

class KanbanComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kanban: []
    };
  }

  render() {
    return (
      <div>
        <Container>
          <Grid container direction="row" justify="space-between">
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </Grid>
        </Container>
      </div>
    );
  }
}

export default KanbanComponent;
