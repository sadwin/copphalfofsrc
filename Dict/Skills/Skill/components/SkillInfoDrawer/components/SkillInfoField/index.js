import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 16
  },
  fieldValue: {
    marginTop: 8
  },
  infoElem: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
  },

infoName: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#778899',
    width: '30%'
},
infoValue: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#000000',
    width: '70%'
},
}));


  const SkillInfoField = ({name, children, color = '#000000'}) => {
    const {infoElem, infoName, infoValue} = useStyles();

    return (
        <div className={infoElem}>
            <span className={infoName}>{name}</span>
            <span className={infoValue} style={{color: color}}>
                {children}
            </span>
        </div>
    )
}


export default SkillInfoField;
