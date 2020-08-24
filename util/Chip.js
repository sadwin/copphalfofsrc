import styles from "./Chip.module.css"
import React from "react";
import * as PropTypes from "prop-types"

class Chip extends React.PureComponent {

    render() {
        return (
            <div className={styles.root}>
                {this.props.children}
            </div>
        )
    }
}

Chip.propTypes = {
    cssClass: PropTypes.string
};

export default Chip;