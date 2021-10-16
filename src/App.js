import './App.css';
import HomePage from './pages/home/home.page';
import { Switch, Route } from 'react-router-dom';
import CustomNavbar from './components/navbar/navbar.component';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <HomePage />
    </div>
  );
}

export default App;
