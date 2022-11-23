import React, { useState, useEffect } from 'react'
import Restuarantcard from './Restuarantcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {restuarantListAction} from '../Actions/restuarantListAction'
import { useDispatch, useSelector } from 'react-redux';

function Restuarantlist() {
  // create state to hold all restuarant
  const [allRestuarants, setRestuarant] = useState([])

  // function to call api to call api to get all restuarant list.json
  // const getRestuarant = async () => {
  //   await fetch('/db.json')
  //     .then((data) => {
  //       data.json()
  //         .then((result) => {
  //           setRestuarant(result.restaurants);
  //         })
  //     })
  // }

const dispatch=useDispatch()
const result=useSelector(state=>state.restuarantReducer)
const {restuarantList}=result



  useEffect(() => {
    // getRestuarant()
    dispatch(restuarantListAction())
  }, [])
  // if not want to rerender all time put a [] after }, "[]" }


  return (
    <Row >
      {
        restuarantList.map(item => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Restuarantcard restuarant={item} />
          </Col>

        ))
      }
    </Row>
  )
}

export default Restuarantlist