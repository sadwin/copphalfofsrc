import React, { useEffect } from "react";
import { Typography, Grid, Button, Divider } from "@material-ui/core";
import Avatar from "../Components/Avatar";
import { makeStyles } from "@material-ui/styles";
import OrganizationCard from "../Components/OrganizationCard";
import {withRouter} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {},
  userName: {
    fontSize: "16px",
    textAlign: "center",
    lineHeight: "20px"
  },
  row: {
    padding: `${theme.spacing()}px 0 `
  },
  caption: {
    color: "#778899"
  },
  divider: {
    margin: `${theme.spacing()}px 0`,
    height: 0,
    border: `1px dashed #CACCD1`,
    background: "none"
  },
  buttonRow: {
    display: "flex",
    marginTop: 60,
    justifyContent: "center"
  }
}));

function Row(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.row}>
      {props.children}
    </Grid>
  );
}

function getFullName({ lastName, firstName, middleName }) {
  return `${lastName || ""} ${firstName || ""} ${middleName || ""}`;
}

function PersonViewCardImpl(props) {
  const { id, loadPersonCard, data, showMore = true } = props;
  const classes = useStyles();

  useEffect(() => {
    if (id !== -1) {
      loadPersonCard(id);
    }
  }, [id, loadPersonCard]);

  const {
    avatar,
    firstName,
    lastName,
    middleName,
    municipalName,
    phone,
    email,
    // roles,
    // accounts,
    // skillStates,
    // worldSkills,
    organizations
  } = data;

  return (
    <div>
      <Avatar img={avatar} />
      <Grid container spacing={0} direction="column">
        <Row>
          <Grid item xs={12}>
            <Typography className={classes.userName}>
              {getFullName({ lastName, firstName, middleName })}
            </Typography>
          </Grid>
        </Row>
        <Divider className={classes.divider} />
        {municipalName && (
          <Row>
            <Grid item xs={4}>
              <Typography className={classes.caption}>Город:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{municipalName}</Typography>
            </Grid>
          </Row>
        )}
        {phone && (
          <Row>
            <Grid item xs={4}>
              <Typography className={classes.caption}>Телефон:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{phone}</Typography>
            </Grid>
          </Row>
        )}
        <Row>
          <Grid item xs={4}>
            <Typography className={classes.caption}>Email:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography>
              <a href={`mailto:${email}`}>{email}</a>
            </Typography>
          </Grid>
        </Row>
        <Divider className={classes.divider} />
        <Row>
          <Grid item xs={12}>
            {organizations &&
              organizations.map(org => <OrganizationCard org={org} />)}
          </Grid>
        </Row>
        {showMore && (
          <Row>
            <Grid item xs={12} className={classes.buttonRow}>
              <Button variant="outlined" onClick={() => {props.history.push("/work/app/person/" + id);}}>Подробнее</Button>
            </Grid>
          </Row>
        )}
      </Grid>
    </div>
  );
}

export default withRouter(PersonViewCardImpl);
