import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ModalMovie from './ModalMovie ';
import { useState,useEffect } from 'react';

function Movie(props){
    useEffect(()=>{
        console.log("props")
        console.log(props)
    }, [])
    const [showFlag,setShowFlag] = useState(false);
    const [clickedItem,setClickedItem]=useState({});

    const handleShow = (item) =>{
        console.log(item);
        setClickedItem(item);
        setShowFlag(true);
    }
    const handleclose = () =>{
        
        setShowFlag(false);
    }
    return(
        <>
        <Row xs={1} md={3} className="g-4">
                
                     <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={props.poster_path} />
                            <Card.Body>
                                <Card.Title>{props.title}</Card.Title>
                                <Card.Text>
                                    <p>{props.overview}</p>
                                    
                                </Card.Text>
                                <Button variant="primary" onClick={()=>handleShow(props)}>add to favorite</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                
            </Row>

        <ModalMovie showFlag={showFlag} handleclose={handleclose} movieData={clickedItem}  />
        </>
    );
}

export default Movie;