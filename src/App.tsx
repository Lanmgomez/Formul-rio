import { Formik } from 'formik';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import { FORM_VALUES, VALIDATIONS_SCHEMA } from './components/formValidations';

function App() {

  const formInitialValues = VALIDATIONS_SCHEMA.defaultValues;
  const formValidations = VALIDATIONS_SCHEMA.schema

  const handleSubmit = (values: FORM_VALUES) => {
    if (!values) {
      return
    }

    console.log(values);
  };

  return (
    <div className="App">
      <Formik
        enableReinitialize
        initialValues={formInitialValues}
        validationSchema={formValidations}
        onSubmit={handleSubmit}  
      >
        <EmployeeForm />
      </Formik>
    </div>
  );
}

export default App;
