import { BrowserRouter } from 'react-router-dom';
import { Routings } from './routes/Routings';

import './styles/reset.scss'
import './styles/base.scss'
import './styles/variables.scss'

function App() {
  return (
    <BrowserRouter>
      <Routings />
    </BrowserRouter>
  );
}

export default App;
