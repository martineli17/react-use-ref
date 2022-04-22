import { Routes, Route, Link } from 'react-router-dom';
import { UsoEmConponente } from './components/uso_em_componente';
import { UsoFilhoParaPai } from './components/uso_em_funcoes_filho_pai';
import { UsoReferenciaHtml } from './components/uso_em_referencia_html';

function App() {
  return (
    <>
      <Link to="/use-ref/html">Uso em Referência HTML</Link>
      <br/>
      <Link to="/use-ref/componente">Uso em Componente</Link>
      <br/>
      <Link to="/use-ref/filho-pai">Uso em Componente Filho-Pai</Link>
      <br/>
      <br/>
      <Routes>
        <Route path='/use-ref'>
          <Route path='html' element={<UsoReferenciaHtml />} />
          <Route path='componente' element={<UsoEmConponente />} />
          <Route path='filho-pai' element={<UsoFilhoParaPai />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
