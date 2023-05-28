import React, { useEffect } from 'react';

import './App.css';

function App() {

  const getProdutos = async () => {
    fetch('http://localhost/produtos-back/index.php')
    .then((response) => response.json())
    .then((responseJson) => (
      console.log(responseJson)
    ));
  }

  useEffect(() => {
    getProdutos();
  }, [])

  return (
   <h1>Listar</h1>
  );
}

export default App;
