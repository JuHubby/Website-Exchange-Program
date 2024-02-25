import React from "react";
import { useFormik } from 'formik';

function SignUp(){
    const formik = useFormik({
        initialValues:{
        year:'',
        name:'',
        email:'',
        destinationcountry:'',
        checkbox:'false'
    },
    onSubmit: values => {
      alert( "Login Successful");
      console.log( 'form:', values);
    },
    validate: values => {
      let errors = {};
      if(!values.email) errors.email ="Field required";
      if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Username should be an email';
      return errors;

    }
    

  });
  
  

    return (
        < form onSubmit={formik.handleSubmit} className="header-one">
        <h1>Apply for our high school exchange program by filling out the form for more info.</h1>
        <div>Grade Level</div>
        <select type="text" name="year" onChange={formik.handleChange} value={formik.values.year}>
            <option value="Freshman">Freshman</option>
            <option value="Sophmore">Sophmore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>    
        </select>
        <div>Name</div>
        <input onChange={formik.handleChange} value={formik.values.pswField} type="text" name="name"/>
        <div>Email</div>
        <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange}/>
        {formik.errors.email ? <div className="error-validation">{formik.errors.email}</div> : null} <br></br>
        <div>Destination country</div>
        <select type="text" name="destinationcountry" value={formik.values.destinationcountry} onChange={formik.handleChange}>
            <option value="usa">United Stated</option>
            <option value="col">Colombia</option>
            <option value="china">China</option>
            <option value="thailand">Thailand</option>    
        </select>
        <div><input type="checkbox" name="checkbox" value={formik.values.checkbox} onChange={formik.handleChange}/> 
        By checking this box, I agree to receive any publicity related to this program via email.
        </div>
        <button type="submit" className="button" >Submit</button>    
        </form>
    );
}

export default SignUp;