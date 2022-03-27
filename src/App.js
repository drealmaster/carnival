import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { useAuth } from "./context/AuthContext";
import {
  Home,
  Error2,
  Error,
  About,
  Products,
  // Plans,
  HistoryPage,
  BitcoinPage,
  BitcoinPage2
} from "./pages";
import UserDashboard from "./components/UserDashboard";
import Withdrawal from "./components/Withdrawal";
import AppCreditCard from "./AppCreditCard"
import i16n from './i18n'
import SingIn from "./components/SingIn";
import SignUp from "./components/SignUp";

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
        {/* <Route exact path="plans" element={<Plans />} /> */}
        {user && <> 
        <Route exact path="dashboard" element={<UserDashboard />} />
<Route exact path="/checkout" element={<BitcoinPage />} />
<Route exact path="/check-out" element={<BitcoinPage2 />} />
<Route exact path="/credit-card" element={<AppCreditCard />} />
<Route exact path="system-error" element={<Error2 />} />
<Route exact path="withdraw" element={<Withdrawal />} />
<Route exact path="History" element={<HistoryPage />} />
     </>}
        <Route exact path="login" element={<SingIn />} />
        <Route exact path="signup" element={<SignUp />} />
        <Route exact path="services" element={<Products />} />
        <Route exact path="*" element={<Error />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
