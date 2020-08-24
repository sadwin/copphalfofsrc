import React, { useState, useEffect } from "react";
import { Form, useForm } from "react-final-form";
import { TextField,  makeValidate } from "mui-rff";
import { Grid } from "@material-ui/core";
import { TextField as TextFieldNative } from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab';
import Button from "../../ui/Button";
import "date-fns";
import * as Yup from 'yup';

import axios from "axios";

import notify from "devextreme/ui/notify";

const schema = Yup.object().shape({
  name: Yup.string().required("Укажите название ресурса"),
  location: Yup.string(),
  author: Yup.string(),
  year: Yup.string(),
  referenceType: Yup.number(),
});

const validate = makeValidate(schema);

function FormContent({handleSubmit, close, values}) {
  const [typesDict, setTypesDict] = useState([]);

  const form = useForm();

  form.registerField('referenceType', () => {}, {});

  useEffect(() => {
    async function fetchData () {
      let response = await axios.get("/work/api/dict/resource-type", {
        headers: {
          'Accept': 'application/json'
        },
      }).catch(() => notify({
        closeOnClick: true,
        closeOnOutsideClick: true,
        message: 'Не удалось загрузить список типов ресурсов'
      }, 'error'));

      if(response) {
        setTypesDict(response.data);
      }
    }

    fetchData();
  }, []);

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
                name="location"
                label="Расположение"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="author"
                label="Автор/Составитель"
                InputLabelProps={{
                  shrink: true
                }}
                required
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                name="year"
                label="Год"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={7}>
              <Autocomplete
                options={typesDict}
                getOptionLabel={(option) => option.shortName}
                required
                onChange={(e, value) => {form.change('referenceType',value? value.id : false)}}
                renderInput={params => (
                  <TextFieldNative {...params} label="Вид ресурса" fullWidth required />
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

function AddReferenceForm({handleSubmit, close}) {
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

export default AddReferenceForm;
