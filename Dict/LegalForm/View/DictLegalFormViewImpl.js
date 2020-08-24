import React from "react";
import DictLegalFormViewRoot from "./DictLegalFormViewRoot";
import EntityNotFound from "../../../util/EntityNotFound";
import EntityNotAccessible from "../../../util/EntityNotAccessible";
import EntityNotLoaded from "../../../util/EntityNotLoaded";

class DictLegalFormViewImpl extends React.PureComponent {

    componentDidMount() {
        this.props.loadData(this.props.match.params.id);
    }

    render() {
        const {isError, isNotFound, isForbidden} = this.props;
        if (isNotFound) {
            return (
                <EntityNotFound>
                    <p>Запись не найдена</p>
                </EntityNotFound>
            )
        } else if (isForbidden) {
            return (
                <EntityNotAccessible>
                    <div>Доступ запрещен</div>
                </EntityNotAccessible>
            )
        } else if (isError) {
            return (
                <EntityNotLoaded>
                    <div>Ошибка загрузки</div>
                </EntityNotLoaded>
            )
        } else {
            return (
                <DictLegalFormViewRoot/>
            )
        }
    }
}

export default DictLegalFormViewImpl;