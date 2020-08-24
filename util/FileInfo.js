import styles from "./FileInfo.module.css"

import React from "react";
import Box, {Item as BoxItem} from "devextreme-react/box";
import FileTypeIconDefault from "../theme/icons/FileTypeIconDefault.png"
import Menu, {Item as MenuItem} from "devextreme-react/menu";

class FileInfo extends React.PureComponent {

    render() {
        let {
            items,
            link,
            mimeType,
            fileName
        } = this.props;
        let hasItems = items && items.length > 0;

        return (
            <div className={styles.root}>
                <Box direction={'col'} className={styles.content} align={'center'}
                     crossAlign={'center'}>
                    <BoxItem ratio={0} shrink={0} baseSize={'auto'}>
                        <Box direction={'row'} align={'space-around'}>
                            <BoxItem ratio={0} shrink={0} baseSize={'auto'}>
                                <a href={link}>
                                    <img width={64} alt={mimeType} height={64} src={FileTypeIconDefault}/>
                                </a>
                            </BoxItem>
                            {hasItems && <BoxItem ratio={0} shrink={0} baseSize={'auto'}>
                                <Menu>
                                    <MenuItem icon={'overflow'} items={items}/>
                                </Menu>
                            </BoxItem>}
                        </Box>
                    </BoxItem>
                    <BoxItem ratio={0} shrink={1} baseSize={'auto'}>
                        <a className={styles.link} href={link}>{fileName}</a>
                    </BoxItem>
                </Box>
            </div>
        );
    }

}

export default FileInfo;