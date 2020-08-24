import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Carousel } from "react-responsive-carousel";
import src from "../../no_image.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: 240,
    height: 160,
    "& .carousel-slider": {
      width: 240,
      height: 160
    }
  }
}));

const FacilityImage = ({ images }) => {
  const classes = useStyles();
  const baseURL = "/work/api/file";

  return images.length > 0 ? (
    <div className={classes.root}>
      <Carousel showStatus={false} showIndicators={false} showThumbs={false}>
        {images.map(({ fileId }) => (
          <img className={classes.image} src={`${baseURL}/${fileId}`} />
        ))}
      </Carousel>
    </div>
  ) : (
    <img className={classes.root} src={src} alt="Нет изображения"></img>
  );
};

export default FacilityImage;
