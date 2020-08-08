import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, Alert } from 'react-bootstrap';

import api from '../../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setShow(false);

    const data = { email, password };

    api.post('/auth', data).then(
      (res) => {
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);
          window.location.href = '/pets';
        }
      },
      (error) => {
        setShow(true);
      }
    );
  };

  if (localStorage.getItem('token')) {
    window.location.href = '/pets';
    return;
  }

  return (
    <>
      <Row className="justify-content-md-center mt-5">
        <Col xs lg="4">
          <Card>
            <Card.Body>
              <Form onSubmit={onSubmit}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Acessar
                </Button>
              </Form>
              {show ? (
                <Alert
                  className="mt-2"
                  variant="danger"
                  onClose={() => setShow(false)}
                  dismissible
                >
                  <Alert.Heading>Ops!</Alert.Heading>
                  <p>Usuário/Senha inválidos!</p>
                </Alert>
              ) : (
                ''
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Login;
