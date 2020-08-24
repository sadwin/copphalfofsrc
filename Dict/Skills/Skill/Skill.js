import React, { useEffect } from "react";
import Breadcrumbs from "../../../ui/Breadcrumbs";
import { connect } from "react-redux";
import { getSkillAllAction } from "./store/actions";
import SkillTable from "./components/SkillTable";
const items = [
  {
    label: "Управление ООП",
    link: "/work/app"
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


const Skill = ({ getSkill, skill }) => {
  useEffect(() => {
    getSkill();
  }, []);


  return (
    <div>
      <Breadcrumbs items={items} />
      <SkillTable skillList={skill} />
    </div>
  );
};

const mapStateToProps = state => ({
    skill: state.skill.skillAll
});

const mapDispatchToProps = dispatch => ({
    getSkill: () => dispatch(getSkillAllAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Skill);
