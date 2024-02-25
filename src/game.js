import Alert from 'react-bootstrap/Alert';
import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Square({ value, onSquareClick }) {
  return (
    <button style={{
        background: 'black',
        border: '1px solid #999',
        float: 'left',
        fontSize: '24px',
        fontWeight: 'bold',
        lineHeight: '34px',
        height: '34px',
        marginRight: '-1px',
        marginTop: '-1px',
        padding: 0,
        textAlign: 'center',
        width: '34px',
        fontFamily: "georgia",
        textAlign: "center"
      }} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board() {
  const [XisNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (XisNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXisNext(!XisNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next turn is for: " + (XisNext ? "X" : "O");
  }

  let reset = () => setSquares(Array(9).fill(null));

  return (
    <>
     <div>
     <Button variant="primary" size="lg" onClick={handleShow}>
      Feeling the pressure? How about a round of tic-tac-toe?
      </Button>
     </div>
      

      <Offcanvas style={
                  {
                  justifyContent:'center',
                  alignItems:'center',
                  }}
bg="dark" data-bs-theme="dark" show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title   ></Offcanvas.Title>
        </Offcanvas.Header>TIC-TAC-TOE GAME
        <Offcanvas.Body>
        <Alert variant='success'>If you win, you'll receive a discount coupon applicable to any of our program applications or merchandise purchases.
        GOOD LUCK!</Alert>
        <br></br>
          <div className="box-game">
        
      <div className="status" >{status}</div>
      <div style={{
        backgroundColor: "gray",
      }}>
      <div  >
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
    
      <div >
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
    
      <div  >
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      
      </div>
      <br></br>
      <div>
        <MyButtonReset onclick={reset}> </MyButtonReset>
      </div>
    </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>

    
  );
}

function calculateWinner(squares) {
  const list = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < list.length; i++) {
    const [a, b, c] = list[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function MyButtonReset({ onclick }) {
  return <button className="button" onClick={onclick}> Start Over</button>;
}

export default Board;
  