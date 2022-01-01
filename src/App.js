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
  Plans,
  HistoryPage
} from "./pages";
import UserDashboard from "./components/UserDashboard";
import Withdrawal from "./components/Withdrawal";
import AppCreditCard from "./AppCreditCard"
import i16n from './i18n'

function App() {
  const { user } = useAuth()
  const onChange = (event) => {
    i16n.changeLanguage(event.target.value);
  }
  return (
    <Router>
      <Navbar onChange={onChange}/>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="plans" element={<Plans />} />
        {user && <> 
        <Route exact path="dashboard" element={<UserDashboard />} />
<Route exact path="/checkout" element={<AppCreditCard />} />
<Route exact path="system-error" element={<Error2 />} />
<Route exact path="withdraw" element={<Withdrawal />} />
<Route exact path="History" element={<HistoryPage />} />
     </>}
        <Route exact path="login" element={<AppLoginLogout />} />
        <Route exact path="services" element={<Products />} />
        <Route exact path="*" element={<Error />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
