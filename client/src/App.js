import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Trading from "./pages/Trading";
import PrivateRoute from "./components/PrivateRoute";
import MT5Dashboard from "./pages/Dashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/trading" element={ <PrivateRoute> <Trading /> </PrivateRoute>  }/>
        <Route path="/mt5" element={  <PrivateRoute> <MT5Dashboard /> </PrivateRoute>  }/>
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;