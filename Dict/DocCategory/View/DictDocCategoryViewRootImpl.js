import React from "react";
import Box, {Item as BoxItem} from "devextreme-react/box";
import TabPanel, {Item as TabPanelItem} from "devextreme-react/tab-panel";

import LoadPanel from 'devextreme-react/load-panel';
import PromptDelegate from "../../../PromptDelegate";
import DictDocCategoryViewToolbar from "./DictDocCategoryViewToolbar";
import DictDocCategoryViewMain from "./DictDocCategoryViewMain";
import DictDocCategoryViewRevisions from "./DictDocCategoryViewRevisions";


class DictDocCategoryViewRootImpl extends React.PureComponent {

    constructor(props) {
        super(props);
        this.loadingPosition = {of: window};
    }

    render() {
        return (
            <React.Fragment>
                <Box direction={'col'} width={'100%'} height={'100%'}>
                    <BoxItem ratio={0} shrink={0} baseSize={'auto'}>
                        <DictDocCategoryViewToolbar/>
                    </BoxItem>
                    <BoxItem ratio={1} shrink={1} baseSize={'5rem'}>
                        <TabPanel height={'100%'} width={'100%'}>
                            <TabPanelItem title={'Основная информация'}>
                                <DictDocCategoryViewMain/>
                            </TabPanelItem>
                            {this.props.hasRevisions && <TabPanelItem title={'Ревизии'}>
                                <DictDocCategoryViewRevisions/>
                            </TabPanelItem>}
                        </TabPanel>
                    </BoxItem>
                </Box>
                <LoadPanel
                    shadingColor={'rgba(0,0,0,0.4)'}
                    position={this.loadingPosition}
                    visible={this.props.isLoading}
                    showIndicator={true}
                    shading={true}
                    showPane={true}/>
                <PromptDelegate
                    when={this.props.isDataChanged}
                    message={'Данные были изменены. Сохранить перед продолжением?'}
                    onSave={this.props.promptSaveData}/>
            </React.Fragment>
        );
    }
}

export default DictDocCategoryViewRootImpl;