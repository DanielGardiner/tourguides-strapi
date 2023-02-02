import { useState } from "react"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from "react-bootstrap";

export default function DebugFooter() {
  const [showDebugGrid, setShowDebugGrid] = useState(false)
  const handleClick = () => setShowDebugGrid((prev) => !prev)

  return (
    <>
      {showDebugGrid && (
        <div className="position-fixed top-0 bg-info w-100 h-100 opacity-2">
          <Container className="h-100">
            <Row className="h-100">
              <Col xs={1} className="bg-danger border border-white text-center">1</Col>
              <Col xs={1} className="bg-danger border border-white text-center">2</Col>
              <Col xs={1} className="bg-danger border border-white text-center">3</Col>
              <Col xs={1} className="bg-danger border border-white text-center">4</Col>
              <Col xs={1} className="bg-danger border border-white text-center">5</Col>
              <Col xs={1} className="bg-danger border border-white text-center">6</Col>
              <Col xs={1} className="bg-danger border border-white text-center">7</Col>
              <Col xs={1} className="bg-danger border border-white text-center">8</Col>
              <Col xs={1} className="bg-danger border border-white text-center">9</Col>
              <Col xs={1} className="bg-danger border border-white text-center">10</Col>
              <Col xs={1} className="bg-danger border border-white text-center">11</Col>
              <Col xs={1} className="bg-danger border border-white text-center">12</Col>
            </Row>
          </Container>
        </div>
      )}

      <div className="p-2 position-fixed bottom-0">
        <button onClick={handleClick} type="button" className="btn btn-outline-primary">Grid</button>
      </div>
    </>
  )
}
