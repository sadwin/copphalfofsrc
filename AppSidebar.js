import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { ReactComponent as HomeIcon } from './theme/menuicons/home.svg';
import { ReactComponent as CatalogIcon } from './theme/menuicons/catalog.svg';
import { ReactComponent as ConstructorIcon } from './theme/menuicons/constructor.svg';
import { ReactComponent as ManageIcon } from './theme/menuicons/manage.svg';
import { ReactComponent as StudyRecIcon } from './theme/menuicons/studyrec.svg';
import { ReactComponent as ScheduleIcon } from './theme/menuicons/schedule.svg';
import { ReactComponent as OprosIcon } from './theme/menuicons/opros.svg';

function ListItemLink(props) {
  const { icon, primary, to, iconclassname } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} {...itemProps} innerRef={ref} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon className={iconclassname}>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

const useStyles = makeStyles({
  list: {
    width: 250,
    paddingTop: '65px',
  },
  fullList: {
    width: 'auto',
  },
  menuitemIcon: {
    minWidth: '32px',
  },
  nested: {
    paddingLeft: '32px',
  },
});

export default function AppSidebar({ history, opened, setOpen }) {
  const classes = useStyles();

  const [submenuOpen, submenusetOpen] = React.useState(true);

  const handleSubmenuClick = () => {
    setOpen(true);
    submenusetOpen(!submenuOpen);
  };

  return (
    <div>
      <Drawer open={opened} onClose={() => setOpen(false)}>
        <div
            className={classes.list}
            role="presentation"
            onClick={() => setOpen(false)}
            onKeyDown={() => setOpen(false)}
        >
          <List aria-label="main mailbox folders" component="nav">
            <ListItemLink to="/work/app/dashboard" primary="Главная" icon={<HomeIcon />} iconclassname={classes.menuitemIcon}/>
            <ListItemLink to="/work/app/catalog" primary="Каталог ОП" icon={<CatalogIcon />} iconclassname={classes.menuitemIcon} />
            <ListItemLink to="/work/app/constructor" primary="Конструктор КиОП" icon={<ConstructorIcon />}  iconclassname={classes.menuitemIcon}/>
            <ListItem button  onClick={handleSubmenuClick}>
              <ListItemIcon className={classes.menuitemIcon}><ManageIcon /></ListItemIcon>
              <ListItemText primary="Управление ООП" />
              {submenuOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
              <List className={classes.nested} component="div" disablePadding>
                <ListItemLink to="/work/app/manage/resources" primary="Ресурсы" />
                <ListItemLink to="/work/app/manage/orders" primary="Заказы" />
              </List>
            </Collapse>
            <ListItemLink to="/work/app" primary="Запись на обучение" icon={<StudyRecIcon />}  iconclassname={classes.menuitemIcon}/>
            <ListItemLink to="/work/app/schedule" primary="Расписание ЦОПП" icon={<ScheduleIcon />}  iconclassname={classes.menuitemIcon}/>
            <ListItemLink to="/work/app/quiz" primary="Опросы" icon={<OprosIcon />}  iconclassname={classes.menuitemIcon}/>
            <Divider />
            <List aria-label="secondary mailbox folders">
              <ListItemLink to="/work/app/dict" primary="Справочники" />
            </List>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
