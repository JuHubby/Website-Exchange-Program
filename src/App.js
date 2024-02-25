import React from "react";
import { useFormik } from "formik";
import SignUp from "./IntakenForm";
import Board from "./game";
import Checklist from "./ToDoList";
import Account from "./shopCart";
import Photos from "./PhotosPexelApi";
import CollapsibleNavBar from "./navBar";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';



function MydModalWithGrid(props) {
  const formik = useFormik({
    initialValues: {
      emailField: "",
      pswField: "",
    },
    onSubmit: (values) => {
      alert("Login Successful");
      console.log("form:", values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.emailField) errors.emailField = "Field required";
      if (!values.pswField) errors.pswField = "Field required";
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField))
        errors.emailField = "Username should be an email";
      return errors;
    },
  });
  
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
       
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
        <form
        onSubmit={formik.handleSubmit}
        
      >
        <div>Username:</div>
        <input
          type="text"
          name="emailField"
          onChange={formik.handleChange}
          value={formik.values.emailField}
        ></input>{" "}
        <br></br>
        {formik.errors.emailField ? (
          <div className="error-validation">
            {formik.errors.emailField}
          </div>
        ) : null}{" "}
        <br></br>
        <div>Password:</div>
        <input
          type="text"
          name="pswField"
          onChange={formik.handleChange}
          value={formik.values.pswField}
        ></input>
        {formik.errors.pswField ? (
          <div className="error-validation">
            {formik.errors.pswField}
          </div>
        ) : null}
        <br></br>
        <br></br>
        <button
          type="submit"
          name="submitBtn"
          className="button"
        >
          Submit
        </button>
      </form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = useState(false);
  
  return (
    <div>

      <CollapsibleNavBar/>
      <Photos/>
       <Checklist />
       
      < >
      <header
        className="header"
      >
         <Alert  variant='success'>
         <h1>Sign up with us to unlock exclusive discounts and receive updates on new programs. Plus, earn points towards purchasing our merchandise!</h1>{" "}
         <Button variant="primary" onClick={() => setModalShow(true)}>
        Start Here!
      </Button>
        </Alert>
      
      
      </header>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
      
      
      
     
      <SignUp />
      <Board />
      <Account />
      
  
    

      
      
    </div>
  );
}

export default App;

    