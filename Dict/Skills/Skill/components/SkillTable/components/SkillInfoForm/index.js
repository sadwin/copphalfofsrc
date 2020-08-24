import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "../../../../../../../ui/TextField";
import DataSelect from "../../../../../../../ui/DataSelect";
import {getSpecialitiesGroupAction} from '../../../../store/actions';


const profType = [
  {id: true, name: 'Профессия'},
  {id: false, name: 'Специальность'},
]


const initialInfo = {
  groupId: 1,
  name: "",
  code: "",
  profession: true,
};

const useStyles = makeStyles(() => ({
    content: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    element: {
      width: '40%'
    }
}));

const SpecialityInfoForm = ({
  SpecialityInfo,
  getSpecialitiesGroup,
  specialityGroup,
  disabled,
  onFormChange,
}) => {
  const initialData = SpecialityInfo || initialInfo;
  const [data, setData] = React.useState(initialData);
  const { groupId, name, code, profession } = data;
  const { content, element } = useStyles();


  const onChange = (field, value) => {
    const newState = {
      ...data,
      [field]: value
    };
    
    setData(newState);
    onFormChange(newState);
  };

  React.useEffect(() => {
    getSpecialitiesGroup()
  }, []);

  return (
    <div>
      <DataSelect
        required
        value={groupId}
        onChange={e => onChange("groupId", e.target.value)}
        label="Укрупнённая группа"
        dataSource={specialityGroup}
        disabled={disabled}
      />
      <TextField
        required
        value={name}
        onChange={e => onChange("name", e.target.value)}
        label="Наименование профессии/специальности"
        disabled={disabled}
      />
      <div className={content}>
         <div className={element}>
            <TextField
              required
              value={code}
              onChange={e => onChange("code", e.target.value)}
              label="Код"
              disabled={disabled}
            />
          </div>
          <div className={element}>
            <DataSelect
            required
            value={profession}
            onChange={e => onChange("profession", e.target.value)}
            label="Тип"
            dataSource={profType}
            disabled={disabled}
            />
          </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  specialityGroup: state.specialities.specialityGroup,
});

const mapDispatchToProps = dispatch => ({
  getSpecialitiesGroup: () => dispatch(getSpecialitiesGroupAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpecialityInfoForm);
