import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Login from "./Login/Login";
import OrderPage from "./Order/OrderPage";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Router>
        <Routes>
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
