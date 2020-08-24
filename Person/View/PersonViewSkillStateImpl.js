import React from 'react';
import Button from "devextreme-react/button";
import Chip from "../../util/Chip";

class PersonViewSkillStateImpl extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveButtonClick =  this.handleRemoveButtonClick.bind(this);
    }

    handleRemoveButtonClick() {
        let {skillState} = this.props;
        let {removeSkillState} = this.props;
        removeSkillState(skillState.id);
    }

    render() {
        let {skillState} = this.props;
        return (
            <Chip>
                {skillState.name}
                <Button icon={'far fa-times-circle'} onClick={this.handleRemoveButtonClick} />
            </Chip>
        );
    }
}

export default PersonViewSkillStateImpl;