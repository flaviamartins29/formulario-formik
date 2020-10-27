import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import schema from './schema'
import './App.css';


function App() {

  function onSubmit(values, actions) {
    console.log('SUBMIT', values)
  
  }

 

  return (
    <div className="App">
      <Formik 
     // validateOnMount
      validationSchema = {schema}
      onSubmit ={onSubmit}
      initialValues={{
        name: '',
        email: '', 
        Cel: ''}}

      render={() => (
        <Form >
          <div className="justify">
            <label>Name</label>
            <Field name="name" type="text"  />
           
          </div>

          <div>
            <label> email </label>
            <Field name="email" type="email"  />
            
            
          </div>

          <div>
            <label> Celphone </label>
            <Field name="cel" type="text"  />
          </div>

          <button type="submit" > Submit </button>
        </Form>


)}
/>

    </div>
  );
}

export default App;

//const [values, setvalues] = useState({ name: '', email: ''})

//function onChange(ev){
 // setvalues({
  //  ...values,
  //  [ev.target.name]: ev.target.value // usando o valor anterior e subistuindo para o valor atual com o atributo "name"
  //})

// }


/*
 function validate(values) {
    const errors = {}
    if (!values.name){
      errors.name = ' Input the Name'
    }
    if (!values.email){
      errors.email = ' Input the Email'
    }
    return errors
  } 
  
  
  
  <ErrorMessage name="name"/>
   <ErrorMessage name="name"/>*/