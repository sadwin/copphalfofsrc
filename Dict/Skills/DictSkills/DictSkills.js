import React, {useEffect} from 'react';
import CountersCard from '../../../ui/CountersCard';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getSpecialityCounterAction, getSkillCounterAction} from './action';


const DictSkills = ({
  specCounter,
  skillCounter,
  getSpecCounter,
  getSkillCounter,
  history
}) => {

  useEffect(() => { 
    getSpecCounter();
    getSkillCounter();
  }, []);

  const handleClick = (link) => {
    history.push(link);
  }

  return (
      <section style={{display: 'flex'}}>
          <CountersCard 
            data={skillCounter}
            onClick={handleClick}
            goTo={'/work/app/dict/skills/skill'}
          />
          <CountersCard
            data={specCounter}
            onClick={handleClick}
            goTo={'/work/app/dict/skills/speciality'}
          />
      </section>
  )
}

const mapStateToProps = state => ({
  specCounter: state.skillCounter.specialityCounter,
  skillCounter: state.skillCounter.skillCounter,
})

const mapDispatchToProps = dispatch => ({
    getSpecCounter: () => dispatch(getSpecialityCounterAction()),
    getSkillCounter: () => dispatch(getSkillCounterAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DictSkills));