import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    card: {
        width: '320px',
        margin: '40px 16px 0 16px',
        cursor: 'pointer',
        float: 'left',
    },
    cardHeader: {
        width: '100%',
        height: '125px',
        backgroundColor: '#778899',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        "& h2": {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '600',
            color: '#FFFFFF',
            fontSize: '16px',
            lineHeight: '20px',
            paddingRight: '16px',
            paddingLeft: '16px',
            textAlign: 'right',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }
    },
    cardBody: {
        height: '75px',
        background: '#FFFFFF',
        display: 'flex',
        justifyContent: 'space-around',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.2)',
        borderRadius: '5px',
    },
    cardBodyChild: {
        textAlign: 'center',
        "& h5": {
            color: '#00334E',
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '18px',
            marginTop: '10px',
            marginBottom: '8px',
        },
        "& p": {
            color: '#D0101B',
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '24px',
            marginTop: '8px',
        }
    }
}));

const CountersCard = ({data, onClick, goTo}) => {
    const { card, cardHeader, cardBody, cardBodyChild } = useStyles();
    if(!data.content) return null;
    return (
        <div className={card} onClick={() => onClick(goTo)}>
            <div className={cardHeader}>
                <h2>{data.content}</h2>
            </div>
            <div className={cardBody}>
                {data.counters.map((counter, index) => {
                    return  <div key={`counter${index}`} className={cardBodyChild}>
                                <h5>{counter.title}</h5>
                                <p>{counter.count}</p>
                            </div>
                })}
            </div>
        </div>
    )
};

export default CountersCard;
