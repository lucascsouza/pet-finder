import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Form, Button, Col } from 'react-bootstrap';
import api from '../../../services/api';

function PetCreate() {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [city, setCity] = useState('');
  const { id } = useParams();

  useEffect(() => {
    api.get(`/pets/${id}`).then((res) => {
      setType(res.data.type);
      setName(res.data.name);
      setBreed(res.data.breed);
      setAge(res.data.age);
      setWeight(res.data.weight);
      setCity(res.data.city);
    });
  }, []);

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    const data = { type, name, breed, age, weight, city };
    await api.post(`/pets`, data).then((res) => {
      if (res.status === 200) {
        window.location.href = '/user/pets';
      }
    });
  };

  return (
    <>
      <h4 className="mt-2">Novo Pet</h4>
      <hr />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              as="select"
              required
              onChange={(e) => setType(e.target.value)}
            >
              <option />
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gato</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Selecione o tipo do seu pet.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Informe um nome válido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Raça</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => setBreed(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Informe a raça do seu pet.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Idade</Form.Label>
            <Form.Control
              type="number"
              min="0"
              required
              onChange={(e) => setAge(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Informe a idade do seu pet.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Peso</Form.Label>
            <Form.Control
              type="number"
              step=".1"
              min="1"
              required
              onChange={(e) => setWeight(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Informe o peso do seu pet.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => setCity(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Informe a cidade onde você reside.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          <i className="fa fa-save mr-2" />
          Salvar
        </Button>
      </Form>
    </>
  );
}

export default PetCreate;
