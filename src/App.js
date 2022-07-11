import './App.css';
import Notice from "./components/Notice";
import HeaderShipTo from './components/HeaderShipTo';
import HeaderMain from './components/HeaderMain';
import ColoredLine from './components/ColoredLine';

function App() {
  return (
    <div className="App">
      <Notice />
      <HeaderShipTo />
      <hr style={{ width: 1000, height: 5, color: 'black' }} />
      <HeaderMain />
    </div>
  );
}

export default App;
