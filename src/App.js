import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Page3 from './pages/page3/Page3'

function App() {
  return (
    <Router>
      <Page3/>
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
