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
        margin: '10 0 10px 0',
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
        marginBottom: '10px',
      }
    },
  });
  
const SkillEditWorkplace = ({change, safety, safetyFirst}) => {
    const {content, title, text } = useStyles();

  return (
      <div className={content}>
            <div className={title}>
                <h5>Общие требования безопасности</h5>
            </div>
            <div className={text}>
                <TextField
                  multiline
                  fullWidth
                  className={text}
                  value={safety}
                  onChange={(e) =>  change("safety", e.target.value)}
                />
              </div>

            <div className={title}>
                <h5>Требования безопасности перед началом работы</h5>
            </div>
            <div className={text}>
              <TextField
                multiline
                fullWidth
                className={text}
                value={safetyFirst}
                onChange={(e) =>  change("safetyFirst", e.target.value)}
              />
            </div>
      </div>
  );
};

export default SkillEditWorkplace;
