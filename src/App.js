import './App.css';
import Header from './components/Header';
import SwipeButton from './components/SwipeButton';
import TinderCards from './components/TinderCards';

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButton />
    </div>
  );
}

export default App;
