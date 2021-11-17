import './App.css';
import HomePage from './containers/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductListPage from './containers/ProductListPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact 
          render={(props) => <HomePage {...props}/>}
        />
        <Route path="/:slug" exact render={(props) => <ProductListPage {...props}/>} />
      </Routes>
    </div>
  );
}

export default App;
