import { BrowserRouter as Router, Routes, Route, Navigate, Link} from "react-router-dom";
import { ProductsGrid } from "./Components/ProductsGrid/ProductsGrid";
import { Header } from "./Components/Header/Header";
import './App.css';

function App() {
  return (
    <Router>
      <body >
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to={`/products`} />} />
          <Route path="/products" element={<ProductsGrid />}/> 
        </Routes>
      </body>
    </Router>
  );
}

export default App;
