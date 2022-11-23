import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
function Restuarantcard({ restuarant }) {

    return (
        <Link style={{textDecoration:"none",color:"white"}} to={`view-restuarant/${restuarant.id}`}>
         <Card  className="mb-2" style={{ width: '350px' }}>
            <Card.Img variant="top" className='p-3'style={{ height: '400px' }} src={restuarant.photograph} />
            <Card.Body>
                <Card.Title>{restuarant.name}</Card.Title>
                <Card.Text>
                   {restuarant.neighborhood}
                </Card.Text>
            </Card.Body>
        </Card>
        </Link>
    )
}

export default Restuarantcard