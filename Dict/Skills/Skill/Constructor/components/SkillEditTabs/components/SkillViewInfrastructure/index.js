import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { getModuleListAction, createModuleListAction, updateModuleAction, deleteModuleAction, createScaleAction, updateScaleAction, deleteScaleAction, roomListAction, createRoomAction, updateRoomAction, deleteRoomAction, createResourceAction, updateResourceAction, deleteResourceAction } from "../../../../../store/actions";
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

    const {roomList, getRoomList, id, createdRoomId,
        createRoom, updateRoom, deleteRoom,
        createResource, createdResourceId, updateResource, deleteResource} = props;

    const [modules, setModules] = useState(roomList);
    const [newRoom, setNewRoom] = useState('');
    const [showNewModule, setShowNewModule] = useState(false);
    
    useEffect(() => { 
        getRoomList(id);
        setModules(roomList);
    }, [id, roomList.length]);

    const addRoom = () => {
        createRoom(id);
        setShowNewModule(true);
    }

    const saveNewRoom = (roomId) => {
        let data = {
            "main" : {
              "name" : newRoom
            }
          }
          
        updateRoom(id, roomId, data);
        setShowNewModule(false);
        setNewRoom('');
    }

    const removeNewRoom = (roomId) => {
        deleteRoom(id, roomId);
        setShowNewModule(false);
        setNewRoom('');
    }

    const handleModule = (value, index) => {
        let list = [...modules];
        list[index].data.name = value;
        setModules(list);
    }

    const saveRoom = (roomId, index) => {
        let name = modules[index].data.name;
        let data = {
            "main" : {
              "name" : name
            }
          }
          updateRoom(id, roomId, data);
    }

    const removeRoom = (roomId, index) => {
        let list = [...modules];
        list.splice(index, 1);
        setModules(list);
        deleteRoom(id, roomId);
    }



    const addResource = (roomId) => {
        createResource(id, roomId)
    }

    const saveResource = (roomId, roomResourceId, data) => {
        updateResource(id, roomId, roomResourceId, data)
    }

    const removeResource = (roomId, roomResourceId) => {
        deleteResource(id, roomId, roomResourceId)
    }

  return (
      <div>
            <div className={header}>
                <div className={header__elem}>
                    <h5>Помещения и ресурсы</h5>
                </div>
                <div className={header__elem_right}>
                    <div>
                        <SquareButton onClick={addRoom}>
                            <AddIcon fontSize="small" />
                        </SquareButton>
                    </div>
                </div>
            </div>

            <div className={content}>
                <div>
                    {showNewModule && 
                        <ExpansionPanelSummary
                            className={summary}
                        >
                            <InputBase
                                className={inputBase}
                                placeholder="Введите наименование помещения"
                                fullWidth
                                inputProps={{ 'aria-label': 'naked' }}
                                value={newRoom}
                                onChange={(e) =>  setNewRoom(e.target.value)}
                            />
                            <div className={heading}>
                                <SaveOutlinedIcon 
                                    style={{color: "#93A7BE"}}
                                    onClick={() => saveNewRoom(createdRoomId)}
                                />
                                <UndoOutlinedIcon
                                    style={{color: "#93A7BE"}}
                                    onClick={() => removeNewRoom(createdRoomId)}
                                />
                            </div>
                        </ExpansionPanelSummary>
                    }
                    
                    {modules.map((room, index) => {
                        return  <ExpansionPanel key={room.info.id}>
                                    <ExpansionPanelSummary
                                    expandIcon={<ArrowRightIcon />}
                                    aria-controls="panel1a-content"
                                    className={summary}
                                    id="panel1a-header"
                                    >
                                        <InputBase
                                            fullWidth
                                            inputProps={{ 'aria-label': 'naked' }}
                                            value={room.data.name}
                                            onChange={(e) =>  handleModule(e.target.value, index)}
                                        />
                                        <div className={heading}>
                                            <SaveOutlinedIcon 
                                                 style={{color: "#93A7BE"}}
                                                 onClick={() => saveRoom(room.info.id, index)}
                                            />
                                            <DeleteForeverOutlinedIcon 
                                                style={{color: "#93A7BE"}}
                                                onClick={() => removeRoom(room.info.id, index)}
                                            />
                                        </div>

                                    </ExpansionPanelSummary>

                                    <ExpansionPanelDetails>
                                        {/* <h5 className={panelName}>Навыки</h5> */}
                                        <ScaleEditGrid
                                            addResource={addResource}
                                            saveResource={saveResource}
                                            removeResource={removeResource}
                                            roomId={room.info.id}
                                            createdResourceId={createdResourceId}
                                            resources={room.resources} />
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                    })}
                    </div>
            </div>
      </div>
  );
};

const mapStateToProps = state => ({
    roomList: state.skill.roomList,
    createdRoomId: state.skill.createRoomResponse.id,
    createdResourceId: state.skill.createResourceResponse.id,
});

const mapDispatchToProps = dispatch => ({
    getRoomList: (id) => dispatch(roomListAction(id)),
    createRoom: (id) => dispatch(createRoomAction(id)),
    updateRoom: (id, roomId, data) => dispatch(updateRoomAction(id, roomId, data)),
    deleteRoom: (id, roomId) => dispatch(deleteRoomAction(id, roomId)),

    createResource: (id, roomId) => dispatch(createResourceAction(id, roomId)),
    updateResource: (id, roomId, roomResourceId, data) => dispatch(updateResourceAction(id, roomId, roomResourceId, data)),
    deleteResource: (id, roomId, roomResourceId) => dispatch(deleteResourceAction(id, roomId, roomResourceId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillEditQualification);

