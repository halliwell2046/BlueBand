import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import UserTable from './UserTable';

const BandIndex = (props) => {
    const [bands, setBands] = useState([]);
    const fetchBands = () => {
        fetch('http://localhost:3000/search/getall', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type' : 'application/json',
                'Authorization' : props.token
            })
        }) .then( (res) => res. json())
        .then((logData) => {
            setBands(logData)
        })
    }

    useEffect(() => {
        fetchBands();
    }, [])
    
    return(
        <Container>
            <Row>
                <Col md="3">

                </Col>
                <Col md="9">
                   <UserTable bands={bands} fetchBands={fetchBands}
                   token={props.token}/>
                </Col>
            </Row>
        </Container>
    )
}

export default BandIndex;