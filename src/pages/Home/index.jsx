import React, { useState, useEffect } from "react";

import { Table, Titulo, Button, RegisterButton, Container } from "./styles";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);

  const getProdutos = async () => {
    fetch("http://localhost/produtos-back/index.php")
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson.records));
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <Container>
      <RegisterButton>
      <Titulo>Listar</Titulo>
        <Link to="/cadastrar">
          <Button>Cadastre</Button>
        </Link>
      </RegisterButton>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.titulo}</td>
              <td>{produto.descricao}</td>
              <td>
                <Link to={"/visualizar/" + produto.id}>Visualizar</Link>
                 Editar Apagar</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
