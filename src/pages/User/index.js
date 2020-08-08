import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import { Table, Button } from 'react-bootstrap';

// import { Container } from './styles';

function Pet() {

  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get('/pets').then(res => setPets(res.data))
  }, [pets.length])

  return (
    <>
    <Link to='/pet/create'>
      <Button variant="primary" >Novo Pet</Button>
    </Link>
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
          <th></th>
        </tr>
      </thead>
      <tbody>
        {pets.map(pet => (
          <tr key={pet.id} >
            <td>{pet.id}</td>
            <td>{pet.name}</td>
            <td>{pet.breed}</td>
            <td>{pet.age}</td>
            <td>{pet.weight}</td>
            <td>{pet.type}</td>
            <td>{pet.city}</td>
            <td>
            <Link to={'/pets/edit/'+pet.id}>
              <Button variant="primary" sm>Editar</Button>
            </Link>
            </td>
          </tr>
        ))}

      </tbody>
    </Table>
    </>
  );
}

export default Pet;
