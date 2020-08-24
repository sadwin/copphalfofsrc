import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { getModuleListAction, createModuleListAction, updateModuleAction, deleteModuleAction, createScaleAction, updateScaleAction, deleteScaleAction, createRateAction, updateRateAction, deleteRateAction } from "../../../../../store/actions";
import SquareButton from "../../../../../../../../ui/SquareButton";
import AddIcon from '@material-ui/icons/Add';
import { TextField, InputBase } from "@material-ui/core";
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';
import ScaleEditGrid from "./ScaleEditGrid";

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        alignItems: 'center',
        paddingBottom: '24px',
      "& h5": {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#000000',
        margin: '0',
      },

      "& p": {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '16px',
        color: '#000000',
        display: 'inline-block',
        margin: '0',
        padding: '4px 0 0 20px',
      }
    },
    summary: {
        backgroundColor: '#F2F2F2',
        flexDirection: 'row-reverse',
        padding: '0',
        "& .MuiExpansionPanelSummary-root.Mui-expanded": {
            minHeight: 'inherit'
        },
        "& .MuiExpansionPanelSummary-expandIcon.Mui-expanded": {
            transform: 'rotate(90deg)'
        },
        "& .MuiExpansionPanelSummary-content": {
            margin: '0',
        }
        
    },
    heading: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#00334E',
        display: 'flex',
        alignItems: 'center',
      },
    content: {
        boxSizing: 'border-box',
        // backgroundColor: '#ffffff',
        width: '100%'
    },
    panelName: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#000000',
        margin: '0',
    },
  }));
  


const SkillEditGrading = (props) => {
    const {content, header, heading, summary, panelName  } = useStyles();

    const {moduleList, getModuleList, id,
        createRate, createdRateId, updateRate, deleteRate} = props;

    
    useEffect(() => { 
        getModuleList(id);
    }, [id, moduleList.length]);


    const addRate = (moduleId) => {
        createRate(id, moduleId)
    }

    const saveRate = (moduleId, moduleRateId, data) => {
        updateRate(id, moduleId, moduleRateId, data)
    }

    const removeRate = (moduleId, moduleRateId) => {
        deleteRate(id, moduleId, moduleRateId)
    }


  return (
      <div>
            <div className={header}>
                    <h5>Оценивание</h5>
            </div>
            <div className={content}>
                <div>
                    {moduleList.map((moduleItem, index) => {
                        return  <ExpansionPanel key={moduleItem.info.id}>
                                    <ExpansionPanelSummary
                                    expandIcon={<ArrowRightIcon />}
                                    aria-controls="panel1a-content"
                                    className={summary}
                                    id="panel1a-header"
                                    >
                                        <Typography className={heading}>
                                            {moduleItem.data.name}
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        {/* <h5 className={panelName}>Критерии оценки</h5> */}
                                        <ScaleEditGrid
                                            addRate={addRate}
                                            saveRate={saveRate}
                                            removeRate={removeRate}
                                            moduleId={moduleItem.info.id}
                                            createdRateId={createdRateId}
                                            rates={moduleItem.rates} />
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                    })}
                </div>
            </div>
      </div>
  );
};

const mapStateToProps = state => ({
    moduleList: state.skill.moduleList,
    createdRateId: state.skill.createRateResponse.id,
});

const mapDispatchToProps = dispatch => ({
    getModuleList: (id) => dispatch(getModuleListAction(id)),

    createRate: (id, moduleId) => dispatch(createRateAction(id, moduleId)),
    updateRate: (id, moduleId, moduleRateId, data) => dispatch(updateRateAction(id, moduleId, moduleRateId, data)),
    deleteRate: (id, moduleId, moduleRateId) => dispatch(deleteRateAction(id, moduleId, moduleRateId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillEditGrading);
