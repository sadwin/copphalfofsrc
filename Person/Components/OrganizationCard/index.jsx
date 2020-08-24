import React from "react";
import { makeStyles } from "@material-ui/core";
import cn from "classnames";
import OrgLogo from "../OrgLogo";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  logoContainer: {
    width: "64px",
    height: "64px",
    minHeight: "64px",
    minWidth: "64px",
    paddingRight: "12px"
  },
  orgName: {
    textTransform: "uppercase"
  },
  info: {
    paddingLeft: "12px",
    "& div": {
      fontSize: 10,
      lineHeight: "16px",
      paddingBottom: theme.spacing()
    },
    "& div.post": {
      fontSize: 12,
      paddingBottom: theme.spacing()
    }
  }
}));

function OrganizationCard(props) {
  const {
    org: { logo, orgName, postName, depName }
  } = props;
  const classes = useStyles();
  return (
    <div className={cn(classes.root, props.className)}>
      <div className={classes.logoContainer}>
        <OrgLogo imgId={logo} />
      </div>
      <div className={classes.info}>
        {postName && <div className="post">{postName}</div>}
        {orgName && <div className={classes.orgName}>{orgName}</div>}
        {depName && <div>{depName}</div>}
      </div>
    </div>
  );
}

export default OrganizationCard;
