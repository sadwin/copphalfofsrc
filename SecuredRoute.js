import React from "react";
import SecurityContext from "./SecurityContext";
import {Route} from "react-router-dom";
import AccessForbidden from "./AccessForbidden";

class SecuredRoute extends React.Component {
    render() {
        if (this.props.role == null) {
            return (<Route exact={this.props.exact} path={this.props.path} component={this.props.component}/>);
        }
        if (Array.isArray(this.props.role)) {
            for (let role of this.props.role) {
                if (this.context.hasRole(role)) {
                    return (<Route exact={this.props.exact} path={this.props.path} component={this.props.component}/>);
                }
            }
        } else if (this.context.hasRole(this.props.role)) {
            return (<Route exact={this.props.exact} path={this.props.path} component={this.props.component}/>);
        }
        return (<Route exact={this.props.exact} path={this.props.path} component={AccessForbidden}/>);
    }
}

SecuredRoute.contextType = SecurityContext;


export default SecuredRoute;