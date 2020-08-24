import React from 'react';
import Button from "devextreme-react/button";
import Chip from "../../util/Chip";

class PersonViewWorldSkillImpl extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveButtonClick =  this.handleRemoveButtonClick.bind(this);
    }

    handleRemoveButtonClick() {
        let {worldSkill} = this.props;
        let {removeWorldSkill} = this.props;
        removeWorldSkill(worldSkill.id);
    }

    render() {
        let {worldSkill} = this.props;
        return (
            <Chip>
                {worldSkill.cis} | {worldSkill.typeName} | {worldSkill.name}
                <Button icon={'far fa-times-circle'} onClick={this.handleRemoveButtonClick} />
            </Chip>
        );
    }
}

export default PersonViewWorldSkillImpl;