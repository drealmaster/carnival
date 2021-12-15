import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import AppLoginLogout from "./AppLoginLogout";
import { useAuth } from "./context/AuthContext";
import {
  Home,
  Error2,
  Error,
  About,
  Products,
  // AuthWrapper,
} from "./pages";
import UserDashboard from "./components/UserDashboard";
import Withdrawal from "./components/Withdrawal";
import AppCreditCard from "./AppCreditCard"

function App() {
  const { user } = useAuth()
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        {user && <> 
        <Route exact path="dashboard" element={<UserDashboard />} />
<Route exact path="/checkout" element={<AppCreditCard />} />
<Route exact path="system-error" element={<Error2 />} />
<Route exact path="withdraw" element={<Withdrawal />} />
     </>}
        <Route exact path="login" element={<AppLoginLogout />} />
        <Route exact path="services" element={<Products />} />
        <Route exact path="*" element={<Error />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
