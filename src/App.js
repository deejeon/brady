import './App.css';
import Notice from "./components/Notice";
import HeaderShipTo from './components/HeaderShipTo';
import HeaderMain from './components/HeaderMain';

function App() {
  return (
    <div className="App">
      <Notice />
      <HeaderShipTo />
      <HeaderMain />
    </div>
  );
}

export default App;
