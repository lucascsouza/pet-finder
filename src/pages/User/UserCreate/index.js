import React, { useState } from 'react';

import { Form, Button, Col } from 'react-bootstrap';
import api from '../../../services/api';

function UserCreate() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [city, setCity] = useState('');
  const [userState, setUserState] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      street,
      street_number: streetNumber,
      city,
      state: userState,
      password,
    };

    api.post('/users', data).then((res) => {
      if (res.status === 200) {
        window.location.href = '/login';
      }
    });
  };

  return (
    <>
      <h4>Cadastrar-se</h4>
      <hr />
      <Form onSubmit={onSubmit}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Rua</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setStreet(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Número</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setStreetNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Estado</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setUserState(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} lg="6">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          <i className="fa fa-user-plus mr-2" />
          Cadastrar
        </Button>
      </Form>
    </>
  );
}

export default UserCreate;
