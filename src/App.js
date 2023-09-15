import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './assets/App.css';

function App() {
  return (
    <div className="container">
      <div className="quote">
        <Quote />
      </div>
      <Calculator />
    </div>
  );
}

export default App;
