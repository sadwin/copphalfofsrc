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

const SkillImage = ({ image }) => {
  const classes = useStyles();
  const baseURL = "/work/api/file";

  return (
    image  
    ? 
      <img className={classes.root} src={`${baseURL}/${image}`} />
    : 
      <img className={classes.root} src={src} alt="Нет изображения" />
  )
};

export default SkillImage;
