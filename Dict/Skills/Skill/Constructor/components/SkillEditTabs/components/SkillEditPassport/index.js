import React, { useEffect, useState } from "react";
import {connect} from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import SkillInfoField from "../../../../../components/SkillInfoDrawer/components/SkillInfoField";
import TextField  from "../../../../../../../../ui/TextField";
import ComboBox from '../../../../../../../../ui/ComboBox';
import { getFacilities } from "../../../../../../../../Facility/store/actions";


const fakeData = [
    {name: 'Copp1', id: 1},
    {name: 'ЦОПП2', id: 2},
    {name: 'Copp3', id: 3},
    {name: 'ЦОПП4', id: 4},
    {name: 'Copp5', id: 5},

]

const useStyles = makeStyles({
    content: {
        boxSizing: 'border-box',
        backgroundColor: '#ffffff',
    },
    title: {
      "& h5": {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#000000',
        margin: '0',
      }
    },
    text: {

      "& .MuiInputBase-inputMultiline": {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '16px',
        color: '#000000',
      },
    },

    columns: {
        width: '100%',
        display: 'flex',
    },
    columnLeft: {
    width: '370px',
    display: 'flex',
    flexDirection: 'column',
    marginRight: '30px',
    },
    columnRight: {
        width: '370px',
        display: 'flex',
        flexDirection: 'column',
    },

    columnRight__inputsBlock: {
        display: 'flex',
        justifyContent: 'flex-start',
    },

    columnRight__elem: {
        width: '80px',
        height: '40px',
        marginRight: '16px',
    },

    infoBlock: {
        margin: '20px 0',
    },
    infoElem: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 0',
    },

    infoName: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '16px',
        color: '#778899',
        width: '50%'
    },
    infoValue: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '16px',
        color: '#000000',
        width: '50%'
    },

    authors: {

    },
    authors__block: {
        display: 'flex',
        justifyContent : 'space-between',
    },
    authors__input: {
        display: 'inline-block',
        width: '368px',
        marginRight: '20px'
    }
  });


  
const SkillEditPassport = (props) => {
        const { content, title, text,
                columns, columnLeft, columnRight,
                columnRight__inputsBlock, columnRight__elem,
                infoBlock, infoElem, infoName, infoValue, infoColoredValue,
                authors, authors__block, authors__input
                } = useStyles();
        const {change, skill, getFacilities, facilities} = props;
    useEffect(() => {
        getFacilities();
    }, []);

    const DrawInfoElem = ({name, children, color = '#000000'}) => {
        return (
            <div className={infoElem}>
                <span className={infoName}>{name}</span>
                <span className={infoValue} style={{color: color}}>
                    {children}
                </span>
            </div>
        )
    }

  return (
      <div className={content}>
            <div className={title}>
                <h5>Общие сведения</h5>
            </div>
            <div className={columns}>
                <div className={columnLeft}>
                    <ComboBox 
                        label="На основе компетенции WorldSkills"
                        value={skill.data.typeId || 1}
                        onChange={item => change("worldSkillId", item.id)}
                        dataSource={fakeData}

                    />
                    <ComboBox 
                        required
                        label="Блок"
                        value={{id: skill.data.typeId, name: "Сфера услуг"}}
                        onChange={item => change("categoryId", item.id)}
                        dataSource={fakeData}
                    />

                <div className={infoBlock}>
                    <DrawInfoElem name="Статус компетенции:" color="#007FBD">
                        {skill.info.statusName}
                    </DrawInfoElem>
                    <DrawInfoElem name="Дата создания:">
                        {skill.info.createDate || '14.09.2017'}
                    </DrawInfoElem>
                    <DrawInfoElem name="Дата экспертизы:">
                        {skill.info.approveDate || '14.09.2017'}
                    </DrawInfoElem>
                    <DrawInfoElem name="Дата публикации:">
                        {skill.info.publishDate || '14.09.2017'}
                    </DrawInfoElem>
                </div>
               
                </div>                             
                <div className={columnRight}>
                    <TextField
                        variant="standard"
                        id={skill.data.name}
                        className={text}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={skill.data.name}
                        label={'Наименование'}
                        onChange={(e) =>  change("name", e.target.value)}
                    />
                    <div className={columnRight__inputsBlock}>
                        <div className={columnRight__elem}>
                            <TextField
                                width="20px"
                                required
                                variant="standard"
                                id={skill.data.code}
                                className={text}
                                value={skill.data.code}
                                label={'Код'}
                                onChange={(e) =>  change("code", e.target.value)}
                            />
                        </div>
                        <div className={columnRight__elem}>
                            <ComboBox 
                                required
                                label="Тип"
                                value={skill.data.typeId || 1}
                                onChange={item => change("typeId",item.id)}
                                dataSource={fakeData}
                            />
                        </div>
                        <div className={columnRight__elem}>
                            <TextField
                                variant="standard"
                                id={`${skill.info.createDate}`}
                                className={text}
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={skill.info.createDate || new Date().toJSON().slice(0,4)}
                                label={'Год'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={authors}>
                <div className={title}>
                    <h5>Авторы / Составители</h5>
                </div>
                <div className={authors__block}>
                    <div className={authors__input}>
                        <ComboBox 
                            label="Организация"
                            value={skill.data.orgId}
                            onChange={item => change("orgId", item.id)}
                            dataSource={facilities}
                        />
                    </div>
                    <div className={authors__input}>
                            <ComboBox 
                                label="Сотрудники"
                                value={skill.data.orgId || 1}
                                onChange={item => change("orgId", item.id)}
                                dataSource={facilities}
                            />
                    </div>
                </div>
              
            </div>
      </div>
  );
};

const mapStateToProps = state => ({
    facilities : state.facilities.facilities,
})

const mapDispatchToProps = dispatch => ({
    getFacilities: () =>  dispatch(getFacilities()),
})


export default connect(mapStateToProps, mapDispatchToProps)(SkillEditPassport);
