import React, {useState, useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from "@material-ui/core/Avatar";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Person from "@material-ui/icons/Person"
import {ReactComponent as RedLogo} from "./images/logo_big_svg.svg";
import {ReactComponent as TimeIcon} from "./images/ic_schedule_24px.svg";
import SecurityContext from "./SecurityContext";

import {format} from 'date-fns';
import ru from 'date-fns/locale/ru'
import useInterval from "./util/useInterval";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: 59
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'white',
        position: 'fixed',
        //zIndex: 1200,
        top: 0,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        paddingRight: 0,
    },
    toolbarLeft: {
        display: 'flex',
        alignItems: 'center',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: '#5A6E78',
    },
    title: {
        flexGrow: 1,
    },
    date: {
        marginLeft: '30px',
        color: '#596E79',
    },
    time: {
        margin: '0 5px 0 20px',
    },
    timeText: {
        color: '#596E79',
    },
    arrowOrg: {
        color: '#ffffff',
        display: 'inline-block',
    },
    userInfo: {
        width: '300px',
        height: '100%',
        background: '#778899',
        marginLeft: '24px',
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        width: '40px',
        height: '40px',
        borderRadius: '20px',
        marginLeft: '24px',
    },
    userData: {
        width: '155px',
        marginLeft: '16px',
        maxWidth: '155px',
    },
    userName: {
        fontWeight: '600',
        marginBottom: '5px',
    },
    userOrg: {
        marginTop: '5px',
        fontSize: '10px',
        fontWeight: '400',
        display: 'inline-block',
    },
    divider: {
        width: '1px',
        height: '30px',
        margin: '0 9px 0 22px',
        background: '#DADADA',
    }
}));

const calcToday = () => format(
    new Date(),
    'dd MMMM yyyy',
    {locale: ru}
);

const calcCurrentTime = () => format(
    new Date(),
    'HH:mm'
);

export default function ButtonAppBar({onMenuClick}) {
    const {
        root, appBar, toolbar, toolbarLeft, toolbarRight,
        menuButton, date, time, timeText, userInfo, avatar,
        userData, userName, userOrg, divider, arrowOrg,
    } = useStyles();

    let [today, setToday] = useState(() => calcToday());
    let [currentTime, setCurrentTime] = useState(() => calcCurrentTime());
    let security = useContext(SecurityContext);
    let me = security.me;
    let meName = 'Неизвестный пользователь';
    let meAvatar = null;
    if (me) {
        meName = me.lastName || '';
        if (me.firstName) {
            meName += ' ' + me.firstName.substr(0, 1) + '.';
        }
        if (me.middleName) {
            meName += ' ' + me.middleName.substr(0, 1) + '.';
        }
        if (me.avatar) {
            meAvatar = '/work/api/file/' + me.avatar;
        }
    }
    useInterval(() => {
        setToday(calcToday());
        setCurrentTime(calcCurrentTime());
    }, 3000);

    return (
        <div className={root}>
            <AppBar className={appBar} position="static">
                <Toolbar className={toolbar}>
                    <div className={toolbarLeft}>
                        <IconButton onClick={onMenuClick} edge="start" className={menuButton} color="inherit"
                                    aria-label="menu">
                            <MenuIcon fontSize="large"/>
                        </IconButton>
                        <RedLogo/>
                        <div className={date}>{`Сегодня, ${today}`}</div>
                        <TimeIcon className={time}/>
                        <div className={timeText}>{currentTime}</div>
                    </div>
                    <div className={toolbarLeft}>
                        <NotificationsNoneIcon className={timeText} fontSize="medium"/>
                        <div className={userInfo}>
                            <Avatar className={avatar} src={meAvatar}>
                                <Person />
                            </Avatar>
                            <div className={userData}>
                                <div className={userName}>{meName}</div>
                                {me && me.orgName && <div className={userOrg}>
                                    <span>{me.orgName}</span>
                                </div>}
                            </div>
                            <div className={divider}/>
                            <PowerSettingsNewIcon cursor="pointer" fontSize="medium"
                                                  onClick={() => security.logout()}/>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
