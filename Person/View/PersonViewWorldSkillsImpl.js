import React from "react";
import PersonViewWorldSkill from "./PersonViewWorldSkill";
import PersonViewWorldSkillAdd from "./PersonViewWorldSkillAdd";


class PersonViewSkillStatesImpl extends React.PureComponent {

    render() {
        let {
            worldSkillsData,
            hasWorldSkillsData
        } = this.props;
        let rootClass = 'copp-person-view-info-world-skills';
        if (!hasWorldSkillsData) {
            rootClass += ' hidden';
        }
        return (
            <div className={rootClass}>
                <h3>Компетенции Ворлдскиллс</h3>
                <div className={'copp-person-view-info-world-skills-list'}>
                    {
                        worldSkillsData.map(worldSkill => (<PersonViewWorldSkill key={worldSkill.id} worldSkill={worldSkill}/>))
                    }
                    <PersonViewWorldSkillAdd/>
                </div>
            </div>
        );
    }
}

export default PersonViewSkillStatesImpl;