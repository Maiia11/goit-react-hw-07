import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from 'yup';
import css from "./ContactForm.module.css"
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short").max(50, "Too long").required('required'),
  number: Yup.string().min(3, "Too short").max(50, "Too long").required('required')
})

const initialValues = {
  name: "",
  number: ""
};


function ContactForm() {

  const dispatch = useDispatch();
  
  const handleSubmit = (values, actions) => {
    dispatch(addContact({
      name: values.name,
      number: values.number
    }))
    actions.resetForm();
  }

  const nameFieldName = useId();
  const nameFieldNumber = useId();

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
      <Form className={css.container}>
        <div className={css.form}>
        <label htmlFor={nameFieldName}> Name </label>
          <Field type="text" name="name" id={nameFieldName} />
          <ErrorMessage className={css.span} name="name" component='span'/>
        </div>
        <div className={css.form}>
        <label htmlFor={nameFieldNumber}> Number </label> 
          <Field type="text" name="number" id={nameFieldNumber} />
         <ErrorMessage className={css.span} name="number" component="span"/>
          </div>
      <button type="submit">Add contact</button>
      </Form>
      </Formik>
  )
}

export default ContactForm