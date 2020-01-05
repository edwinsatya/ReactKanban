import React, { Component } from "react";
import { CardComponent, AddComponent } from "../../components";
import { Grid, Container } from "@material-ui/core";

class KanbanComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kanbans: [
        {
          title: "Todo",
          status: "todo",
          color: "rgba(244,46,132,1)",
          kanban: []
        },
        {
          title: "Doing",
          status: "doing",
          color: "violet",
          kanban: []
        },
        {
          title: "Done",
          status: "done",
          color: "rgba(0,97,210,0.5844712885154062)",
          kanban: []
        }
      ]
    };
  }

  handleChange = newData => {
    this.state.kanbans.map((data, index) => {
      if (data.status === newData.status) {
        let newKanban = this.state.kanbans;
        newKanban[index].kanban.unshift(newData);
        this.setState(
          {
            kanbans: newKanban
          },
          () => {
            console.log(this.state.kanbans);
          }
        );
      }
    });
  };

  render() {
    return (
      <div>
        <Container>
          <AddComponent
            handleChangeKanbans={value => this.handleChange(value)}
          />
          <Grid container direction="row" justify="space-between">
            {this.state.kanbans.map(data => {
              return <CardComponent key={data.status} data={data} />;
            })}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default KanbanComponent;
