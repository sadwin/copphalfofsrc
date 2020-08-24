import React from "react";
import Button from "devextreme-react/button";
import Toolbar, {Item as ToolbarItem} from "devextreme-react/toolbar";


class DictPersonSkillStateViewToolbarImpl extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleGoBackClick = this.handleGoBackClick.bind(this);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.renderBackButton = this.renderBackButton.bind(this);
        this.renderRefreshButton = this.renderRefreshButton.bind(this);
        this.renderSaveButton = this.renderSaveButton.bind(this);
    }

    handleGoBackClick() {
        this.props.history.push("/work/app/dict/person-skill-state");
    }
    handleRefreshClick() {
        this.props.refreshData();
    }

    handleSaveClick() {
        this.props.saveData();
    }

    renderBackButton() {
        return (
            <Button
                icon={'fas fa-chevron-left'}
                onClick={this.handleGoBackClick}/>
        );
    }

    renderRefreshButton() {
        return (
            <Button
                icon={'fas fa-sync-alt'}
                onClick={this.handleRefreshClick}/>
        );
    }

    renderSaveButton() {
        return (
            <Button
                type={'default'}
                text={'Сохранить'}
                disabled={this.props.saveDisabled}
                stylingMode={'contained'}
                onClick={this.handleSaveClick}/>
        );
    }

    render() {
        return (
            <Toolbar>
                <ToolbarItem location={'before'} render={this.renderBackButton}/>
                <ToolbarItem location={'before'} render={this.renderRefreshButton}/>
                <ToolbarItem location={'before'} render={this.renderSaveButton}/>
            </Toolbar>
        );
    }
}

export default DictPersonSkillStateViewToolbarImpl;