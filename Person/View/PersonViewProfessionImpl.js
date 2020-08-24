import React from "react";

import ScrollView from "devextreme-react/scroll-view";
import PersonViewSkillStates from "./PersonViewSkillStates";
import PersonViewWorldSkills from "./PersonViewWorldSkills";

class PersonViewProfessionImpl extends React.PureComponent{


    render() {
        return (
            <ScrollView width={'100%'} height={'100%'} className={'copp-person-view-info-profession'}>
                <PersonViewSkillStates />
                <PersonViewWorldSkills />
            </ScrollView>
        )
    }
}

export default PersonViewProfessionImpl;