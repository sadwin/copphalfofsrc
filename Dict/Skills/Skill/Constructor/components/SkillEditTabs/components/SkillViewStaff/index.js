import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField  from "../../../../../../../../ui/TextField";



const useStyles = makeStyles({
    content: {
        boxSizing: 'border-box',
        backgroundColor: '#ffffff',
    },
    inputs: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginBottom: '30px',
    },
    inputs__elem: {
        width: '350px',
        marginRight: '20px',
    },
    inputExtra: {
        marginBottom: '20px'
    },

    text: {
      "& .MuiInputBase-inputMultiline": {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '16px',
        color: '#000000',
      },
    },
  
  });


  
const SkillEditStaff = (props) => {
        const { content, inputs, inputs__elem,inputExtra, text } = useStyles();
        const {change, teacherLevel, teacherStage, teacherProf, teacherExtra} = props;

  return (
      <div className={content}>
            <div className={inputs}>
                <div className={inputs__elem}>
                    <TextField
                            variant="standard"
                            id={`teacher${teacherLevel}`}
                            className={text}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={teacherLevel}
                            label={'Уровень образования'}
                            onChange={(e) =>  change("teacherLevel", e.target.value)}
                    />
                </div>
                <div className={inputs__elem}>
                    <TextField
                        variant="standard"
                        id={`teacher${teacherProf}`}
                        className={text}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={teacherProf}
                        label={'Квалификация'}
                        onChange={(e) =>  change("teacherProf", e.target.value)}
                    />
                </div>
                <div className={inputs__elem}>
                    <TextField
                        variant="standard"
                        id={`teacher${teacherStage}`}
                        className={text}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={teacherStage}
                        label={'Опыт работы'}
                        onChange={(e) =>  change("teacherStage", e.target.value)}
                    />
                </div>
            </div>
            <div className={inputExtra}>
                <TextField
                    variant="standard"
                    multiline
                    margin="normal"
                    id={`teacher${teacherExtra}`}
                    className={text}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={teacherExtra}
                    label={'Дополнительно'}
                    onChange={(e) =>  change("teacherExtra", e.target.value)}
                />
            </div>
      </div>
  );
};



export default SkillEditStaff;
