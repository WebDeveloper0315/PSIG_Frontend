import { Container, Row, Col, Stack } from "react-bootstrap";

const NotReadyScreen = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <Stack className='vh-100'>
                        <h1  className="m-auto">This is not ready yet</h1>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default NotReadyScreen;