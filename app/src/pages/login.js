import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useLogin from "@/hooks/useLogin";

export default function Login() {
  const { mutate: doLogin, isError, isLoading } = useLogin();

  const [isErrorMessageAllowed, setIsErrorMessageAllowed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const identifier = data.get("identifier");
    const password = data.get("password");
    // const identifier = "daniel.gardiner.tech@gmail.com";
    // const password = "passwordD'1";
    doLogin({ identifier, password });
    setIsErrorMessageAllowed(true);
  };

  const handleChange = () => {
    setIsErrorMessageAllowed(false);
  };

  return (
    <>
      <main className="mt-4">
        <Container>
          {isError && isErrorMessageAllowed && (
            <Alert variant="danger">An error occured</Alert>
          )}
          <Row>
            <h1>Login</h1>
            <Col xs={8}>
              <Form onSubmit={handleSubmit} onChange={handleChange}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name="identifier"
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We&apos;ll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={isLoading}>
                  {isLoading ? <> Submitting...</> : <>Submit</>}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
