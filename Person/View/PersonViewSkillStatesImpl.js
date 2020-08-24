import React from "react";
import PersonViewSkillState from "./PersonViewSkillState";
import PersonViewSkillStateAdd from "./PersonViewSkillStateAdd";


class PersonViewSkillStatesImpl extends React.PureComponent {

    render() {
        let {
            skillStatesData,
            hasSkillStatesData
        } = this.props;
        let rootClass = 'copp-person-view-info-skill-states';
        if (!hasSkillStatesData) {
            rootClass += ' hidden';
        }
        return (
            <div className={rootClass}>
                <h3>Навыки</h3>
                <div className={'copp-person-view-info-skill-states-list'}>
                    {
                        skillStatesData.map(skillState => (<PersonViewSkillState key={skillState.id} skillState={skillState}/>))
                    }
                    <PersonViewSkillStateAdd/>
                </div>
            </div>
        );
    }
}

export default PersonViewSkillStatesImpl;