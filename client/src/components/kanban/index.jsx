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

  handleNewKanbans = newData => {
    this.state.kanbans.map((data, index) => {
      if (data.status === newData.newStatus) {
        let newKanban = this.state.kanbans;
        newKanban[index].kanban.unshift({
          id: newData.id,
          status: newData.newStatus,
          input: newData.input
        });
        this.setState({
          kanbans: newKanban
        });
      }
    });
  };

  handleChangeStatus = payload => {
    this.handleDelete(payload);
    this.handleNewKanbans(payload);
  };

  handleDelete = payload => {
    let newKanban = this.state.kanbans;
    newKanban.map((data, indexParent) => {
      if (data.status === payload.status) {
        data.kanban.map((item, indexChild) => {
          if (item.id === payload.id) {
            newKanban[indexParent].kanban.splice(indexChild, 1);
          }
        });
      }
    });
    this.setState({
      kanbans: newKanban
    });
  };

  render() {
    return (
      <div>
        <Container>
          <AddComponent
            handleNewKanbans={value => this.handleNewKanbans(value)}
          />
          <Grid container direction="row" justify="space-between">
            {this.state.kanbans.map(data => {
              return (
                <CardComponent
                  key={data.status}
                  data={data}
                  deleteKanban={payload => this.handleDelete(payload)}
                  changeStatus={payload => this.handleChangeStatus(payload)}
                />
              );
            })}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default KanbanComponent;
