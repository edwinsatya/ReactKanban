import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Delete } from "@material-ui/icons";

function ShowButton(props) {
  function goDelete(payload) {
    props.goDelete(payload);
  }

  function changeStatus(payload) {
    props.goChangeStatus(payload);
  }

  if (props.data.status === "todo") {
    return (
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button disabled>Todo</Button>
        <Button
          onClick={changeStatus.bind(this, {
            id: props.data.id,
            status: props.data.status,
            newStatus: "doing",
            input: props.data.input
          })}
        >
          Doing
        </Button>
        <Button
          onClick={changeStatus.bind(this, {
            id: props.data.id,
            status: props.data.status,
            newStatus: "done",
            input: props.data.input
          })}
        >
          Done
        </Button>
        <Button
          onClick={goDelete.bind(this, {
            id: props.data.id,
            status: props.data.status
          })}
        >
          <Delete className="btn-delete" />
        </Button>
      </ButtonGroup>
    );
  } else if (props.data.status === "doing") {
    return (
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          onClick={changeStatus.bind(this, {
            id: props.data.id,
            status: props.data.status,
            newStatus: "todo",
            input: props.data.input
          })}
        >
          Todo
        </Button>
        <Button disabled>Doing</Button>
        <Button
          onClick={changeStatus.bind(this, {
            id: props.data.id,
            status: props.data.status,
            newStatus: "done",
            input: props.data.input
          })}
        >
          Done
        </Button>
        <Button
          onClick={goDelete.bind(this, {
            id: props.data.id,
            status: props.data.status
          })}
        >
          <Delete className="btn-delete" />
        </Button>
      </ButtonGroup>
    );
  } else if (props.data.status === "done") {
    return (
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          onClick={changeStatus.bind(this, {
            id: props.data.id,
            status: props.data.status,
            newStatus: "todo",
            input: props.data.input
          })}
        >
          Todo
        </Button>
        <Button
          onClick={changeStatus.bind(this, {
            id: props.data.id,
            status: props.data.status,
            newStatus: "doing",
            input: props.data.input
          })}
        >
          Doing
        </Button>
        <Button disabled>Done</Button>
        <Button
          onClick={goDelete.bind(this, {
            id: props.data.id,
            status: props.data.status
          })}
        >
          <Delete className="btn-delete" />
        </Button>
      </ButtonGroup>
    );
  }
}

export default ShowButton;
