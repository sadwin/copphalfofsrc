import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { TextField } from "mui-rff";
import { connect } from "react-redux";

export const SkillsData = connect()(props => {
    return (
        <div>
            <Grid container spacing={0}>
                <Typography>Навыки</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            name="skills"
                            label=""
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>
                </Grid>
                <Typography>Компетенции WorldSkills</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            name="worldskills"
                            label=""
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>
                </Grid>
                <Typography>Организации</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}></Grid>
                </Grid>
            </Grid>
        </div>
    );
});
