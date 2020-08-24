import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { getModuleListAction, createModuleListAction, updateModuleAction, deleteModuleAction, createScaleAction, updateScaleAction, deleteScaleAction } from "../../../../../store/actions";
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
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        paddingBottom: '24px',
        // height: '58px',

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
    nameDot: {
        display: 'inline-block',
        width: '5px',
        height: '5px', 
        marginRight: '10px',
        borderRadius: '50%',
    },
    header__elem: {
        width: '50%',

    },
    header__elem_right: {
        width: '50%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

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
    inputBase: {
        padding: '0 20px'
    },
    heading: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#000000',
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

    // text: {
    //   "& p": {
    //     fontFamily: 'Montserrat',
    //     fontStyle: 'normal',
    //     fontWeight: 'normal',
    //     fontSize: '12px',
    //     lineHeight: '16px',
    //     color: '#000000',
    //   }
    // },
  }));
  
const SkillEditQualification = (props) => {
    const {content, header, header__elem, header__elem_right, nameDot,
         text, summary, heading, inputBase,
         panelName  } = useStyles();

    const {moduleList, getModuleList, id, createdModuleId,
         createModule, updateModule, deleteModule,
         createScale, createdScaleId, updateScale, deleteScale} = props;

    const [modules, setModules] = useState(moduleList);
    const [newModule, setNewModule] = useState('');
    const [showNewModule, setShowNewModule] = useState(false);
    
    useEffect(() => { 
        getModuleList(id);
        setModules(moduleList);
    }, [id, moduleList.length]);

    const addModule = () => {
        createModule(id);
        setShowNewModule(true)
    }

    const saveNewModule = (moduleId) => {
        let data = {
            "main" : {
              "name" : newModule
            }
          }
        updateModule(id, moduleId, data);
        setShowNewModule(false);
        setNewModule('');
    }

    const removeNewModule = (moduleId) => {
        deleteModule(id, moduleId);
        setShowNewModule(false);
        setNewModule('');
    }

    const handleModule = (value, index) => {
        let list = [...modules];
        list[index].data.name = value;
        setModules(list);
    }

    const saveModule = (moduleId, index) => {
        let name = modules[index].data.name;
        let data = {
            "main" : {
              "name" : name
            }
          }
        updateModule(id, moduleId, data);
    }

    const removeModule = (moduleId, index) => {
        let list = [...modules];
        list.splice(index, 1);
        setModules(list);
        deleteModule(id, moduleId);
    }

    const addScale = (moduleId) => {
        createScale(id, moduleId)
    }

    const saveScale = (moduleId, moduleScaleId, data) => {
        updateScale(id, moduleId, moduleScaleId, data)
    }

    const removeScale = (moduleId, moduleScaleId) => {
        deleteScale(id, moduleId, moduleScaleId)
    }

    const Bullet = ({color}) => {
        return (
            <span style={{backgroundColor: color}} className={nameDot} />
        )
    }

  return (
      <div>
            {/* <div className={header}>
                <div className={header__elem}>
                    <h5>Модули и навыки</h5>
                </div>
                <div className={header__elem_right}>
                    <div>
                        <p><Bullet color="#85C446" />Новичек</p>
                    </div>
                    <div>
                        <p><Bullet color="#D0101B" />Профессионал</p>
                    </div>
                    <div>
                        <SquareButton onClick={addModule}>
                            <AddIcon fontSize="small" />
                        </SquareButton>
                    </div>
                </div>
            </div> */}

            <div className={content}>
                <div>
                    {showNewModule && 
                        <ExpansionPanelSummary
                            className={summary}
                        >
                            <InputBase
                                className={inputBase}
                                placeholder="Введите наименование модуля"
                                fullWidth
                                inputProps={{ 'aria-label': 'naked' }}
                                value={newModule}
                                onChange={(e) =>  setNewModule(e.target.value)}
                            />
                            <div className={heading}>
                                <SaveOutlinedIcon 
                                    style={{color: "#93A7BE"}}
                                    onClick={() => saveNewModule(createdModuleId)}
                                />
                                <UndoOutlinedIcon
                                    style={{color: "#93A7BE"}}
                                    onClick={() => removeNewModule(createdModuleId)}
                                />
                            </div>
                        </ExpansionPanelSummary>
                    }
                    
                    {modules.map((moduleItem, index) => {
                        return  <ExpansionPanel key={moduleItem.info.id}>
                                    <ExpansionPanelSummary
                                    expandIcon={<ArrowRightIcon />}
                                    aria-controls="panel1a-content"
                                    className={summary}
                                    id="panel1a-header"
                                    >
                                        <InputBase
                                            readOnly
                                            fullWidth
                                            inputProps={{ 'aria-label': 'naked' }}
                                            value={moduleItem.data.name}
                                            onChange={(e) =>  handleModule(e.target.value, index)}
                                        />
                                        <div className={heading}>
                                            <SaveOutlinedIcon 
                                                 style={{color: "#93A7BE"}}
                                                 onClick={() => saveModule(moduleItem.info.id, index)}
                                            />
                                            <DeleteForeverOutlinedIcon 
                                                style={{color: "#93A7BE"}}
                                                onClick={() => removeModule(moduleItem.info.id, index)}
                                            />
                                        </div>

                                    </ExpansionPanelSummary>

                                    <ExpansionPanelDetails>
                                        {/* <h5 className={panelName}>Навыки</h5> */}
                                        <ScaleEditGrid
                                            addScale={addScale}
                                            saveScale={saveScale}
                                            removeScale={removeScale}
                                            moduleId={moduleItem.info.id}
                                            createdScaleId={createdScaleId}
                                            scales={moduleItem.scales} />
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
    createdModuleId: state.skill.createModuleListResponse.id,
    createdScaleId: state.skill.createScaleResponse.id,
});

const mapDispatchToProps = dispatch => ({
    getModuleList: (id) => dispatch(getModuleListAction(id)),
    createModule: (id) => dispatch(createModuleListAction(id)),
    updateModule: (id, moduleId, data) => dispatch(updateModuleAction(id, moduleId, data)),
    deleteModule: (id, moduleId) => dispatch(deleteModuleAction(id, moduleId)),

    createScale: (id, moduleId) => dispatch(createScaleAction(id, moduleId)),
    updateScale: (id, moduleId, moduleScaleId, data) => dispatch(updateScaleAction(id, moduleId, moduleScaleId, data)),
    deleteScale: (id, moduleId, moduleScaleId) => dispatch(deleteScaleAction(id, moduleId, moduleScaleId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillEditQualification);
