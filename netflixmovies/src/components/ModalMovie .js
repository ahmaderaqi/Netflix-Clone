import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function ModalMovie(props) {
    
    return (
        <>
            <Modal show={props.showFlag} onHide={props.handleclose}>

                <Modal.Header closeButton>
                    <Modal.Title>{props.movieData.title}</Modal.Title>

                </Modal.Header>

                <Modal.Body>
                    <Image src={props.movieData.poster_path} width='100%'></Image>
                    <p>{props.movieData.overview}</p>

                </Modal.Body>

                <Modal.Footer>
                <InputGroup>
                        <InputGroup.Text>write your comment</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" />
                    </InputGroup>



                    <Button variant="secondary" onClick={props.handleclose}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                    


                </Modal.Footer>

            </Modal>
        </>
    )
}

export default ModalMovie