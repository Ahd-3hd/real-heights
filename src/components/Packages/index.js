import React from "react";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-grow: 1;
`;

const PackageInfo = styled.div`
  text-align: center;
  flex: 1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 1rem;
  padding: 1rem;
`;

const Packages = props => {
  return (
    <Wrapper>
      <Grid container justify="space-evenly">
        <Grid item xs={12} sm={3}>
          <PackageInfo style={{ fontWeight: "bolder", color: "#555555" }}>
            <h2>{props.language ? "title 1" : "عنوان 1"}</h2>
            <h3>$0.00</h3>
            <Divider variant="middle" style={{ margin: "2rem" }} />
            <p>{props.language ? "title 1" : "عنوان 1"}</p>
            <Divider variant="middle" style={{ margin: "2rem" }} />
            <p>{props.language ? "title 1" : "عنوان 1"}</p>
            <Divider variant="middle" style={{ margin: "2rem" }} />
            <p>{props.language ? "title 1" : "عنوان 1"}</p>
            <Divider variant="middle" style={{ margin: "2rem" }} />
            <Grid container>
              <Grid item xs={12} sm={12}>
                <Button color="secondary" variant="contained">
                  {props.language ? "Order" : "اطلب"}
                </Button>
              </Grid>
            </Grid>
          </PackageInfo>
        </Grid>
        <Grid item xs={12} sm={3}>
          <PackageInfo
            style={{
              background:
                "linear-gradient(45deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
              fontWeight: "bolder",
              color: "#fff"
            }}
          >
            <h2>{props.language ? "title 1" : "عنوان"}</h2>
            <h3>$0.00</h3>
            <Divider variant="middle" style={{ margin: "2rem" }} />
            <p>{props.language ? "title 1" : "عنوان 1"}</p>
            <Divider variant="middle" style={{ margin: "2rem" }} />
            <p>{props.language ? "title 1" : "عنوان 1"}</p>
            <Divider variant="middle" style={{ margin: "2rem" }} />
            <p>{props.language ? "title 1" : "عنوان 1"}</p>
            <Divider variant="middle" style={{ margin: "2rem" }} />
            <Grid container>
              <Grid item xs={12} sm={12}>
                <Button color="secondary" variant="contained">
                  {props.language ? "Order" : "اطلب"}
                </Button>
              </Grid>
            </Grid>
          </PackageInfo>
        </Grid>
        <Grid item xs={12} sm={3}>
          <PackageInfo style={{ fontWeight: "bolder", color: "#555555" }}>
            <h2>{props.language ? "title 1" : "عنوان 1"}</h2>
            <h3>$0.00</h3>
            <Divider variant="middle" style={{ margin: "2rem" }} />
            <p>{props.language ? "title 1" : "عنوان 1"}</p>
            <Divider variant="middle" style={{ margin: "2rem" }} />
            <p>{props.language ? "title 1" : "عنوان 1"}</p>
            <Divider variant="middle" style={{ margin: "2rem" }} />
            <p>{props.language ? "title 1" : "عنوان 1"}</p>
            <Divider variant="middle" style={{ margin: "2rem" }} />
            <Grid container>
              <Grid item xs={12} sm={12}>
                <Button color="secondary" variant="contained">
                  {props.language ? "Order" : "اطلب"}
                </Button>
              </Grid>
            </Grid>
          </PackageInfo>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Packages;
