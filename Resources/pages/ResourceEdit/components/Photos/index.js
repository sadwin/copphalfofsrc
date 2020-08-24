import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography"

import UploadDropzone from "./UploadDropzone";
import ImageScrollbar from "./ImageScrollbar";

const useStyles = makeStyles(() => ({
  zone: {
    marginTop: 35
  }
}));

const Photos = ({ addImages = () => ({}), card }) => {
  const classes = useStyles();

  return (
    <div className={classes.zone}>
      <Typography gutterBottom>Фотографии</Typography>
      <div className={classes.zone}>
        {card && card.photos.length > 0 && <ImageScrollbar images={card.photos} />}
      </div>
      <div className={classes.zone}>
        <UploadDropzone onDrop={addImages} />
      </div>
    </div>
  );
};

export default Photos;
