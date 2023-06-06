import React, { useState } from "react";

import { Container, ConteudoForm, Titulo, ListButton, Button, AlertSucess, AlertError, Form, Label, Input} from "./styles";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Cadastrar = () => {
  const [produto, setProduto] = useState({
    titulo: "",
    descricao: "",
  });
  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const valorInput = (e) =>
    setProduto({ ...produto, [e.target.name]: e.target.value });

  const cadProduto = async (e) => {
    e.preventDefault();
    // console.log(produto.titulo, produto.descricao);

    await fetch("http://localhost/produtos-back/cadastrar.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ produto }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        if (responseJson.erro) {
          setStatus({
            type: "erro",
            mensagem: responseJson.mensagem,
          });
        } else {
          setStatus({
            type: "sucess",
            mensagem: responseJson.mensagem,
          });
        }
      })
      .catch(() => {
        setStatus({
          type: "erro",
          mensagem: "Erro ao cadastrar produto, tente mais tarde!",
        });
      });
  };

  return (
    <Container>
      <ConteudoForm>
        <ListButton>
          <Titulo>Cadastrar</Titulo>
            <Link to="/">
              <Button>Lista</Button>
            </Link>
          </ListButton>
      {status.type === "erro" ? <AlertError>{status.mensagem}</AlertError> : ""}
      {status.type === "sucess" ? (
        <AlertSucess>{status.mensagem}</AlertSucess>
        ) : (
          ""
          )}
      <Form onSubmit={cadProduto}>
        <Label>Título: </Label>
        <Input
          type="text"
          name="titulo"
          placeholder="Título do produto"
          onChange={valorInput}
          />{" "}
        <br />
        <br />
        <Label>Descrição: </Label>
        <Input
          type="text"
          name="descricao"
          placeholder="Descrição do produto"
          onChange={valorInput}
          />{" "}
        <br />
        <br />
        <Button type="submit">Cadastrar</Button>
      </Form>
     </ConteudoForm>
    </Container>
  );
};
