import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CountersCard from '../ui/CountersCard';
import Breadcrumbs from "../ui/Breadcrumbs";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const items = [
  {
    label: "Управление ООП",
    link: "#"
  },
  {
    label: "Ресурсы",
    link: "#"
  },
];

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const ManageResources = ({
  history,
}) => {

const classes = useStyles();

const handleClick = (link) => {
  history.push(link);
}

const orgdata = {'content': 'Организации','counters': [{'title': 'Всего', 'count': '1'}, {'title':'Подрядчики', 'count':'2'}, {'title':'Заявки', 'count':'3'}]}
const mattechdata = {'content': 'Материально-технические ресурсы','counters': [{'title': 'Адреса', 'count': '1'}, {'title':'Площадки', 'count':'2'}, {'title':'Оснащение', 'count':'3'}]}
const empldata = {'content': 'Кадровые ресурсы','counters': [{'title': 'Всего', 'count': '1'}, {'title':'Эксперты', 'count':'2'}, {'title':'Преподаватели', 'count':'3'}]}
const programsdata = {'content': 'Образовательные программы и модули','counters': [{'title': 'Компетенции', 'count': '0'}, {'title':'Модули', 'count':'0'}, {'title':'Программы', 'count':'0'}]}
const infcomdata = {'content': 'Информационно-коммуникационные ресурсы','counters': [{'title': 'Всего', 'count': '1'}, {'title':'Утверждено', 'count':'2'}, {'title':'В работе', 'count':'3'}]}
const infspravdata = {'content': 'Информационно-справочные ресурсы','counters': [{'title': 'Всего', 'count': '1'}, {'title':'Утверждено', 'count':'2'}, {'title':'В работе', 'count':'3'}]}
const spravcompdata = {'content': 'Справочники компетенций и ФГОС','counters': [{'title': 'Всего', 'count': '1'}, {'title':'Утверждено', 'count':'2'}, {'title':'В работе', 'count':'3'}]}

  return (
    <div>
      <Breadcrumbs items={items} />
      <div className={classes.root}>
        <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={orgdata}
            onClick={handleClick}
            goTo={'/work/app/manage/resources/org'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={mattechdata}
            onClick={handleClick}
            goTo={'/work/app/manage/resources/mattech'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={empldata}
            onClick={handleClick}
            goTo={'/work/app/person'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={programsdata}
            onClick={handleClick}
            goTo={'/work/app/manage/resources/programs'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={infcomdata}
            onClick={handleClick}
            goTo={'/work/app/site'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={infspravdata}
            onClick={handleClick}
            goTo={'/work/app/reference'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={spravcompdata}
            onClick={handleClick}
            goTo={'/work/app/manage/resources/competfgos'}
          />
        </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default (withRouter(ManageResources));
