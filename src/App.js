import React from 'react'
import { Formik, Field } from 'formik'

import './App.css';

function onSubmit(values, actions) {
  console.log('to aqui', values)

}

function App() {
  return (
    <div className="App">
      <Formik 
      onSubmit ={onSubmit}
      initialValues={{
        name: '',
        email: '', 
        Cel: ''}}

      render={({ values, handleSubmit }) => (
        <form onSubmit= {handleSubmit}>
          <div>
            <label>Name</label>
            <Field name="name" type="text"  />
          </div>

          <div>
            <label> email </label>
            <Field name="email" type="text"  />
          </div>

          <div>
            <label> Celphone </label>
            <Field name="cel" type="text"  />
          </div>

          <button type="submit"> Submit </button>
        </form>


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