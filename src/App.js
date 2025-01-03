import logo from './logo.svg';
import './App.css';
import EventDelegationExample from './components/EventDelegationExample';
import EventBubblingExample from './components/EventBubblingExample';
import EventCapturingExample from './components/EventCapturingExample';

function App() {
  return (
    <div className="App">
      <EventDelegationExample/>
      <EventBubblingExample/>
      <EventCapturingExample/>
    </div>
  );
}

export default App;
