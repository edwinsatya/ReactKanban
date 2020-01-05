import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
  card: {
    width: 350,
    margin: "30px 0px"
  }
}));

const CardComponent = props => {
  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.card}>
        <CardHeader
          title={props.data.title}
          style={{
            borderBottom: "1px solid black",
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
                    border: "1px dotted black",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: "10px"
                  }}
                >
                  {data.input}
                </CardContent>
              </Card>
            );
          })}
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default CardComponent;
