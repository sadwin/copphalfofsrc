import React, { useEffect } from "react";
import Breadcrumbs from "../../../../ui/Breadcrumbs";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from 'react-router-dom'
import { getSkillAllAction } from "../store/actions";
import SkillInfoDrawer from "../components/SkillInfoDrawer";
import SquareButton from "../../../../ui/SquareButton";
import CachedIcon from "@material-ui/icons/Cached";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SkillViewTabs from "./components/SkillViewTabs";

const items = [
  {
    label: "Управление ООП",
    link: "#"
  },
  {
    label: "Ресурсы",
    link: "/work/app/manage/resources"
  },
  {
    label: "Справочник компетенций и ФГОС",
    link: "#"
  },
  {
    label: "Справочник компетенций",
    link: "#"
  }
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
      padding: '11px',
      width: '100%',
      marginBottom: '10px',
      boxSizing: 'border-box',
      "& > *:not(:nth-last-child(1))": {
        marginRight: "14px"
      }
    },
  });

const SkillView = (props) => {
    const {content, nav } = useStyles();

  useEffect(() => {
    props.getSkill();
  }, []);

  const goBack = () => {
      props.history.goBack();
  }


  return (
    <div>
      <Breadcrumbs items={items} />
      <div className={content}>
            <div className={nav}>
                <SquareButton>
                    <ChevronLeftIcon fontSize="small"  onClick={goBack} />
                </SquareButton>
                <SquareButton>
                    <CachedIcon fontSize="small" onClick={() => props.getSkill()} />
                </SquareButton>
            </div>
            <SkillViewTabs />
      </div>
        <SkillInfoDrawer
                skillId={props.match.params.id}
                open={true}
        />
    </div>
  );
};

const mapStateToProps = state => ({
    skill: state.skill.skillAll
});

const mapDispatchToProps = dispatch => ({
    getSkill: () => {
    dispatch(getSkillAllAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SkillView));
