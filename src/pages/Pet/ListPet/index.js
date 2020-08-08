import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Table, Button, Row, Col } from 'react-bootstrap';

import api from '../../../services/api';

// import { Container } from './styles';

function Pet() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get('/pets').then((res) => setPets(res.data));
  }, [pets.length]);

  return (
    <>
      <h4 className="mt-2">Novo Pet</h4>
      <hr />
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
                    <Link to={`/pets/show/${pet.id}`}>
                      <Button variant="primary">
                        <i className="fa fa-eye mr-2" />
                        Visualizar
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
