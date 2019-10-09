import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import avatar1 from "../../assets/abdelkareem.jpg";
import avatar2 from "../../assets/abudana.jpg";
import avatar3 from "../../assets/Yunus.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import logo1 from "../../assets/vodafone.png";
import logo2 from "../../assets/airbnb.png";
import logo3 from "../../assets/turkishairlines.png";
const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: "auto",
    width: 150,
    height: 150
  }
});
const Quotes = props => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      style={{
        textAlign: "center",
        letterSpacing: "1px",
        color: "#dbdbdb",
        fontWeight: 500,
        paddingBottom: "1rem",
        marginBottom: "2.5rem"
      }}
    >
      <Grid item xs={12} sm={12} md={12}>
        <h2 style={{ margin: "2rem" }}>{props.language ? "Title" : "عنوان"}</h2>
        <p style={{ margin: "0 2rem" }}>
          {props.language ? "Paragraph" : "فقرة"}
        </p>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card
          style={{
            margin: "1rem",
            background: "rgba(220,220,240,0.6)",
            color: "#555555"
          }}
        >
          <CardContent style={{ display: "flex", flexDirection: "column" }}>
            <Avatar src={avatar1} className={classes.bigAvatar} />
            <h3 style={{ color: "#555555" }}>
              {props.language ? "Name 1" : "الاسم الاول"}
            </h3>
            <p>{props.language ? "Paragraph" : "فقرة"}</p>
            <div>
              <Button>
                <FacebookIcon style={{ color: "#555555" }} />
              </Button>
              <Button>
                <TwitterIcon style={{ color: "#555555" }} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card
          style={{
            margin: "1rem",
            background: "rgba(220,220,240,0.6)",
            color: "#555555"
          }}
        >
          <CardContent style={{ display: "flex", flexDirection: "column" }}>
            <Avatar src={avatar2} className={classes.bigAvatar} />
            <h3 style={{ color: "#555555" }}>
              {props.language ? "Name 2" : "الاسم الثاني"}
            </h3>
            <p>{props.language ? "Paragraph" : "فقرة"}</p>
            <div>
              <Button>
                <FacebookIcon style={{ color: "#555555" }} />
              </Button>
              <Button>
                <TwitterIcon style={{ color: "#555555" }} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card
          style={{
            margin: "1rem",
            background: "rgba(220,220,240,0.6)",
            color: "#555555"
          }}
        >
          <CardContent style={{ display: "flex", flexDirection: "column" }}>
            <Avatar src={avatar3} className={classes.bigAvatar} />
            <h3 style={{ color: "#555555" }}>
              {props.language ? "Name 3" : "الاسم الثالث"}
            </h3>
            <p>{props.language ? "Paragraph" : "فقرة"}</p>
            <div>
              <Button>
                <FacebookIcon style={{ color: "#555555" }} />
              </Button>
              <Button>
                <TwitterIcon style={{ color: "#555555" }} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Grid container justify="space-between" alignItems="center" spacing={4}>
          <Grid item xs={12} sm={3}>
            <img
              src={logo1}
              alt="logo"
              style={{ width: "100%", maxWidth: "170px" }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <img
              src={logo2}
              alt="logo"
              style={{ width: "100%", maxWidth: "170px" }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <img
              src={logo3}
              alt="logo"
              style={{ width: "100%", maxWidth: "170px" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Quotes;
