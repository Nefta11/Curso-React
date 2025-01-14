function Titulo() {

    //JSX -> 
    const nombre = 'Neftali';
    if (nombre) {
        return <h1>Hola {nombre}</h1>;
    }
    return <h1>Hola extraño</h1>;

}

export default Titulo; 