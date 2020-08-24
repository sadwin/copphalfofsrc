import React, { useState, useEffect } from "react";
import { Form, useForm } from "react-final-form";
import { TextField, Select, makeValidate } from "mui-rff";
import { Grid } from "@material-ui/core";
import { MenuItem, TextField as TextFieldNative } from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab';
import Button from "../../ui/Button";
import "date-fns";
import * as Yup from 'yup';

import axios from "axios";

import notify from "devextreme/ui/notify";

const schema = Yup.object().shape({
  assign: Yup.string().required("Укажите назначение ресурса"),
  name: Yup.string().required("Укажите название ресурса"),
  url: Yup.string().required("Ссылка обязательна"),
  siteAccess: Yup.number(),
  organization: Yup.number().required("Выберите организацию"),
  department: Yup.number(),
});

const validate = makeValidate(schema);

function FormContent({handleSubmit, close, values}) {
  const [organizationsDict, setOrganizationsDict] = useState([]);
  const [departmentDict, setDepartmentDict] = useState([]);
  const [accessDict, setAccessDict] = useState([]);

  const [organization, setOrganization] = useState(false);

  const form = useForm();

  form.registerField('siteAccess', () => {}, {});
  form.registerField('organization', () => {}, {});
  form.registerField('department', () => {}, {});

  useEffect(() => {
    async function fetchData () {
      let response = await axios.get("/work/api/organization", {
        headers: {
          'Accept': 'application/json'
        },
      }).catch(() => notify({
        closeOnClick: true,
        closeOnOutsideClick: true,
        message: 'Не удалось загрузить список организаций'
      }, 'error'));

      if(response) {
        setOrganizationsDict(response.data);
      }

      response = await axios.get("/work/api/dict/site-access", {
        headers: {
          'Accept': 'application/json'
        },
      }).catch(() => notify({
        closeOnClick: true,
        closeOnOutsideClick: true,
        message: 'Не удалось загрузить список доступов'
      }, 'error'));

      if(response) {
        setAccessDict(response.data);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(`/work/api/organization/${organization}/department`, {
        headers: {
          'Accept': 'application/json'
        },
      }).catch(() => notify({
        closeOnClick: true,
        closeOnOutsideClick: true,
        message: 'Не удалось загрузить список подразделений'
      }, 'error'));

      if(response) {
        setDepartmentDict(response.data);
      }
    }

    if(organization) {
      fetchData();
    } else {
      setDepartmentDict([]);
    }
  }, [organization]);

  return (
    <div className="dialog-add">
      <form onSubmit={handleSubmit} noValidate>
        <Grid container>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Название"
                InputLabelProps={{
                  shrink: true
                }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="assign"
                label="Назначение"
                InputLabelProps={{
                  shrink: true
                }}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="url"
                label="Ссылка"
                InputLabelProps={{
                  shrink: true
                }}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                options={organizationsDict}
                getOptionLabel={(option) => option.shortName}
                required
                onChange={(e, value) => {setOrganization(value? value.id : false); form.change('organization',value? value.id : false)}}
                renderInput={params => (
                  <TextFieldNative {...params} label="Организация" fullWidth required />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <Autocomplete
                options={accessDict}
                getOptionLabel={(option) => option.name}
                required
                onChange={(e, value) => form.change('siteAccess',value? value.id : false)}
                renderInput={params => (
                  <TextFieldNative {...params} label="Доступ к ресурсу" fullWidth />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <Autocomplete
                options={departmentDict}
                required
                getOptionLabel={(option) => option.name}
                onChange={(e, value) => form.change('department',value? value.id : false)}
                renderInput={params => (
                  <TextFieldNative {...params} label="Подразделение" fullWidth />
                )}
              />
            </Grid>
          </Grid>


          <div className="dialog-add__buttons">
            <Button onClick={close}>Отмена</Button>
            <Button type="submit" color="green">Добавить</Button>
          </div>
        </Grid>
      </form>
    </div>
  );
}

function AddSiteForm({handleSubmit, close}) {
  return (
    <Form
      onSubmit={handleSubmit}
      render={({handleSubmit, values}) => (
        <FormContent handleSubmit={handleSubmit} close={close} values={values} />
      )}
      initialValues={{}}
      validate={validate}
    />
  );
}

export default AddSiteForm;
