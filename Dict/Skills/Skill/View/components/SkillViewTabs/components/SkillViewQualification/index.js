import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',

      "& h5": {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#000000',
      },

      "& p": {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '16px',
        color: '#000000',
        display: 'inline-block',
        padding: '4px 0 0 20px',
      }
    },
    summary: {
        backgroundColor: '#F2F2F2',
        flexDirection: 'row-reverse',
        padding: '0',
        "& .MuiExpansionPanelSummary-expandIcon.Mui-expanded": {
            transform: 'rotate(90deg)'
        }
    },
    heading: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#000000',
      },
    content: {
        boxSizing: 'border-box',
        // backgroundColor: '#ffffff',
        width: '100%'
    },
    // text: {
    //   "& p": {
    //     fontFamily: 'Montserrat',
    //     fontStyle: 'normal',
    //     fontWeight: 'normal',
    //     fontSize: '12px',
    //     lineHeight: '16px',
    //     color: '#000000',
    //   }
    // },
  }));
  
const SkillViewQualification = (props) => {
    const {content, header, text, summary, heading } = useStyles();

  return (
      <div>
            <div className={header}>
                <div>
                    <h5>Модули и навыки</h5>
                </div>
                <div>
                    <p>
                        Новичек
                    </p>
                    <p>
                        Профессионал
                    </p>
                </div>
            </div>
            <div className={content}>
                <div>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ArrowRightIcon />}
                        aria-controls="panel1a-content"
                        className={summary}
                        id="panel1a-header"
                        >
                            <Typography className={heading}>Expansion Panel 1</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ArrowRightIcon />}
                        aria-controls="panel2a-content"
                        className={summary}
                        id="panel2a-header"
                        >
                            <Typography className={heading}>Expansion Panel 2</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    </div>
            </div>
      </div>
  );
};

// const mapStateToProps = state => ({
//     skill: state.skill.skillAll
// });

// const mapDispatchToProps = dispatch => ({
//     getSkill: () => {
//     dispatch(getSkillAllAction());
//   }
// });

export default SkillViewQualification;
