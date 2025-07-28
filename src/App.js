
import './App.css';
import { Greetings } from './Components/Greetings';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello'
import Message from './Components/Message';
import Counter from './Components/Counter';

function App() { 
  return (
    <div className="App">
      <Greetings name="Ahamad" position="driver">
        <p>This is Children props.</p>
      </Greetings>

      <Greetings name="Mehmood" position="developer">
        <button> Change Driver </button>
      </Greetings>
      <hr></hr>
      <Welcome  name="Mahmood" position="Tester"/>

      <Hello />

      <Message />

      <Counter />
    </div>
  );
}

export default App;
