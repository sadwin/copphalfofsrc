import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Carousel } from "react-responsive-carousel";
import src from "../../no_image.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles(theme => ({
    root: {
        width: 240,
        borderTop: "1px dashed #CACCD1",
        padding: '16px 0'
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 10px',
    },
    title: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '10px',
        lineHeight: '12px',
        textTransform: 'uppercase',
        color: '#596E79',
    },
    logo: {

        "& img": {
            width: '50px',
            height: '50px',
            border: '1px solid #CACCD1',
            boxSizing: 'border-box',
            borderRadius: '75px',
        }
    },
    info: {
        "& h5": {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '18px',
            color: '#000000',
            margin: '0 0 20px 0',
        },
        "& p": {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '10px',
            lineHeight: '12px',
            textTransform: 'uppercase',
            color: '#596E79',
            padding: '0 15px',
        }
    }
}));

const SkillInfoBox = ({title, image, name, desc}) => {
  const classes = useStyles();
  const baseURL = "/work/api/file";

  return (
      <div className={classes.root}>
          <p className={classes.title}>{title}</p>
          <div className={classes.content}>
            <div className={classes.logo}>
                {image ? 
                    <img src={`${baseURL}/${image}`} />
                :
                    <img src={src} />
                }
            </div>
            <div className={classes.info}>
                {name && <h5>{name}</h5>}
                <p>{desc}</p>
            </div>
            </div>
      </div>
  )
};

export default SkillInfoBox;
