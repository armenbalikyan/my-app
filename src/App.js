import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { onSearch, tableOnChange } from './components/utils/helperFunctions';

function App() {
  return (
    <div className="App">
      <Form onSearch= {onSearch} tableOnChange={tableOnChange} />
    </div>
  );
}

export default App;
