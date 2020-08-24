import styles from "./DictCollection.module.css"

import React from "react";
import TreeView from 'devextreme-react/tree-view';

/**
 * Список доступных справочников в виде дерева
 * Реальные справочники имеют ссылку на их страницу с гридом
 */
const dictionaries = [
    {
        id: 'doc-category',
        text: "Категории документа",
        link: "/work/app/dict/doc-category"
    },
    {
        id: 'doc-type',
        text: "Типы документов",
        link: "/work/app/dict/doc-type"
    },
    {
        id: 'dict-region',
        text: "Регионы",
        link: "/work/app/dict/region"
    },
    {
        id: 'dict-municipal',
        text: "Муниципальные образования",
        link: "/work/app/dict/municipal"
    },
    {
        id: 'dict-person-skill-state',
        text: "Навыки",
        link: "/work/app/dict/person-skill-state"
    },
    {
        id: 'dict-world-skill-category',
        text: "Блоки компетенций Ворлдскиллс",
        link: "/work/app/dict/world-skill-category"
    },
    {
        id: 'dict-world-skill-type',
        text: "Типы компетенций Ворлдскиллс",
        link: "/work/app/dict/world-skill-type"
    },
    {
        id: 'dict-world-skill-status',
        text: "Статусы компетенций Ворлдскиллс",
        link: "/work/app/dict/world-skill-status"
    },
    {
        id: 'dict-world-skill',
        text: "Компетенции Ворлдскиллс",
        link: "/work/app/dict/world-skill"
    },
    {
        id: 'dict-skills',
        text: "Справочник компетенций и ФГОС",
        link: "/work/app/dict/skills"
    },
    {
        id: 'dict-legal-form',
        text: "ОПФ",
        link: "/work/app/dict/legal-form"
    }
];

class DictCollection extends React.Component {

    constructor(props) {
        super(props);
        this.searchOptions = {
            width: 300
        };
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    render() {
        return (
            <div className={styles.root}>
                <TreeView
                    items={dictionaries}
                    searchMode={"contains"}
                    searchEditorOptions={this.searchOptions}
                    width={'100%'}
                    height={'100%'}
                    searchEnabled={true}
                    onItemClick={this.handleItemClick}
                    displayExpr={'text'}/>
            </div>
        )
    }

    handleItemClick(e) {
        this.props.history.push(e.itemData.link);

    }
}

export default DictCollection;