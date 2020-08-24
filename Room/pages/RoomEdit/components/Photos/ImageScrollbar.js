import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 50,
    height: 130,
    width: "100%",
    overflowX: 'scroll',
    overflowY: 'hidden',
    whiteSpace: 'nowrap'
  },
  image: {
    width: 173,
    height: 130,
    objectFit: "cover",
    paddingRight: 2
  }
}));

const ImageScrollbar = ({ images }) => {
  const classes = useStyles();
  const baseURL = "/work/api/file";

  return (
    <div className={classes.root}>
      {images.map(({ fileId }) => (
        <img className={classes.image} src={`${baseURL}/${fileId}`} />
      ))}
    </div>
  );
};

export default ImageScrollbar;
