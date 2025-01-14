function App() {

  //JSX -> 
  const nombre = 'Neftali';
  return (
    <>
      {nombre ? <h1>Hola {nombre}</h1> : <h1>Hola Extraño</h1>}
    </>
  );
}

export default App; 