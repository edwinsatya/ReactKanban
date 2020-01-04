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

const CardComponent = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.card}>
        <CardHeader
          title="Todo"
          style={{
            borderBottom: "1px solid black",
            backgroundColor: "pink",
            textAlign: "center"
          }}
        ></CardHeader>
        <CardContent>
          <p>tes</p>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default CardComponent;
