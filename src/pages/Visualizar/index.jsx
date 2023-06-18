import React, {useEffect, useState } from "react";

export const Visualizar = (props) => {
  const [id] = useState(props.match.params.id)
  const [produto, setProduto] = useState(null)

  useEffect(() => {
    const getProduto = async () => {
      const response = await fetch("http://localhost/produtos-back/visualizar.php?id=" + id)
      const responseJson = await response.json();
      setProduto(responseJson.mensagem)
    };
    getProduto();
  }, [id]);

  return(
    <div>
      <h1>{produto?.titulo}</h1>
      <h1>{produto?.descricao}</h1>
    </div>
  )
};
