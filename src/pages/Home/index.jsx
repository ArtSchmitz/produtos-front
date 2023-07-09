import React, { useState, useEffect } from "react";

import { Table, Titulo, Button, RegisterButton, Container, ButtonContainer, Visu, Edit, Delete, } from "./styles";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);

  const getProdutos = async () => {
    fetch("http://localhost/produtos-back/index.php")
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson.records));
  };

  const deleteProduct = (e, id) => {
    e.preventDefault();
    fetch("http://localhost/produtos-back/apagar.php", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ produto: { id: id } }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert("Erro ao apagar o produto");
        } else {
          alert("Produto apagado com sucesso");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error("Erro ao apagar o produto:", error);
      });
  };

  useEffect(() => {
    getProdutos();
  }, []);

  const linkStyle = {
    color: "#000", 
    textDecoration: "none",  
  };

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
              <img src="" alt="" />
              <ButtonContainer>            
                 <td>
                    <Link to={"/visualizar/" + produto.id}  style={linkStyle}>
                      <Visu>
                        <img src="bloco-de-anotacoes.png" alt="visu" width={30} />
                      </Visu>
                      </Link>
                    <Link to={"/editar/" + produto.id}  style={linkStyle}>
                    <Edit>
                      <img src="editar.png" alt="edit" width={30} />
                    </Edit>
                    </Link>
                    <Delete onClick={(e) => deleteProduct(e, produto.id)}>
                    <img src="excluir.png" alt="delete" width={30} />
                    </Delete>
                  </td>
              </ButtonContainer>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
