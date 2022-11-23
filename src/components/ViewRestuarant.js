import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap'
import RestOp from './RestOp'
import RestREviews from './RestREviews'
function ViewRestuarant() {
  const params = useParams()


  // create state to hold all restuarant
  const [allRestuarants, setRestuarant] = useState([])

  // function to call api to call api to get all restuarant list.json
  const getRestuarant = async () => {
    await fetch('/db.json')
      .then((data) => {
        data.json()
          .then((result) => {
            setRestuarant(result.restaurants);
          })
      })
  }



  useEffect(() => {
    getRestuarant()

  }, [])

  const viewRest = allRestuarants.find(item => item.id == params.id)
  console.log(viewRest);
  return (
    <>
      {
        viewRest ? (
          <Row className='m-5'>
            <Col lg={3} style={{width:"400px"}}>
              <Image src={viewRest.photograph} fluid></Image>
            </Col>
            <Col>
            <h1>{viewRest.name}</h1>
          <h5>{viewRest.cuisine_type}</h5>
          <h6>{viewRest.neighborhood}</h6>
          <h6>{viewRest.address}</h6>
          <RestOp operate={viewRest.operating_hours}/>
          <hr></hr>
          <RestREviews reviews={viewRest.reviews}/>
            </Col>
          </Row>
        ) : 'null'
      }
    </>
  )
}

export default ViewRestuarant