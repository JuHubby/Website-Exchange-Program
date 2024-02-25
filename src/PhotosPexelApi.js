import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




export default function Photos() {
    const [query, setQuery] = useState("main cities");
    const [loading, setLoading]= useState(true);
    const [data, setData]=useState([]);

    const doFetch = () => getPhotos(`https://api.pexels.com/v1/search?query=${query}&page=${pageSize}&per_page=${perPage}`);

    const pageSize= 4;
    const perPage = 1;



    
    //A METHOD TO FETCH//
    // useEffect(() => {
    //     setLoading(true);
    //     fetch("https://api.pexels.com/v1/search?query=main cities&curated?page=4&per_page=1", {
    //       headers: {
    //         Authorization: "HERE-GOES-YOUR-API-KEY",
    //       },
    //     })
    //       .then((resp) => resp.json())
    //       .then((data) => {
    //         console.log(data);
    //         // Handle the data (e.g., set it in state)
    //         setLoading(false);
    //         setData(data.photos);
    //       })
    //       .catch((err) => console.log(err));
    //   }, []);

    //ANOTHER WITH FETCH
    // const getPhotos = async () => {
    //     setLoading(true);

    //     await fetch(`https://api.pexels.com/v1/search?query=${query}&curated?page=4&per_page=1`,{
    //         headers: {
    //             Authorization: 'HERE-GOES-YOUR-API-KEY',
    //         },
    //     })
    //     .then((resp) => {
    //         return resp.json();
    //     })

    //     .then((data) => {
    //         setLoading(false);
    //         setData(data.photos);
    //     });
    // };
    //   useEffect(() => {
    //     getPhotos();
    //   }, []);

    //WITH AXIOS 
    const getPhotos = async () => {
        setLoading(true);

        const result = await axios(`https://api.pexels.com/v1/search?query=${query}&page=${pageSize}&per_page=${perPage}`,{
            headers: {
                Authorization: 'HERE-GOES-YOUR-API-KEY',
            },
        })
        .then((result) => {
            return result.data;
            
        })

        .then((data) => {
            setLoading(false);
            setData(data.photos);
           
        });
    };
      useEffect(() => {
        getPhotos();
      }, []);

   
    

      const onKeyDownHandler = (e) =>{
        if (e.keycode === 13) {
            getPhotos();
        }
      };

       //HERE IS A CODE OF PAGINATION
       

    return (
      <div>
        <div className="header-one">
          <h1>Discover Inspiration: Explore the Places Where You Could Study and Live</h1>
        </div>
        <form className="header-two" style={
                  {
                  justifyContent:'center',
                  alignItems:'center',
                  }}
            onSubmit={event => {
            doFetch(`https://api.pexels.com/v1/search?query=${query}&page=${pageSize}&per_page=${perPage}`);
            event.preventDefault();
            }}
        >    
        <input
            className="inputsearch"
            onKeyDown={onKeyDownHandler}
            placeholder="search for destinations"
            onChange={event => setQuery(event.target.value)}
            value={query}
        />
        <button className="button" type="submit">Search</button>
        </form>

        {loading && <div>Loading ...</div>}

        {data?.map((item,index) => {
                return(
                <div className="header-one" key={index} style={
                  {display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  }} >
                <Row xs={1} md={2} className="g-4" style={
                  {display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  }}>
                      {Array.from({ length: 1 }).map((_, idx) => (
                        <Col key={idx}>
                          <Card >
                            <Card.Img variant="top" src={item.src.landscape} />
                            <Card.Body>
                              <Card.Title>{item.alt}</Card.Title>
                              <Card.Text>
                              Photo taken by: {item.photographer}
                              </Card.Text>
                              <Button variant="primary">More Details</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                      </Row>
                      </div>
                )
              })}

        

        <div className="header-one">
        <div><div style={{fontSize: "55%" }}><a href="https://www.pexels.com">Photos provided by Pexels</a></div></div>
        <br></br>
        <button style={{height:'35px', width:'35px'}}
        className="button">1</button>
        <button style={{height:'35px', width:'35px'}}
        className="button">2</button>
        <button style={{height:'35px', width:'35px'}}
        className="button">3</button>
        <button style={{height:'35px', width:'35px'}} 
        className="button">4</button> 
        </div>
        
       
       


       
      </div>
    );
  }

  
   