import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function FavMovieCard(props) {
    const updateFavList=()=>{
        
    }
    return (
        <>
            <Row xs={1} md={4} className="g-4">

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.poster_path} />
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                                <p>{props.overview}</p>

                            </Card.Text>
                            <InputGroup>
                                <InputGroup.Text>write your comment</InputGroup.Text>
                                <Form.Control defaultValue={"ahamd"}  as="textarea" aria-label="With textarea" />
                            </InputGroup>
                            <Button variant="success" onClick={() => {props.addFavoriteHandel() }} >Update</Button>
                            <Button variant="danger">Delete</Button>


                        </Card.Body>
                    </Card>
                </Col>

            </Row>



        </>

    );
}

export default FavMovieCard;

