import { Container, Row, Col, Stack } from "react-bootstrap";

const HomeScreen = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <Stack className='vh-100'>
                        <h1  className="m-auto">This is main Content</h1>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default HomeScreen;