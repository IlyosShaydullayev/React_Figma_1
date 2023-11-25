import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Page1 from './pages/page1/Page1'

function App() {
  return (
    <Router>
      <Page1/>
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
