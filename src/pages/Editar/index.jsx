import React, { useState, useEffect } from "react";

import { Table, Container } from "./styles";

export const Editar = (props) => {
  const [id] = useState(props.match.params.id);

  useEffect(() => {
    const getProduto = async () => {
      const response = await fetch(
        "http://localhost/produtos-back/editar.php?id=" + id
      );
      const responseJson = await response.json();
      console.log(responseJson);
    };
    getProduto();
  }, [id]);

  return (
    <Container>
      <Table>
        <h1>Editar</h1>
      </Table>
    </Container>
  );
};
