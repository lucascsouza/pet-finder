import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Form, Button, Col } from 'react-bootstrap';
import api from '../../../services/api';

function PetEdit() {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [city, setCity] = useState('');
  const [owner, setOwner] = useState('');
  const [message, setMessage] = useState('');
  const { id } = useParams();

  useEffect(() => {
    api.get(`/pets/${id}`).then((res) => {
      setType(res.data.type);
      setName(res.data.name);
      setBreed(res.data.breed);
      setAge(res.data.age);
      setWeight(res.data.weight);
      setCity(res.data.city);
      setOwner(res.data.owner.name);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { message };

    api.post(`/pets/contact/${id}`, data);
  };

  return (
    <>
      <h4>Detalhes do Pet</h4>
      <hr />
      <Form onSubmit={onSubmit}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              as="select"
              disabled
              onChange={(e) => setType(e.target.value)}
            >
              <option />
              <option value="Cachorro" selected={type === 'Cachorro'}>
                Cachorro
              </option>
              <option value="Gato" selected={type === 'Gato'}>
                Gato
              </option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              disabled
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Raça</Form.Label>
            <Form.Control
              type="text"
              disabled
              onChange={(e) => setBreed(e.target.value)}
              value={breed}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Idade</Form.Label>
            <Form.Control
              type="text"
              disabled
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Peso</Form.Label>
            <Form.Control
              type="text"
              disabled
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              type="text"
              disabled
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Dono</Form.Label>
            <Form.Control
              type="text"
              disabled
              onChange={(e) => setOwner(e.target.value)}
              value={owner}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Contatar Dono</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Enviar Mensagem</Button>
      </Form>
    </>
  );
}

export default PetEdit;
