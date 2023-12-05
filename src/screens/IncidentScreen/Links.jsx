import { Container, Row, Col } from "react-bootstrap";

const Links = () => {
    return(
        <Container className="ms-3 p-3">
            <Row className="mb-2">
                <Col><h5>ADDRESSES</h5></Col>
                <Col className="ms-auto text-end"><h5>ADD ADDRESS</h5></Col>
            </Row>
            <Row className="mb-2">
                <Col><h5>ACCESSMENTS</h5></Col>
                <Col className="ms-auto text-end"><h5>ADD ACCESSMENTS</h5></Col>
            </Row>
            <Row className="mb-2">
                <Col><h5>DECISIONS</h5></Col>
                <Col className="ms-auto text-end"><h5>ADD DECISIONS</h5></Col>
            </Row>
            <Row className="mb-2">
                <Col><h5>OUTCOMES</h5></Col>
                <Col className="ms-auto text-end"><h5>ADD OUTCOMES</h5></Col>
            </Row>
            <Row className="mb-2">
                <Col><h5>EVENTS</h5></Col>
                <Col className="ms-auto text-end"><h5>ADD EVENTS</h5></Col>
            </Row>
            <Row className="mb-2">
                <Col><h5>INCIDENTS</h5></Col>
                <Col className="ms-auto text-end"><h5>ADD INCIDENTS</h5></Col>
            </Row>
            <Row className="mb-2">
                <Col><h5>INTELLIGENCE</h5></Col>
                <Col className="ms-auto text-end"><h5>ADD INTELLIGENCE</h5></Col>
            </Row>
            <Row className="mb-2">
                <Col><h5>MATERIAL</h5></Col>
                <Col className="ms-auto text-end"><h5>ADD MATERIAL</h5></Col>
            </Row>
            <Row className="mb-2">
                <Col><h5>ORGANIZATIONS</h5></Col>
                <Col className="ms-auto text-end"><h5>ADD ORGANIZATIONS</h5></Col>
            </Row>
            <Row className="mb-2">
                <Col><h5>PEOPLE</h5></Col>
                <Col className="ms-auto text-end"><h5>ADD PEOPLE</h5></Col>
            </Row>
            <Row className="mb-2">
                <Col><h5>STAFF</h5></Col>
                <Col className="ms-auto text-end"><h5>ADD STAFF</h5></Col>
            </Row>
            <Row className="mb-2">
                <Col><h5>STATEMENTS</h5></Col>
                <Col className="ms-auto text-end"><h5>ADD STATEMENTS</h5></Col>
            </Row>
            <Row className="mb-2">
                <Col><h5>VEHICLES</h5></Col>
                <Col className="ms-auto text-end"><h5>ADD VEHICLES</h5></Col>
            </Row>
        </Container>
    )
}

export default Links;