import { Container, Row, Col, Stack, Form, Button } from "react-bootstrap";
import { useState } from "react";

const Details = () => {
    const [formData, setFormData] = useState({
        // Initialize with default values or fetch existing data
        type: '',
        reference: '',
        // Add other form fields here
    });
    
    const handleSave = () => {
        // This function saves the form data to a database or any storage mechanism
        // You can update the logic to save the data using your preferred method (POST request to an API, local storage, state management, etc.)
        // For this example, we're just logging the saved data
        console.log('Form saved:', formData);
    };

    return (
        <Container className="p-3">
            <Form>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group className="mb-1" as={Row} controlId="exampleForm.ControlInput1">
                                <Form.Label column sm="2">Type:</Form.Label>
                                <Col sm="4">
                                    <Form.Select>
                                        <option>Type1</option>
                                        <option>Type2</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-1" as={Row} controlId="exampleForm.ControlTextarea1">
                                <Form.Label column sm="2">Reference:</Form.Label>
                                <Col sm="4">
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-1" as={Row} controlId="exampleFor">
                                <Form.Label column sm="2">How Reported:</Form.Label>
                                <Col sm="4">
                                    <Form.Select>
                                        <option>Report Type1</option>
                                        <option>Report Type2</option>
                                    </Form.Select>
                                </Col>
                                <Col sm="6">
                                    <Form.Group as={Row} className="m-auto w-100" controlId="exampleFor">
                                        <Col sm="1" />
                                        <Form.Label column sm="3">Date Reported:</Form.Label>
                                        <Col sm="5">
                                            <Form.Control type="text" placeholder={new Date().toLocaleDateString()}/>
                                        </Col>
                                    </Form.Group>
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-1" as={Row} controlId="exampleFor">
                                <Form.Label column sm="2">Taken By:</Form.Label>
                                <Col sm="4">
                                    <Form.Select>
                                        <option>Alhareth Aboud</option>
                                        <option>Hamprecht Guenter</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-1" as={Row} controlId="exampleFor">
                                <Form.Label column sm="2">Date Occured:</Form.Label>
                                <Col sm="4">
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-1" as={Row} controlId="exampleForm.ControlTextarea1">
                                <Form.Label column sm="2">Reported By:</Form.Label>
                                <Col sm="5">
                                    <Form.Control type="text" />
                                </Col>
                                <Col sm="5">
                                    <Stack direction="horizontal" gap="3">
                                        <div>Select Staff</div>
                                        <div>Select Person</div>
                                        <div>Select Organization</div>
                                    </Stack>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-1" as={Row} controlId="exampleForm.ControlTextarea1">
                                <Form.Label column sm="2">Title:</Form.Label>
                                <Col sm="5">
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-3">
                    <Row className="ms-2">
                        <Col>
                            <h5>SUBJECTS</h5>
                        </Col>
                        <Col sm="3">
                            <Stack direction="horizontal" gap="3">
                                <h5>Add Organization</h5>
                                <h5>Add Person</h5>
                            </Stack>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-1" as={Row} controlId="exampleForm.ControlTextarea1">
                                <Form.Label column sm="2">Location:</Form.Label>
                                <Col sm="5">
                                    <Form.Control type="text" />
                                </Col>
                                <Col sm="5">
                                    <div>Select Location</div>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-1" as={Row} controlId="exampleForm.ControlTextarea1">
                                <Form.Label column sm="2">Notes:</Form.Label>
                                <Col sm="10">
                                    <Form.Control as="textarea" rows={3} />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-1" as={Row} controlId="exampleForm.ControlTextarea1">
                                <Form.Label column sm="2">Assigned To:</Form.Label>
                                <Col sm="4">
                                    <Form.Select>
                                        <option></option>
                                        <option></option>
                                    </Form.Select>
                                </Col>
                                <Col sm="6">
                                    <Row>
                                        <Col sm="2" />
                                        <Form.Label column sm="3">Case Priority:</Form.Label>
                                        <Col>
                                            <Form.Select>
                                                <option></option>
                                                <option></option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-1" as={Row} controlId="exampleForm.ControlTextarea1">
                                <Form.Label column sm="2">Status:</Form.Label>
                                <Col sm="4">
                                    <Form.Select>
                                        <option></option>
                                        <option></option>
                                    </Form.Select>
                                </Col>
                                <Col sm="6">
                                    <Row>
                                        <Col sm="2" />
                                        <Form.Label column sm="3">Date Completed:</Form.Label>
                                        <Col>
                                            <Form.Control type="text" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-1" as={Row} controlId="exampleForm.ControlTextarea1">
                                <Form.Label column sm="2">Review After:</Form.Label>
                                <Col sm="2">
                                    <Form.Select>
                                        <option></option>
                                        <option></option>
                                    </Form.Select>
                                </Col>
                                <Col sm="2">
                                    <Stack direction="horizontal" gap="1">
                                        <Form.Label>on:</Form.Label>
                                        <Form.Control type="text" />
                                    </Stack>
                                </Col>
                                <Col sm="6">
                                    <Stack direction="horizontal" gap="3" className="justify-content-end">
                                        <Button onClick={handleSave} variant="primary" className="mt-3">
                                            Save
                                        </Button>
                                        <Button onClick={handleSave} variant="primary" className="mt-3">
                                            Save & Continue
                                        </Button>
                                        <Button onClick={handleSave} variant="primary" className="mt-3">
                                            Cancel
                                        </Button>
                                    </Stack>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </Container>
      );                                                                                                                                                                                                                                                                                                                
}

export default Details;