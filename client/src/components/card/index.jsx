import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { ShowButton } from "../../components";
import "./style.css";

const useStyles = makeStyles(theme => ({
  card: {
    width: 350,
    margin: "30px 0px"
  }
}));

const CardComponent = props => {
  const classes = useStyles();

  function changeStatus(payload) {
    props.changeStatus(payload);
  }

  function deleteKanban(payload) {
    props.deleteKanban(payload);
  }

  return (
    <Fragment>
      <Card className={classes.card}>
        <CardHeader
          title={props.data.title}
          style={{
            borderBottom: `1px solid black`,
            backgroundColor: props.data.color,
            textAlign: "center",
            color: "white"
          }}
        ></CardHeader>
        <CardContent>
          {props.data.kanban.map((data, index) => {
            return (
              <Card key={index}>
                <CardContent
                  style={{
                    border: `1px dotted ${props.data.color}`,
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: "10px"
                  }}
                >
                  <div className="item-wrap">
                    <span style={{ color: props.data.color }}>
                      <h3>{data.input}</h3>
                    </span>
                  </div>
                </CardContent>

                <ShowButton
                  data={data}
                  goDelete={payload => deleteKanban(payload)}
                  goChangeStatus={value => changeStatus(value)}
                />
              </Card>
            );
          })}
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default CardComponent;
