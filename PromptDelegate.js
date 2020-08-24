import React, {useContext, useEffect} from "react";
import {Prompt} from "react-router-dom";
import RouteAdviceContext from "./RouteAdviceContext";

export default function PromptDelegate(props) {

    let routeAdviceContext = useContext(RouteAdviceContext);

    useEffect(() => {
        routeAdviceContext.aroundInvoke = props.onSave;
        return () => {
            if (routeAdviceContext.aroundInvoke === props.onSave) {
                routeAdviceContext.aroundInvoke = null;
            }
        }
    }, [routeAdviceContext, props.onSave]);
    useEffect(() => {
        function handleBeforeUnload(e) {
            if (props.when) {
                e.preventDefault();
                e.returnValue = '';
            }
        }
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        }
    }, [props.when]);
    return (
        <Prompt when={props.when} message={props.message}/>
    )
}