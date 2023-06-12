import React, {useEffect, useState } from "react";

export const Visualizar = (props) => {

  const [id] = useState(props.match.params.id)

  useEffect(() => {
    const getProduto = async () => {
      await fetch("http://localhost/produtos-back/visualizar.php?id=" + id)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
      });
    };
    getProduto();
  }, [id]);
  return <h1>Visualizar</h1>;
};
