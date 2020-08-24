import React from "react";
import { Link } from "react-router-dom";
import { emphasize, withStyles, makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";

const StyledBreadcrumb = withStyles(theme => ({
  root: {
    backgroundColor: '#F6F6F6',
    height: '24px',
    color: '#778899',
    fontWeight: 400,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[300],
      cursor: "pointer"
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12)
    }
  }
}))(Chip);

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  },
  avatar: {
    background: "none",
    marginRight: -theme.spacing(1.5)
  },
  breadcrumbs: {
    margin: "16px",
  },
  breadcrumbLink: {
    cursor: "pointer",
    textDecoration: "none"
  }
}));

export default function({ items }) {
  const { breadcrumbLink, breadcrumbs } = useStyles();

  return (
    <div className={breadcrumbs}>
      <Breadcrumbs aria-label="breadcrumb">
        {items.map(({ label, link }) => {
          return (
            <Link key={link} className={breadcrumbLink} to={link}>
              <StyledBreadcrumb label={label} />
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
