import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import api from '../../../services/api';

function PetEdit() {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [city, setCity] = useState('');
  const [mdShow, setMdShow] = useState(false);

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

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { type, name, breed, age, weight, city };

    api.put(`/pets/${id}`, data);
  };

  const deletePet = () => {
    api.delete(`/pets/${id}`);
    window.location.href = '/pets';
  };

  return (
    <>
      <h4>Editar Pet</h4>
      <hr />
      <Form onSubmit={onSubmit}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Tipo</Form.Label>
            <Form.Control as="select" onChange={(e) => setType(e.target.value)}>
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
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Raça</Form.Label>
            <Form.Control
              type="text"
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
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Peso</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </Form.Group>
        </Form.Row>
        <Row>
          <Button className="m-2" variant="primary" type="submit">
            <i className="fa fa-save mr-2" />
            Salvar
          </Button>
          <Button
            className="m-2"
            variant="danger"
            type="button"
            onClick={() => setMdShow(true)}
          >
            <i className="fa fa-trash mr-2" />
            Excluir
          </Button>
        </Row>
      </Form>
      <Modal
        size="md"
        show={mdShow}
        onHide={() => setMdShow(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-md">Atenção!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza de que deseja excluir este registro?
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="danger" onClick={deletePet}>
            <i className="fa fa-trash mr-2" />
            Confirmar
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => setMdShow(false)}
          >
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PetEdit;
