import Card, { CardBody } from "./components/Card"
import List from "./components/List"

function App() {
  const list = [
    "Naruto",
    "Sasuke",
    "Obito",
    "Madara",
    "Kakashi"
  ];


  return (
    <Card>
      <CardBody title="Hola Nefta Eres mi mundo" text="Este es el texto" />
      <List data={list} />
    </Card>
  );
}

export default App;