import './App.css';

import Questao01X from './components/Questao01';
import Pokemon from './components/Questao02';
import Cidades from './components/Questao03';

function App() {
  return (
    <div>
      <h1>Questão 01</h1>
      <Questao01X />
      <hr />
      <h1>Questão 02</h1>
      <Pokemon />
      <hr />
      <h1>Questão 03</h1>
      <Cidades />
      <hr />
      <h1>Questão 04</h1>
      <h4>Está no arquivo txt</h4>
      <hr />
    </div>
  );
}

export default App;
