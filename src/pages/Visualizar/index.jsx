import React from "react";
import { useEffect } from "react";

export const Visualizar = () => {
  useEffect(() => {
    const getProduto = async () => {
      await fetch("http://localhost/produtos-back/visualizar.php?")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
      });
    };
    getProduto();
  }, []);
  return <h1>Visualizar</h1>;
};
