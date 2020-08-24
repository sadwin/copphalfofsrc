import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography"

import UploadDropzone from "./UploadDropzone";
import ImageScrollbar from "./ImageScrollbar";

const useStyles = makeStyles(() => ({
  zone: {
    marginTop: 35
  },
  heading: {
    fontSize: 14,
    lineHeight: "18px",
    display: "flex",
    alignItems: "center",
    color: "#000000",
    margin: "8px 0"
  },
}));

const Photos = ({ addImages = () => ({}), photos }) => {
  const classes = useStyles();

  return (
    <div className={classes.zone}>
      <Typography className={classes.heading}>Фотографии</Typography>
      <div>
        {photos && photos.length > 0 && <ImageScrollbar images={photos} />}
      </div>
      <div className={classes.zone}>
        <UploadDropzone onDrop={addImages} />
      </div>
    </div>
  );
};

export default Photos;
