import React from "react";
import { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';


const ATMDeposit = ({onChange, isDeposit}) => {
    const choice = ["Deposit", "Cash Back"];
  
    return (
      <label >
  
        <h3> {choice[Number(!isDeposit)]}</h3>
        <input type="number" width="200" onChange={onChange}></input>
        <input type="submit" width="200" value='submit'></input>
      </label>
    );
  };
  
  const Account = () => {
    let transactionState = 0;
    const [totalStatus, setTotalStatus] = useState(0);
    const [isDeposit, setIsDeposit] = useState(true);
    let status = `Account Balance $ ${totalStatus}`;
    console.log("rendered")
    const handleChange = event => {
      console.log(`handleChange ${event.target.value}`);
      transactionState = Number(event.target.value);
      
    };
    const handleSubmit = (event) => {
      let newTotal;
      if (isDeposit) { newTotal = totalStatus + transactionState; 
    } else if (transactionState <= totalStatus) { newTotal = totalStatus - transactionState; 
    } else {return alert("There are not enough funds available.")};
    console.log(`handlesubmit ${newTotal}`);
  
      setTotalStatus(newTotal);
      event.preventDefault();
    };
    return (
      <form onSubmit={handleSubmit}>
        <h3 className="header-two">Explore Our Amazing Merchandise and Unbeatable Deals! <Badge bg="success">New</Badge></h3>
       

    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">T-shirts</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Luggages</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
        Souvenirs
        </Nav.Link>
      </Nav.Item>
    </Nav>
    
    <Image src="PP.jpg" fluid />;


    <h1 style={{fontFamily: 'sans-serif', textAlign: 'center'}}>
    Earn points by referring friends or making purchases. These points are redeemable for any of our services or merchandise.
      </h1>

        <h1 className="header-one" style={{fontFamily: 'sans-serif', textAlign: 'center'}} > ATM Machine</h1>
        <div >
        <h2 id='total'>{status}</h2>
        <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
        <br></br>
       
        <button className="button"  onClick={()=> setIsDeposit(true)}>Deposit</button>
       
        <button className="button"  onClick={()=> setIsDeposit(false)}>Cash Back</button>
        
      </div>
        
      </form>
    );
  };
  
  

export default Account;