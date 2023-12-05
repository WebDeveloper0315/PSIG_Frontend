import { Container, Form, Row, Col, Button, Stack } from "react-bootstrap";
import { useState } from "react";

const CustomFields = () => {
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

    return(
        <Container className="p-3 ms-3">
            <Form>
                <Form.Group className="mb-1" as={Row}>
                    <Form.Label column sm="2">Investigations No:</Form.Label>
                    <Col sm="4">
                        <Form.Control as="textarea" rows={2} />
                    </Col>
                </Form.Group>
                <Form.Group className="mb-1" as={Row}>
                    <Form.Label column sm="2">Primary Team:</Form.Label>
                    <Col sm="4">
                        <Form.Select>
                            <option>Type1</option>
                            <option>Type2</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Group className="mb-1" as={Row}>
                            <Form.Label column sm="3" className="ms-auto">Security Level:</Form.Label>
                            <Col sm="8">
                                <Form.Select>
                                    <option>Type1</option>
                                    <option>Type2</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                    </Col>
                </Form.Group>
                <Form.Group className="mb-1" as={Row}>
                    <Form.Label column sm="2">TT or Sim No:</Form.Label>
                    <Col sm="4">
                        <Form.Control as='textarea' row={2} />
                    </Col>
                    <Col>
                        <Form.Group className="mb-1" as={Row}>
                            <Form.Label column sm="3" className="ms-auto">HR Case No:</Form.Label>
                            <Col sm="8">
                                <Form.Control as='textarea' row={2} />
                            </Col>
                        </Form.Group>
                    </Col>
                </Form.Group>
                <Form.Group className="mb-1" as={Row}>
                    <Form.Label column sm="2">Root Cause(How):</Form.Label>
                    <Col sm="4">
                        <Form.Select>
                            <option></option>
                            <option></option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Group className="mb-1" as={Row}>
                            <Form.Label column sm="3" className="ms-auto">Root Cause(Why):</Form.Label>
                            <Col sm="8">
                                <Form.Select>
                                    <option></option>
                                    <option></option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                    </Col>
                </Form.Group>
                <Form.Group className="mb-1" as={Row}>
                    <Form.Label column sm="2">Business Unit:</Form.Label>
                    <Col sm="4">
                        <Form.Select>
                            <option></option>
                            <option></option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group className="mb-1" as={Row}>
                    <Form.Label column sm="2">Region:</Form.Label>
                    <Col sm="4">
                        <Form.Select>
                            <option></option>
                            <option></option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group className="mb-1" as={Row}>
                    <Form.Label column sm="2">RSM:</Form.Label>
                    <Col sm="4">
                        <Form.Select>
                            <option>Type1</option>
                            <option>Type2</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Group className="mb-1" as={Row}>
                            <Form.Label column sm="3" className="ms-auto">Location Category:</Form.Label>
                            <Col sm="8">
                                <Form.Select>
                                    <option>Type1</option>
                                    <option>Type2</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                    </Col>
                </Form.Group>
                <Form.Group className="mb-1" as={Row}>
                    <Form.Label column sm="2">LE Referal:</Form.Label>
                    <Col sm="4">
                        <Form.Select>
                            <option></option>
                            <option></option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group className="mb-1" as={Row}>
                    <Form.Label column sm="2">Police Case No:</Form.Label>
                    <Col sm="4">
                        <Form.Control type="text" />
                    </Col>
                </Form.Group>
                <Form.Group className="mb-1" as={Row}>
                    <Form.Label column sm="2">Disposition:</Form.Label>
                    <Col sm="10">
                        <Form.Control as="textarea" rows={2} />
                    </Col>
                </Form.Group>
                <Form.Group className="mb-1" as={Row}>
                    <Form.Label column sm="2">Findings:</Form.Label>
                    <Col sm="10">
                        <Form.Control as="textarea" rows={2} />
                    </Col>
                </Form.Group>
                <Form.Group className="mb-1" as={Row}>
                    <Form.Label column sm="2">Recommendations:</Form.Label>
                    <Col sm="10">
                        <Form.Control as="textarea" rows={2} />
                    </Col>
                </Form.Group>
                <Form.Group className="mb-1" as={Row}>
                    <Form.Label column sm="2">Approved By:</Form.Label>
                    <Col sm="4">
                        <Form.Select>
                            <option></option>
                            <option></option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Group className="mb-1" as={Row}>
                            <Form.Label column sm="3" className="ms-auto">Date Approved:</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                </Form.Group>
                <Row>
                    <Col>
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
                </Row>
            </Form>
        </Container>
    )
}

export default CustomFields;