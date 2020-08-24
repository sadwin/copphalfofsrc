import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles({
    content: {
        boxSizing: 'border-box',
        backgroundColor: '#ffffff',
    },
    title: {
      "& h5": {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#000000',
        margin: '0',
      }
    },
    text: {
      "& .MuiInputBase-inputMultiline": {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '16px',
        color: '#000000',
      }
    },
  });
  
const SkillEditDesc = ({change, desc}) => {
    const {content, title, text } = useStyles();

  return (
      <div className={content}>
            <div className={title}>
                <h5>Описание</h5>
            </div>
            <div className={text}>
            <TextField
              multiline
              fullWidth
              className={text}
              value={desc}
              onChange={(e) =>  change("description", e.target.value)}
            />
            </div>
      </div>
  );
};

export default SkillEditDesc;
