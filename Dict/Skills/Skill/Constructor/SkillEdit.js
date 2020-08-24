import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../../ui/Breadcrumbs";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from 'react-router-dom'
import { getSkillAction, updateSkillAction, getSkillAuthorsAction, deleteSkillAction, toExpertizeAction, publishAction } from "../store/actions";
import SkillInfoDrawer from "../components/SkillInfoDrawer";
import SquareButton from "../../../../ui/SquareButton";
import CachedIcon from "@material-ui/icons/Cached";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SkillEditTabs from "./components/SkillEditTabs";
import Button from "../../../../ui/Button";
import SkillEditActions from './components/SkillEditActions';
import DeleteConfirmationModal from "./components/DeleteConfirmationModal";

const items = [
  {
    label: "Конструктор КиОП",
    link: "#"
  },
  {
    label: "Конструктор компетенций",
    link: "#"
  },
];

const useStyles = makeStyles({
    content: {
        margin: '10px',
        width: 'calc(100% - 300px)',
        boxSizing: 'border-box',
    },
    nav: {
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '11px',
      width: '100%',
      marginBottom: '10px',
      boxSizing: 'border-box',
      "& div": {
        display: 'flex',
        justifyContent: 'center',
        "& button": {
          marginRight: "14px",
          fontSize: '12px',
          // minWidth: 0,
          // width: '110px'
        }
      }
    },
    colorDevelopment: {
      backgroundColor: 'rgba(119, 136, 153, 0.7)',
    },
    colorExpertize: {
      backgroundColor: 'rgba(0, 127, 189, 0.7)',
    },
    colorApproved: {
      backgroundColor: 'rgba(255, 149, 0, 0.7)',
    },
    colorPublished: {
      backgroundColor: 'rgba(133, 196, 70, 0.8)',
    }
  });
  



const SkillEdit = (props) => {
  const skillId = props.match.params.id;
  const {skill, getSkill, updateSkill, getAuthors, deleteSkill, sendToExpertize, publish} = props;
    const {content, nav } = useStyles();
    const [saved, setSaved] = useState(false);
    const [deleteConfimationOpen, setDeleteConfimationOpen] = useState(false);

 

  useEffect(() => {
    getSkill(skillId);
    getAuthors(skillId);
  }, []);

  const goBack = () => {
      props.history.goBack();
  }

  const handleSave = () => {
    let obj = {
      "main" : {
        "worldSkillId" : skill.data.worldSkillId || 1,
        "name" : skill.data.name || 'Fake',
        "code" : skill.data.code || '40',
        "typeId" : skill.data.typeId || 1,
        "categoryId" : skill.data.categoryId || 1,
        "orgId" : skill.data.orgId || 72001,
        "description" : skill.data.description || 'Fake', 
        "safety" : skill.data.safety || 'Fake',
        "safetyFirst" : skill.data.safetyFirst || 'Fake',
        "teacherLevel" : skill.data.teacherLevel || 'Fake',
        "teacherStage" : skill.data.teacherStage || 'Fake',
        "teacherProf" : skill.data.teacherProf || 'Fake',
        "teacherExtra" : skill.data.teacherExtra || 'Fake',
      },
      "authors" : [ 47 ]
    }
    updateSkill(skillId, obj);
    setSaved(true)
  }

  const handleToExpertize = () => {
    sendToExpertize(skillId);
  }

  const handleToPublish = () => {
    publish(skillId);
  }

  const showDeleteModal = () => {
    setDeleteConfimationOpen(!deleteConfimationOpen);
  }

  const removeSkill = () => {
    deleteSkill([skillId])
  }

  const cloneSkill = () => {

  }

  const skillEditActions = [
    {
      label: "Создать копию",
      onClick: cloneSkill,
    },
    {
      label: "Удалить",
      onClick: showDeleteModal,
    }
  ];

  const ActionButton = ({statusId}) => {
    if(statusId === 1 || statusId === 2 || statusId === 4 || statusId === 4) {
      return <Button onClick={handleToExpertize} color="blue">НА ЭКСПЕРТИЗУ</Button>
    } else if (statusId === 3) {
      return <Button onClick={handleToPublish} color="green">ОПУБЛИКОВАТЬ</Button> 
    } else {
      return <Button onClick={handleToExpertize} color="blue">НА ЭКСПЕРТИЗУ</Button>
    }
  }    


  return (
    <div>
      <Breadcrumbs items={items} />
      <div className={content}>
          <DeleteConfirmationModal
            open={deleteConfimationOpen}
            onConfirm={removeSkill}
            handleClose={showDeleteModal}
          />
            <div className={nav}>
              <div>
                  <SquareButton>
                      <ChevronLeftIcon fontSize="small"  onClick={goBack} />
                  </SquareButton>
                  <SquareButton>
                      <CachedIcon fontSize="small" onClick={() => getSkill(skillId)} />
                  </SquareButton>
              </div>
              <div>
                <Button onClick={handleSave}>СОХРАНИТЬ</Button>
                {skill.info && <ActionButton statusId={skill.info.statusId} />}
                <SkillEditActions actions={skillEditActions} />
              </div>
            </div>
            <SkillEditTabs  />
      </div>
        {saved && <SkillInfoDrawer
                    skillId={skillId}
                    open={true}
                  />
        }
    </div>
  );
};

const mapStateToProps = state => ({
    skill: state.skill.skill,
    authors: state.skill.skillAuthors
});

const mapDispatchToProps = dispatch => ({
    getSkill: (skillId) => dispatch(getSkillAction(skillId)),
    updateSkill: (skillId, skill) => dispatch(updateSkillAction(skillId, skill)),
    deleteSkill: (idList) => dispatch(deleteSkillAction(idList)),
    getAuthors: (skillId) => dispatch(getSkillAuthorsAction(skillId)),
    sendToExpertize: (skillId) => dispatch(toExpertizeAction(skillId)),
    publish: (skillId) => dispatch(publishAction(skillId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SkillEdit));
