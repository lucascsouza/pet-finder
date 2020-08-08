import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Table, Button, Col, Row } from 'react-bootstrap';

import api from '../../../services/api';

// import { Container } from './styles';

function Pet() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get('/user/pets').then((res) => setPets(res.data));
  }, [pets.length]);

  return (
    <>
      <Row className="mt-1 mb-1">
        <Col md={9}>
          <h4>Meus Pets</h4>
        </Col>
        <Col md={3} style={{ textAlign: 'right' }}>
          <Link to="/pets/create">
            <Button variant="primary">
              <i className="fa fa-paw mr-2" />
              Novo Pet
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-1 mb-1">
        <Col md={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Raça</th>
                <th>Idade</th>
                <th>Peso</th>
                <th>Tipo</th>
                <th>Cidade</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet) => (
                <tr key={pet.id}>
                  <td>{pet.id}</td>
                  <td>{pet.name}</td>
                  <td>{pet.breed}</td>
                  <td>{pet.age}</td>
                  <td>{pet.weight}</td>
                  <td>{pet.type}</td>
                  <td>{pet.city}</td>
                  <td>
                    <Link to={`/pets/edit/${pet.id}`}>
                      <Button variant="primary">
                        <i className="fa fa-pencil mr-2" />
                        Editar
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default Pet;
