import React, { useState } from "react";

import { Titulo } from "./styles";

export const Cadastrar = () => {
  const [produto, setProduto] = useState({
    titulo: "",
    descricao: "",
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
        console.log(responseJson);
     });
  };

  return (
    <div>
      <Titulo>Cadastrar</Titulo>
      <form onSubmit={cadProduto}>
        <label>Título: </label>
        <input
          type="text"
          name="titulo"
          placeholder="Título do produto"
          onChange={valorInput}
        />{" "}
        <br />
        <br />
        <label>Descrição: </label>
        <input
          type="text"
          name="descricao"
          placeholder="Descrição do produto"
          onChange={valorInput}
        />{" "}
        <br />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};
