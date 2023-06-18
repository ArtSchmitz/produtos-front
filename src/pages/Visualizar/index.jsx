import React, { useEffect, useState } from "react";
import { Container, Products } from "./styles";

export const Visualizar = (props) => {
  const [id] = useState(props.match.params.id);
  const [produto, setProduto] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    const getProduto = async () => {
      const response = await fetch(
        "http://localhost/produtos-back/visualizar.php?id=" + id
      );
      const responseJson = await response.json();
      console.log(responseJson);
      setProduto(responseJson.mensagem);
      setError(responseJson.erro);
    };
    getProduto();
  }, [id]);

  if (error === false) {
    return (
      <Container>
        <Products>
          <h2>
            <span>Titulo:</span> {produto?.titulo}
          </h2>
          <p>
            <span>Descrição:</span> {produto?.descricao}
          </p>
        </Products>
      </Container>
    );
  } else {
    return <h2>Produto não encontrado</h2>;
  }
};
